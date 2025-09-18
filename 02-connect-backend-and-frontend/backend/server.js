import express from "express";

const app=express();

app.get("/",(req,res)=>{
    res.send("home route")
})

app.get("/api/accountInfo",(req,res)=>{
    const accountInfo=[
        {
            id:1,
            name:"anshul",
            content:"this is anshul's account"
        },
        {
            id:2,
            name:"john",
            content:"this is john's account"
        }
    ]
    res.send(accountInfo)
})

const port= process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})