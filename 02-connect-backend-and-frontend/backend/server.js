import express from "express";

const app=express();

app.get("/",(req,res)=>{
    res.send("home route")
})

const port= process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})