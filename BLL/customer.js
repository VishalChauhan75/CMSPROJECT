class customer{
    static arr1=[ ];
    constructor(){
        this.id= 0;
        this.name=' ';
        this.address=' ';
        this.mobileno=' ';
    }
    addcustomer(){
        customer.arr1.push(this);
    }
    searchcustomer(){
        var cus=customer.arr1.find(e=>e.id==id);            
        this.id=cus.id;
        this.name=cus.name;
        this.address=cus.address;
        this.mobileno=cus.mobileno;
    } 
    updatecustomer(){
        var cus=customer.arr1.find(e=>e.id==id);
        cus.id=this.id;
        cus.name=this.name;
        cus.address=this.address;
        cus.mobileno=this.mobileno;
    }
    deletecustomer(){
        var s = customer.arr1.indexOf(e=>e.id==id);
        customer.arr1.splice(s,1);
    }
    static displayallcustomer(){
        return customer.arr1;
    }
}

module.exports=customer;