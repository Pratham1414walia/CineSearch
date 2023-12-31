import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
const app=express();

const port=process.env.PORT || 8000;
dotenv.config();

app.use(cors());
// console.log(process.env.EMAIL_USER)


const transporter=nodemailer.createTransport({
    service:'gmail',
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:process.env.USER_EMAIL,
        pass:process.env.USER_PASS,
    },
})


const mailOptions={
  from:{
    name:'Pratham Walia',
    address:"iit2021263@iiita.ac.in",
  },
  to:process.env.USER_EMAIL,
  subject:"NODEMAILER TEsting",
  text:"HELLO WORLD?",
 html:"<b>HELLO WORLD BY PRATHAM </b>",
}

transporter.sendMail(mailOptions,(err)=>{

    if(err){
        console.log(err);
    }
    else{
        console.log("EMAIL SEnd");
    }
})

app.get('/api/contact',(req,res)=>{

    res.json({message: "Hello from server"});
})





app.listen(port,(req,res)=>{
    console.log(`Server starting at port no ${port}`);
})