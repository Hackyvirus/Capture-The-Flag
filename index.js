import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views/'));
app.set('view engine', 'ejs');
const PORT = 4000;

let users = [];
let userName = [];
let Nusers= [];



app.get("/", (req, res) => {
        res.render("login");
});




app.listen(process.env.PORT || PORT, () => {
        console.log(`server is started on ${PORT}`)
})