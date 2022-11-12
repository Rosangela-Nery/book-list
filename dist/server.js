import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import genreRoutes from './routes/genreRoutes.js';
import statusRoutes from './routes/statusRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
dotenv.config();
var server = express();
server.use(cors());
server.use(express.json());
server.use(authRoutes);
server.use(genreRoutes);
server.use(statusRoutes);
server.use(bookRoutes);
var PORT = process.env.PORT || 4000;
server.listen(PORT, function () {
    console.log("Server open in: ".concat(PORT));
});
