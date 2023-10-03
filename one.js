class myClass
{
    constructor(name)
    {
        this.name=name
    }
    myFun()
    {
        console.log("My Name is ",this.name)
    }

}
// const c1=new myClass("Karthi")
// const c2=new myClass("Rajkumar")


//To export class
module.exports.myClass=myClass