
const express=require('express');
const app=express();
const bodyParser = require('body-parser')
const dbconnection = require('./dbconnection');
const userRouter=require('./userRouter');

dbconnection();

app.use(bodyParser.json());


app.use('/api',userRouter);

/*
app.use('/',(req,res)=>
{
    res.send("i am saranya")
})
*/
//to create the port
app.listen(5000,()=>
{
  console.log("server start")
})

