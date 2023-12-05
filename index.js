import express from "express";
import db from "./DB/Connect.js";
import cors from "cors";
import dotenv from "dotenv";
import StudentRoutes from "./Routes/Studentroutes.js";
dotenv.config();
db();

const app = express();

app.use(cors());
const PORT = 4000;

app.get("/server-admin", function (request, response) {
  response.send("Welcome to the Student Admin server");
});


app.use("/api", StudentRoutes);


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));