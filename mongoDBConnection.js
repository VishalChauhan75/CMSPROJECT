const {MongoClient}=require('mongodb');
const url = 'mongodb://localhost:27017';
var myDb ='';
const client = new MongoClient(url);

function readAllDataOfCustomersCollection(){
    
    var Customers=myDb.collection('Customers');
    p= Customers.find({}).toArray();
    p.then((success)=>{
        console.log(success);
    })
}
async function insertCustomer(){
    var Customers=myDb.collection('Customers');
    let result = await Customers.insertMany([{id:4,name:"abc2",address:"mumbai",mobileNo:"4584"},{id:6,name:"abc2",address:"mumbai",mobileNo:"4584"},{id:8,name:"abc2",address:"mumbai",mobileNo:"4584"}]);
    console.log(result);
}

async function deleteCustomer(){
    var Customers=myDb.collection('Customers');
    let result= await Customers.deleteMany({id:6});
    console.log(result);
}


async function updateCustomer(){
    var Customers=myDb.collection('Customers');
    let result= await Customers.updateOne({id:2},{$set:{name:"vishal"}});
    console.log(result);
}

function connectToServer()  {
    var p =client.connect()
    p.then((success)=>{
        myDb=client.db('CustomerDb');
        console.log('Database Server Connected Succesfully');
        updateCustomer();
        // deleteCustomer();
        // insertCustomer();
        // readAllDataOfCustomersCollection();
    },(error)=>{
        console.log(error)
    });
}

connectToServer();
