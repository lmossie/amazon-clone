const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require('express');
const cors = require('cors');
const { Message } = require("firebase-functions/v1/pubsub");
const dotenv = require("dotenv");
dotenv.config()

const stripe = require('stripe')(process.env.STRIPE_KEY)

const app = express();
app.use(cors({origin:true}));

app.use(express.json())

app.get("/",(req, res)=>{
    res.status(200).json({
        Message:"success",
    });
});


app.post("/payment/create", async (req, res) => {
    const total = req.query.total;
    console.log("Payment Request Recieved for this amount >>> ", total);
    if (total > 0) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });
     
  
      // OK - Created
      res.status(201).json({
        clientSecret: paymentIntent.client_secret,
      });
    } else {
      res.status(400).send({ message: "no amaunt provided" });
    }
  });


exports.api = onRequest(app);
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });