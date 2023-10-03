const http=require('http')
const path=require('path')
const fs=require('fs')

// console.log(path.basename('one.js'))
// console.log(path.extname('one.js'))
// console.log(__dirname)
// console.log(__filename)

// console.log(path.extname(__filename))
// console.log(path.parse(__filename).name)


// console.log(path.extname(__filename))
// console.log(path.join('test','test.js'))
// fs.mkdir('test',(err)=>{
//     if(err){throw err}
//     console.log('Dir created')
// })

//file creation



// fs.writeFile(path.join(`${__dirname}/test/hello.js`),"Hello World",(err)=>{
//     if(err){throw err}
//     console.log('File created')
// })

const app=http.createServer((req,res)=>{
    fs.readFile(path.join(`${__dirname}/calc.js`),'utf8',(err,data)=>{
        // console.log('Hello')
        res.write(data)
        res.end()
    })
})

app.listen(2500,()=>{console.log('server created on 2500')})










