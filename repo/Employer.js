
class employersRepository{
    constructor(userModel){
        this.userModel = userModel;
    }

   async addEmployer(newUser){
        const {username,age,salary,email,password,active,image} = newUser

        const createdEmployer = await this.userModel.create({
           username,
           age,
           salary,
           email,
           password,
           active,
           image
       })
        const userWithoutPassword = createdEmployer.toObject({versionKey: false });
        delete userWithoutPassword.password;
        return userWithoutPassword;
   }

   async updateEmployer(id,updatedEmployer) {
     return await this.userModel.findOneAndUpdate(
        {_id:id},
        updatedEmployer,
        { runValidators: true }
        );
   }

   async deleteEmployer(id) {
    return await this.userModel.deleteOne({_id:id})
   }

   async getEmployers(){
    return this.userModel.find({})
   }
}

module.exports = {employersRepository}