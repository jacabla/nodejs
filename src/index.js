//importamos app 
import app from "./app";

app.listen(app.get("port"));

console.log("escuando en el puertoL: " + app.get("port"));
