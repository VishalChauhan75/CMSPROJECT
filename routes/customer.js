const express =require('express');
var router=express.Router();
var customer=require('../BLL/customerDBBll')
const bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false})

router.get('/',(req,res)=>{
    var p = customer.displayallcustomer();
    p.then((data)=>{
        res.render('customer',{cusArr:data})
        
    })
})

router.get('/search/:id',(req,res)=>{
    var cus =new customer();
    var p = cus.searchcustomer(req.params.id);
    p.then((cus)=>{
            var p1=customer.displayallcustomer();
            p1.then((data)=>{
                console.log(data);
            res.render('customer',{cusArr:data,cus:cus})
        })
     }) 
})

router.get('/delete/:id',(req,res)=>{
    var cus=new customer();
    var p = cus.deletecustomer(req.params.id);
    p.then((cus)=>{
        var p1=customer.displayallcustomer();
        p1.then((data)=>{
            console.log(data);
            res.render('customer',{cusArr:data})
        })
    })
})

router.post('/',urlencodedParser,async (req, res) => {
 // console.log(req.body);
 if('btnAdd' in req.body){
    var cus = new customer();
    cus.id = parseInt(req.body.id);
    cus.name = req.body.name;
    cus.address = req.body.address;
    cus.mobileno = req.body.mobileno;
  
    var result = cus.addcustomer();
    result.then(
      (cus) => {
        var p = customer.displayallcustomer();
        p.then(
          (data) => {
            res.render("customer", { cusArr: data });
          },
          (err) => {
            res.render("customer", { cus: err });
          }
        );
      },
      (err) => {
        res.render("customer", { cusArr: [], err: err });
      }
    );
  }else if('btnUpdate' in req.body){
    var cus = new customer();
    // cus.id = req.body.id;
    cus.name = req.body.name;
    cus.address = req.body.address;
    cus.mobileno = req.body.mobileno;
    var cus = cus.updatecustomer(cus.id);
    cus.then((data) => {
      var p = customer.displayallcustomer();
      p.then((data) => {
        res.render("customer", { cusArr: data });
      });
    }); 
}});




// router.post('/update',urlencodedParser,async (req, res) => {
// if('btnAdd' in req.body){
//     var result = new customer();
// result.id=req.body.id;
// result.name=req.body.name;
// result.address=req.body.address;
// result.mobileno=req.body.mobileno;  
//   var cus = await result.addcustomer();
//   res.render('customer',{cusArr:cus})  
// }
// else if('btnUpdate' in req.body){
//     var result = new customer();
//     result.id=req.body.id;
//     result.name=req.body.name;
//     result.address=req.body.address;
//     result.mobileno=req.body.mobileno;  
//       var cus = await result.updatecustomer(result.id);
//       res.render('customer',{cusArr:cus}) 
// }
//     });


// ... (existing code)



module.exports=router;



// const express = require("express");
// var router = express.Router();
// const Customer = require("../BLL/CustomerDbBll");
// const bodyParser = require("body-parser");
// var urlencodedParser = bodyParser.urlencoded({ extended: true });
// Customer.initializeConnection();

// router.get("/", (req, res) => {
//   var p = Customer.showAllCustomer();
//   p.then((data) => {
//     res.render("Customer", { cusArr: data });
//   });
// });

// router.post("/", urlencodedParser, async (req, res) => {
//   //we need data

//   // console.log(req.body);
//   if('btnAdd' in req.body){
//   var cus = new Customer();
//   cus.id = parseInt(req.body.txtId);
//   cus.name = req.body.txtName;
//   cus.address = req.body.txtAddress;
//   cus.mobile = req.body.txtMobile;

//   var result = cus.addCustomer();
//   result.then(
//     (cus) => {
//       var p = Customer.showAllCustomer();
//       p.then(
//         (data) => {
//           res.render("Customer", { cusArr: data });
//         },
//         (err) => {
//           res.render("Customer", { cus: err });
//         }
//       );
//     },
//     (err) => {
//       res.render("Customer", { cusArr: [], err: err });
//     }
//   );
// }else if('btnModify' in req.body){
//   var cus = new Customer();
//   cus.id = req.body.txtId
//   cus.name = req.body.txtName;
//   cus.address = req.body.txtAddress;
//   cus.mobile = req.body.txtMobile;
//   var cus = cus.modifyCustomer(cus.id);
//   cus.then((data) => {
//     var p = Customer.showAllCustomer();
//     p.then((data) => {
//       res.render("Customer", { cusArr: data });
//     });
//   });
  

// }
// }
// );

// router.get("/search/:id", (req, res) => {
//   var cus = new Customer();
//   var id = req.params.id;
//   var cus = cus.searchCustomer(id);
//   cus.then((cus) => {
//     var p = Customer.showAllCustomer();
//     p.then(
//       (data) => {
//         res.render("Customer", { cusArr: data, cus: cus });
//       },
//       (err) => {
//         res.render("Customer", { cusArr: data, err: err.message });
//       }
//     );
//   });
// });

// router.get("/delete/:id", (req, res) => {
//   var cus = new Customer();
//   var id = req.params.id;
//   var cus = cus.deleteCustomer(id);
//   cus.then((data) => {
//     var p = Customer.showAllCustomer();
//     p.then(
//       (data) => {
//         res.render("Customer", { cusArr: data });
//       },
//       (err) => {
//         res.render("Customer", { cusArr: data, err: err });
//       }
//     );
//   });
// });

// module.exports = router;