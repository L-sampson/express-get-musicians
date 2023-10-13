// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");



describe('./musicians endpoint', () => {
    // Write your tests here
    it('Testing request status of musicians endpoint', async ()=>{
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
        expect(response.body[0].name).toBe('Mick Jagger')
        })
    it('Test if response return correct JSON Data', async ()=>{
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
        expect(typeof responseData).toEqual('object');
        expect(responseData[1].name).toEqual('Drake');
        expect(responseData[2].instrument).toEqual('Guitar');
    })
    it('test endpoints of musician/#', async ()=>{
        const res2 = await request(app).get('/musicians/1');
        const res3 = await request(app).get('/musicians/2');
        const res4 = await request(app).get('/musicians/3');
        expect(res2.statusCode).toBe(200);
        expect(res3.statusCode).toBe(200);
        expect(res4.statusCode).toBe(200);
    })
    it('test endpoints for band and JSON parse', async ()=>{
        const resBand = await request(app).get('/bands');
        const bandData = JSON.parse(resBand.text);
        expect(resBand.statusCode).toBe(200);
        expect(resBand.body[0].genre).toBe("Rock");
        expect(typeof bandData).toEqual('object');
        expect(bandData[2].name).toEqual('Coldplay');
        expect(bandData[1].genre).toEqual('Pop');
    })
    




    
})