
const express = require('express')
const fs=require("fs");
const app = express()
const port = 3000
const home=fs.readFileSync(`Home.html`,'utf-8',function(err)
{
    if(err){
        console.log('error');
    }
    else{
        console.log(`file read sucessfully`);
    }
})
const login=fs.readFileSync(`login.html`,'utf-8',function(err)
{
    if(err){
        console.log('error');
    }
    else{
        console.log(`file read sucessfully`);
    }
})
const register=fs.readFileSync(`register.html`,'utf-8',function(err)
{
    if(err){
        console.log('error');
    }
    else{
        console.log(`file read sucessfully`);
    }
})
const update=fs.readFileSync(`update.html`,'utf-8',function(err)
{
    if(err){
        console.log('error');
    }
    else{
        console.log(`file read sucessfully`);
    }
})
const deletepage=fs.readFileSync(`delete.html`,'utf-8',function(err)
{
    if(err){
        console.log('error');
    }
    else{
        console.log(`file read sucessfully`);
    }
})
const flipkart=fs.readFileSync(`flipkart.html`,'utf-8',function(err)
{
    if(err){
        console.log('error');
    }
    else{
        console.log(`file read sucessfully`);
    }
})
app.get('/', (req, res) => {
  res.send(home)
})
app.post('/login', (req, res) => {
    res.send(login)
})
  app.get('/register', (req, res) => {
    res.send(register)
  })  
  app.get('/update', (req, res) => {
    res.send(update)
  })
  app.get('/delete', (req, res) => {
    res.send(deletepage)
  })
  app.get('/flipkart', (req, res) => {
    res.send(flipkart)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})