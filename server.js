const express = require("express");
const dotenv = require('dotenv');
dotenv.config()
const db = require("./config/db")
const skillRoute = require("./routes/skillRoute")
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/skills', skillRoute)

app.use(errorMiddleware.notFound)
app.use(errorMiddleware.errorHandler)

module.exports = app;