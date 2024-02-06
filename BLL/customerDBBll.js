
class customer{
    static mongoose = require('mongoose');
    static url = 'mongodb://localhost:27017';
    // static client = new MongoClient(customer.url);
    static myDb="CustomerNewDb";
    static customerModel='';

    static initializeConnection(){
        customer.mongoose.connect(customer.url+'/'+customer.myDb).then(()=>{
           var customerSchema=customer.mongoose.Schema({
            id:{type:Number,unique:true},
            name:{type:String,required:true},
            address:String,
            mobileno:String
           })
           customer.customerModel=customer.mongoose.model('customer',customerSchema);
            console.log('mongoose connected successfully')
        })
  };
    constructor(){
        this.id= 0;
        this.name=' ';
        this.address=' ';
        this.mobileno=' ';
    } 
    async addcustomer(){
            // var Customers= customer.myDb.collection('customers');
            // let result = await Customers.insertMany([{id:this.id,name:this.name,address:this.address,mobileno:this.mobileno}]);
            let result =await customer.customerModel.create({...this});
            console.log(result);
        
    }
    async searchcustomer(id){
        // var Customers= customer.myDb.collection('Customers');
        let result = await customer.customerModel.findOne({id:id});
        return result;}


        // customerDBBll.js

async updatecustomer(id) {
    // var Customers = customer.myDb.collection('Customers');
    var id = parseInt(id)
    var result = await customer.customerModel.findOne({ id:id });  
    result.id=this.id;      
        result.name =this.name;
        result.address=this.address;
        result.mobileno=this.mobileno;
        result.save();    
    return result;
}



    async deletecustomer(id){
        // var Customers= customer.myDb.collection('Customers');
        let result = await customer.customerModel.deleteOne({id:id});
        return result;
        
    }
    static async displayallcustomer(){
         customer.cusArr = await customer.customerModel.find({})
        return customer.cusArr;
    }
}

module.exports=customer;

// bll code start here

// class Customer {
//     static mongoose = require("mongoose");
//     static url = "mongodb://127.0.0.1:27017";
//     static myDb = "CustomerNewDb";
//     static CustomerModel = "";
  
//     static initializeConnection() {
//       Customer.mongoose.connect(Customer.url + "/" + Customer.myDb).then(() => {
//         var customerSchema = Customer.mongoose.Schema({
//           id: { type: Number, unique: true },
//           name: { type: String, required: true },
//           address: String,
//           mobile: String,
//         });
//         Customer.CustomerModel = Customer.mongoose.model(
//           "Customer",
//           customerSchema
//         );
//         console.log("MongoDb connected successfully");
//       });
//     }
  
//     constructor() {
//       this.id = 0;
//       this.name = "";
//       this.address = "";
//       this.mobile = "";
//     }
  
//     async addCustomer() {
//       try {
//         let result = await Customer.CustomerModel.create({ ...this });
//         console.log(result);
//         return result;
//       } catch (err) {
//         throw err;
//       }
//     }
  
//     static async showAllCustomer() {
//       var arrCus = await Customer.CustomerModel.find({});
//       return arrCus;
//     }
  
//     async searchCustomer(id) {
//       try {
//         var id = parseInt(id);
//         var result = await Customer.CustomerModel.findOne({ id: id });
//         // console.log(result);
//         return result;
//       } catch (err) {
//         throw err;
//       }
//     }
  
//     async deleteCustomer(id) {
//       try {
//         var id = parseInt(id);
//         var result = await Customer.CustomerModel.deleteOne({ id: id });
//         return result;
//       } catch (err) {
//         throw err;
//       }
//     }
  
//     async modifyCustomer(id) {
//       var id = parseInt(id);
//       var customer = await Customer.CustomerModel.findOne({id:id});
//       customer.id = this.id
//       customer.name = this.name;
//       customer.address = this.address;
//       customer.mobile = this.mobile;
//       customer.save()
//       return customer;
//     }
//   }
//   module.exports = Customer;