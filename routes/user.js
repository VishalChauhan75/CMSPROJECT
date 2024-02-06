const  express = require('express');
 const session =require('express-session');
var router=express.Router();
const bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended: false})
const cookieParser =require('cookie-parser');
router.use(cookieParser());
router.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized:false
}))

router.get('/',(req,res)=>{
    res.render('userHome');
})

router.get('/adduser',(req,res)=>{
    res.render('adduser',{user:{}});
})
router.get('/page1',(req,res)=>{
    // res.render('page1',{user:req.session.user});
    res.render('page1',{user:JSON.parse(req.cookies.user)});
})
router.get('/page2',(req,res)=>{         
    // res.render('page2',{user:req.session.user});
    res.render('page2',{user:JSON.parse(req.cookies.user)});
})
// router.post('/adduser',urlencodedParser,(req,res)=>{
//         let name=req.body.exampleInputName;
//         let email=req.body.exampleInputEmail;
//         req.session.email=email;
//         req.session.name=name;
//         res.render('adduser',{message:'information added succesfully',email:email,name:name});
// })


// stored data in cockies

router.post('/adduser',urlencodedParser,(req,res)=>{
    let name=req.body.exampleInputName;
    let email=req.body.exampleInputEmail;
    // req.session.email=email;
    obj={name:name,email:email}
    // req.session.user=obj;
    // req.session.name=name; 
    res.cookie('user',JSON.stringify(obj));
    res.render('adduser',{message:'information added succesfully',user:obj});
})

router.post('/add',urlencodedParser,(req,res)=>{

});
module.exports=router;