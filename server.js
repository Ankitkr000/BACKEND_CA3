const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const app=express()

app.use(express.json())
const connectDB=require("./config/db")

const PORT=8080

connectDB()

app.get("/",(req,res)=>{
    res.send("WORKING_from root page")

})

app.post("/login",(req,res)=>{

    try {
        const {email , password}=req.body
    
        if(!email){
           return res.status(401).json({error:"Email cannot be empty"})
        }
        if(!password){
           return res.status(401).json({error:"Password cannot be empty"})
        }
        res.status(201).json({message:"Login Successfull"})
        
    } catch (error) {
        console.log("Internal server error :",error.message)
        
    }

 

})

app.listen(PORT,()=>{
    console.log("server is running")
})