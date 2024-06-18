// const fs =require('fs')

// fs.writeFile("hey.txt","hello god",(err)=>{
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("done")
//     }
// })


// append file
// fs.appendFile("hey.txt","mai cool",(err)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("done")
//     }
// })


//rename 
// fs.rename("hey.txt","hello.txt",(err)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("done")
//     }
// })


// copy
// fs.copyFile("hello.txt",'./copy/chacha.txt',(err)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("done")
//     }
// })

// unlike
// fs.unlink("hello.txt",(err)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("done")
//     }
// })


// remove folder
// fs.rmdir('./copy',{recursive:true},(err)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("done")
//     }
// })


// create folder
// fs.mkdir('./god',(err)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("done")
//     }
// })
// fs.rm('./god',{recursive:true},(err)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("done")
//     }
// })

// read file
// const data = fs.readFileSync(filePath, 'utf8');


// Create server
const http=require('http')
const server=http.createServer((req,res)=>{
    res.end("hello bro")
})
server.listen(3000)