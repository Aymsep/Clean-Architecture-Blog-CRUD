const express = require('express');
const app = express();
require('dotenv').config()
const cookies = require('cookie-parser');

module.exports = ()=>{
    app.use(cookies())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }));
}