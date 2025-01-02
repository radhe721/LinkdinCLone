import express from "express"
import dotenv from "dotenv"
dotenv.config();
import authRoutes from "./routes/auth.route.js"
import {connectDB}  from "./lib/db.js";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //parse json request bodies

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT http://localhost:${PORT}`);
    connectDB();
});
app.get("/", (req,res) => {
    res.send("Hello World");
});