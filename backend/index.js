import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();


app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;



// app.use((req,res,next) =>{
//   res.send("hello world")
// })

app.use("/api",(req,res,next) =>{
  res.json({message: "Hello from backend!"})
})




app.listen(PORT,() =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})