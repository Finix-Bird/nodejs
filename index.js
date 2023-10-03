const http=require('http')
// const url=require('url')

// const name="Karthi"
// http.createServer((req,res)=>{
//     res.end("<h1>Welcome "+name+"</h1>")
// }).listen(4000)

const app=http.createServer((req,res)=>{
    // res.write(req.url)
    if(req.url==="/")
    {
        res.write("<h1>HOME</h1>")
    }
    if(req.url==="/about")
    {
        res.write("<h1>ABOUT</h1>")
    }
    if(req.url==="/product")
    {
        res.write("<h1>Our Services</h1>")
    }
    res.end()
})


app.listen(2500,()=>{console.log('Server started on 2500')})