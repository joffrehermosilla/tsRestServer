
import dotenv from "dotenv";
import Server from "./models/server";

//Configurar DOTENV
dotenv.config();


const server = new Server();

server.listen();