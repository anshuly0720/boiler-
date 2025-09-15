require('dotenv').config()
const express = require('express') //import express from 'express'
const app = express() //it has multiple methods like get, post, put, delete, etc.
const port = 3000 //port is the port number on which the server will run

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req,res)=>{
    res.send('login page')
})

app.get('/signup', (req,res)=>{
    res.send('signup page')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
