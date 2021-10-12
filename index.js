const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, })
.then(console.log('MongoDBga ulanish hosil qilindi...'))
.catch((err) => console.error('MongoDBga ulanish vaqtida xato ro`y berdi...', err));

dotenv.config();

app.use(express.json());
app.use("/", (req, res) =>{
    console.log("Bosh url");
});

app.listen("5000", (req, res) =>{
    console.log("5000-port ishlayabdi");
});