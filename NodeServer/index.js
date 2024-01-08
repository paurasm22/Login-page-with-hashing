const userModel = require('./Model/model')
const express  = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')

const server = express();


server.use(express.json());
server.use(cors())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Login');
  // console.log("connect to mongo db")
}

// Middleware

server.post('/register', async(req,res)=>{
    const {name,email,password}  = await req.body.data
    bcrypt.hash(password,10)
    .then((hash)=>{
      userModel.create({name:name,email:email,password:hash})
    .then((response)=>{
      res.json(response)
    })
    .catch((error)=>{
      res.json(error)
    })

    }).catch((error)=>{
      console.log(error)
    })
    //  await res.json(data)
     
}
)


server.post('/login',(req,res)=>{
  const {email,password} = (req.body.data)
  userModel.findOne({email:email})
  .then((user)=>{
   if(user){
    bcrypt.compare(password,user.password,(err,resp)=>{
      
      if(resp){
        res.json("Success")
      }
      else{
        res.json("Invalid ID or Password!!")
      }
    })
   }else{
    res.json("User not found")
   }
  })

})







server.listen(8080,()=>{
  // console.log('Server Started')
})