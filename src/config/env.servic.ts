import dotenv from "dotenv"
import path from "path"

const mood = process.env.MOOD_ENV ?? "dev"
process.env.MOOD_ENV = mood

dotenv.config({ path: path.resolve(`./.env.${mood}`) })

const port = process.env.PORT
const salt = process.env.SALT
const database_url = process.env.DATABASE_URL
const user_signature = process.env.USER_SIGNATURE
const admin_signature = process.env.ADMIN_SIGNATURE
const user_refresh =  process.env.USER_REFRESH_TOKEN
const admin_refresh = process.env.ADMIN_REFRESH_TOKEN
const google_email = process.env.GOOGLE_EMAIL
const google_app_password = process.env.GOOGLE_APP_PASSWORD
const server_url = process.env.SERVER_URL
const redis_url = process.env.REDIS_URL
const google_client_id = process.env.GOOGLE_CLIENT_ID
export const env = {
    port, 
    mood, 
    salt,
    database_url,
    user_signature,
    admin_signature,
    user_refresh,
    admin_refresh,
    google_email,
    google_app_password,
    server_url,
    redis_url,
    google_client_id
}
