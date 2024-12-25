import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import connectDb from "./config/db.js";

dotenv.config();

const app = express();


// DATABASE CONNECTION
connectDb()


const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*", 
    },
});

app.use(cors());

io.on("connection", (socket) => {
    console.log(`A user connected: ${socket.id}`);

    socket.on("message", (data) => {
        console.log(`Message received: ${data}`);
        io.emit("message", data);
    });

    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

httpServer.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
