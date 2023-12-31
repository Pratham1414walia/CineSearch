import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'
const app=express();

const port=process.env.PORT || 8000;
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
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


app.post('/api/contact', bodyParser.urlencoded({extended:false}), (req , res)=>{

    const UserName=req.body.name;
    const userEmail=req.body.email;
    const UserMessage=req.body.message; 
    const mailOptions={
        from:{
          name:`${UserName}`,
          address:`${userEmail}`,
        },
        to:process.env.USER_EMAIL,
        subject:`Feedback from ${UserName}`,
        text:"HELLO WORLD?",
       html:`<p>Message : ${UserMessage}</p>`,
      }
    
      transporter.sendMail(mailOptions,(err)=>{

        if(err){
           res.json(err);
        }
        else{
            res.json({code :200 ,status:"Message Sent"});
        }
    })

})



app.listen(port,(req,res)=>{
    console.log(`Server starting at port no ${port}`);
})