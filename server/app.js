//import express from 'express';
//import mongoose from 'mongoose'

const db_user = "admin"
const db_password = "admin"
const db_uri = `mongodb+srv://${db_user}:${db_password}@cluster.hoj0bnk.mongodb.net/?retryWrites=true&w=majority`;

const express = require("express");
const app = express();
const routes = require("./routes/artist");

//const cors = require("cors");
//app.use(cors(corsOptions));
app.use(express.json());

const { default: mongoose } = require("mongoose");

app.get("/", async (req, res) => {
    //res.set("Access-Control-Allow-Origin", "*");
    //res.send(res.json("Hey there...2"));
    return res.json("Hey there...");
})

app.use(express.json());
app.use('/', routes);

//const artistsRoute = require("./routes/artist");
//app.use("/artist/", artistsRoute);

mongoose.Promise = global.Promise
mongoose.connect(db_uri, { useNewUrlParser: true, dbName: "demo-db" }).then(() => {
    console.log('Connected');
}).catch(e => {
    console.log(e, "\nnot connected!");
})

app.listen(4000, () => console.log("Listening to port 4000"));