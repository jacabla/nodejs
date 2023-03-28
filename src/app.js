import { express } from "express";
import morgan from "morgan";
import cors from "cors"
import config from "./config";


// igualamos app a Express
const app = express();


//configuramos el puerto
app.set("port", config.port);

//middleware 
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas


export default app


