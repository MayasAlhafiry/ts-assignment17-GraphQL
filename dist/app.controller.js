import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import { env } from './config/env.servic.js';
import { databaseConnection } from './database/connection.js';
import { globalErrorHandler } from './middleware/errorHandling.js';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './module/graphQL/schema.gql.js';
import userRouter from "./module/user/user.controller.js";
const app = express();
export const bootstrap = () => {
    app.use(express.json());
    app.use('/user', userRouter);
    app.all('/graphQL', createHandler({ schema: schema, context: (req) => { return { req }; } }));
    const limiter = rateLimit({
        windowMs: 10 * 60 * 1000,
        limit: 100,
    });
    databaseConnection();
    app.use(cors({
        origin: '*'
    }));
    app.use(limiter);
    app.use(helmet());
    app.get('/check-health', (req, res) => {
        res.json({ status: "ok" });
    });
    app.use(globalErrorHandler);
    app.listen(env.port, () => {
        console.log(`server is runuing on ${env.port}`);
    });
};
