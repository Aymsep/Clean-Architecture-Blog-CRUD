const Employer = require('../Modals/Employers')
const UserQuery = require('../Utils/userQuery')

const {employersRepository} = require('../repo/Employer')
const {employerServices} = require('../services/employerServices')

const employerRepo = new employersRepository(Employer)
const employerService = new employerServices(employerRepo)


exports.AddEmployer = async (req,res,next) => {
    const user = await employerService.addEmployer(req)
    res.json(user)
}

exports.updateEmployer = async (req, res) => {
    const user = await employerService.updateEmployer(req)
    res.json(user)
}

exports.deleteEmployer = async (req,res) => {
    const user = await employerService.deleteEmployer(req)
    res.json(user)
}

exports.getEmployers = async (req, res)=>{
    const users = await employerService.getEmployers(req)
    res.json(users)
}







