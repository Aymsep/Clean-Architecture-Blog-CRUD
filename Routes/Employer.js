const express = require('express');
const { AddEmployer, getEmployers, update,updateEmployer,deleteEmployer } = require('../Controllers/Employer');
const Router = express.Router()
const upload = require('../Middlewares/multer')



Router.post('/add',upload.single('image'),AddEmployer)
Router.post('/update/:id',upload.single('image'),updateEmployer)
Router.delete('/delete/:id',deleteEmployer)
Router.get('/all',getEmployers)








module.exports = Router



