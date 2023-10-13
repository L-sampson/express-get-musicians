const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.get('/musicians', async (req, res)=>{
try{
    const musicians = await Musician.findAll();
    res.json(musicians);
}
catch(error){
    res.status(500).json({error: `An error occured when fetching musicians`});
}
})

app.get('/musicians/1', async(req, res)=>{
    const musician_1 = await Musician.findByPk(1);
    res.json(musician_1);
})

app.get('/musicians/2', async(req, res)=>{
    const musician_2 = await Musician.findByPk(2);
    res.json(musician_2);
})

app.get('/musicians/3', async(req, res)=>{
    const musician_3 = await Musician.findByPk(3);
    res.json(musician_3);
})

app.get('/bands', async(req, res)=>{
    const band = await Band.findAll();
    res.json(band);
})



module.exports = app;