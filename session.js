const express = require('express');
const session = require('express-session');


const app = express()

app.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false
}));


app.get('/',(req,res)=>{
    if(req.session.counter){
        req.session.counter++
        res.setHeader('Content-Type','text/html')
        res.write('<p>views: '+ req.session.counter + '</p>')
        res.write('<p>expires in: '+(req.session.cookie.maxAge/1000)+ '$</p>')
        res.end()
    }else{
        req.session.counter = 1
        res.end('welcome to the session demo , refresh!')
    }
})

app.listen(3000,'127.0.0.1',()=>{
    console.log('server Started at http://127.0.0.1:3000')
});