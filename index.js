const express =require('express');  
const routeCustomer=require('./routes/customer');
const routeUser=require('./routes/user');
const customer=require('./BLL/customerDBBll')
customer.initializeConnection();
var app = express();
app.use('/customer',routeCustomer);
app.use('/user',routeUser);


app.set('view engine','ejs'); 
app.get('/',(req,res)=>{
    res.render('home');
})
app.listen(7080,'127.0.0.1',()=>{
    console.log('server started at http://127.0.0.1:7080')
    console.log ('server started succesfully')
})



// app.get('/customer/edit/:id',(req,res)=>{
//     console.log(req.params.id);
//     console.log('customer url')
//     res.render('customer',{cusArr:[]});

// })
// app.get('/customer/delete/:id',(req,res)=>{
//     console.log(req.params.id);
//     console.log('customer url')
//     res.render('customer',{cusArr:[]});

// })
// app.get('/customer/search/:id',(req,res)=>{
//     console.log(req.params.id);

//     console.log('customer url')
//     res.render('customer',{cusArr:[]});

// })

