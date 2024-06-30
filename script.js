// NPM understanding
// installing and understanding anything basic & advanced
// npm i one-liner-joke
// npm uninstall one-liner-joke
// version install -> npm i accessibility@3.0.9


// understanding node modules

// dependenci->pakage and module
// devdependenci -> it is use to deploy app
// script-understanding default scripts PATH and custom scripts



const express=require('express')
const app=express()

const path=require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')))


app.set('view engine','ejs')
app.get('/',(req,res)=>{
  res.render('index')
})

app.listen(3000,()=>{
  console.log('done')
})