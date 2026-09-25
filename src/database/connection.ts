import mongoose from 'mongoose'
import { env } from '../config/env.servic.js'

export const databaseConnection = () => {
    mongoose.connect(env.database_url as string).then( () => {
        console.log("database connected")
    }).catch( (err) => {
        console.log("database connection error", err)
    })
}