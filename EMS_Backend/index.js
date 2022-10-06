import express from "express";
import mongoose from "mongoose";

import route from "./Routes/Routes.js";
import cors from "cors";
import bodyParser from "body-parser";

import dotenv from 'dotenv'
dotenv.config();

const username = process.env.MONGOUSERNAME
const password = process.env.MONGOPASSWORD


const app = express();



app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/employees", route);

const PORT = 8000;

const URL = `mongodb+srv://${username}:${password}@emcrud.ei0ru.mongodb.net/test`
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedtopology: true }).then(() => {
    app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
    });
}).catch(error => {
    console.log("Error: ", error.message);
});
