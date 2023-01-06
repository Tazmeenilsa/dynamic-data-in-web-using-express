const express = require("express")
const app = express()
const path=require("path")
const hbs=require('hbs')

const staticPath=path.join(__dirname,"../public")
const templatePath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials")

// to set view engine
app.set("view engine", "hbs"); 

app.set("views",templatePath)

// using partials,,-- require hbs above, store path in a variable
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath))

// template engine route
app.get("/",(req,res)=>{
    res.render("index",{
        userName:"Tazmeen"
    })
})
app.get("/about" ,(req,res)=>{
res.render('about')
})

app.get("/about/*", (req,res)=>{
    res.render("404",{
        errorComment:"Opss this about page not found"
    });
    })

// 404 page
//universal symbol hmesha last m ho 
app.get("*", (req,res)=>{
res.render("404",{
    errorComment:"Opss page not found"
});
})



app.listen(8000,()=>{
    console.log("welcome to port 8000")
})