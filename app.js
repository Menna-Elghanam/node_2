const express=require('express');
const app= express()
const port=process.env.PORT||5000
app.get('/',(req,res)=>{
    res.render('index')
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})

// DB:
const mongoose =require('mongoose')
// connect app with mongo DB:

// templating engine 
const ejs=require('ejs')
app.set('view engine','ejs')
app.set('views', __dirname + '/views');

// serve statatic files:
app.use(express.static('public'))

// livereload:
const path=require('path')

const livereload=require('livereload')
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));
const connectLiveReload=require('connect-livereload')
app.use(connectLiveReload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });



