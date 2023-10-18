const CONSTANTS = require('../Config/constant')
const {generateSaltAndHash} = require('../Utils/Hashing')
const {getEmployerById} = require('../Utils/userQuery')



class employerServices{
    constructor(userRepo){
        this.userRepo = userRepo
    }

    async addEmployer(req){
        const response = {}
        const {username,age,salary,email,password,active} = req.body
        if(!username || !age || !salary || !email || !password || !active || !req.file){
            response.message = CONSTANTS.FIELD_EMPTY
            response.status = CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE
            return response
        }
        const {filename:image} = req.file
        const newUser = {
            username,
            age,
            salary,
            email,
            password:await generateSaltAndHash(password),
            image
        }
  
        const user = await this.userRepo.addEmployer(newUser)
        if(!user){
            response.message = CONSTANTS.SERVER_ERROR_MESSAGE
            response.status = CONSTANTS.SERVER_INTERNAL_ERROR_HTTP_CODE
            return response;
        }
        response.message = CONSTANTS.USER_CREATED
        response.status = CONSTANTS.SERVER_CREATED_HTTP_CODE
        response.data = user
        return response;   
    }

    async updateEmployer(req){
        const response = {}
        const {id} = req.params
        const {username,age,salary,email,password,active} = req.body
        const currentUser = await getEmployerById(id)
        const updatedUser = {
            username,
            age,
            salary,
            email,
            password,
            active,
            image:req.file?req.file.filename:currentUser.image
        }
        const user = await this.userRepo.updateEmployer(id,updatedUser)
        if(!user){
            response.message = CONSTANTS.SERVER_ERROR_MESSAGE
            response.status = CONSTANTS.SERVER_INTERNAL_ERROR_HTTP_CODE
            return response;
        }
        response.message = CONSTANTS.USER_UPDATED
        response.status = CONSTANTS.SERVER_UPDATED_HTTP_CODE
        response.data = user
        return response;   
    }

    async deleteEmployer(req){
        const response = {}
        const {id} = req.params
        const user = await this.userRepo.deleteEmployer(id)
        console.log(user)
        if(user.deletedCount == 0 ){
            response.message = CONSTANTS.ALREADY_USER_DELETED
            response.status = CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE
            return response;
        }
        response.message = CONSTANTS.USER_DELETED
        response.status = CONSTANTS.SERVER_OK_HTTP_CODE
        response.data = user
        return user
    }

    async getEmployers(req){
        const response = {}
        const users = await this.userRepo.getEmployers()
        response.message = CONSTANTS.USER_FOUND
        response.status = CONSTANTS.SERVER_OK_HTTP_CODE
        response.data = users
        return users;
    }
    
}


module.exports = {employerServices}