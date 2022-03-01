const express=require('express');
const path=require('path');
const app=express();
const hbs=require('hbs');
app.set('view engine','hbs');             // hbs properties
hbs.registerPartials(path.join(__dirname,'views/partials')); // hbs properties
app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/createPost',(req,res)=>{
    res.render('createPost')
})
app.get('/contactUs',(req,res)=>{
    res.render('contactUs')
})
app.get('/registerPage',(req,res)=>{
    res.render('registerPage')
})
app.get('*',(req,res)=>{
    res.send("404 error")
})






app.listen(8000,()=>{console.log("listining on port 8000")});










