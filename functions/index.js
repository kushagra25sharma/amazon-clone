/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_KEY);


// API

// APP config
const app= express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get("/", (req, res) => {
    res.status(200).send("Hello!");
});

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log("Payment recieved ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    res.status(201).send({clientSecret: paymentIntent.client_secret});
});

// Listen command
exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-84dd3/us-central/api