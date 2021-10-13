const express = require('express');
const app = express();
require('./database/db')   ;


app.use(express.json());
app.use("/", (req, res) =>{
    try {
        res.status(200).json("Abdulvoris");
    } catch (err) {
        res.status(500).json(err);
    }
});

app.listen("5000", (req, res) =>{
    console.log("5000-port ishlayabdi");
});