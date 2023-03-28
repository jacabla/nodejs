// para la configuracion del config se llama la libreria
import { config } from "dotenv";

config();

export default {
    port: process.env.PORT, 
    dbUser: process.env.DB_USER,
    dbDatabase: process.env.DB_DATABASE,
    dbPassword: process.env.DB_PASSWORD,
    dbServer: process.env.DB_SERVER,
}