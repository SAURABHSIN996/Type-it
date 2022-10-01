import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
import postRoutes from './routes/posts.js';


const app = express();
dotenv.config();
app.use(express.json())
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/saurabh',postRoutes);

//const CONNECTION_URL = 'mongodb+srv://sawcodes:qEvB5sZxg4MOLNEE@cluster0.lrik1zd.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
