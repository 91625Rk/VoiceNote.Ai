import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import uploadRoutes from "./routes/uploadRoutes.js"
import transcribeRoutes from "./routes/transcribeRoutes.js"
dotenv.config();
const app  = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send ("Api is running");
})
app.use("/api/upload", uploadRoutes);
app.use("/api/transcribe", transcribeRoutes);


console.log("Cloudinary Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);



app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is running at ${process.env.PORT}`)
})