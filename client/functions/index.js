const functions = require('firebase-functions');

const express=require("express");
const cors=require("cors");
const path =require('path');
const bodyParser=require('body-parser');

if(process.env.NODE_ENV!=='production') require('dotenv').config();

const stripe=require('stripe')(process.env.SECRET_STRIPE_KEY);

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello world');
});

app.post('/payment',(req,res)=>{
    const body={
        source:req.body.token.id,
        amount:req.body.amount,
        currency:'usd',
        description:'this is th description'

    };
    stripe.charges.create(body,(stripeErr,stripeRes)=>{
        if(stripeErr){
            res.status(500).send({error:stripeErr});
            console.log(stripeErr)
        }else{
            res.status(200).send({success:stripeRes});
        }
    })
})



exports.app=functions.https.onRequest(app);
