function sum(a,b)
{
    var c=a+b
return c
}
function mul(a,b)
{
    var c=a*b
return c
}

var x=12345

// console.log(sum(10,20))

// module.exports.mul=mul
// module.exports.sum=sum
// module.exports.number=x

module.exports={
    mul:mul,
    add:sum,
    n:x,
    dummy:function(){return "dummy fun"}
}