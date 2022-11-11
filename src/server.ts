import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.use(authRoutes);


const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
    console.log(`Server open in: ${PORT}`)
});