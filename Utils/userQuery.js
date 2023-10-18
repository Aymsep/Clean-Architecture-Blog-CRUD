const Employer = require('../Modals/Employers');

class UserQuery {
  async getEmployerById (id){
    return await Employer.findOne({_id:id},'image')
  }

  async getUsersByQuery(queryParams) {
    try {
      const { age, salary,username } = queryParams;
      let query = [];

      if (age) {
        query.push({age:parseInt(age)}) ;
      }

      if (salary) {
        query.push({salary:parseInt(salary)});
      }

      if (username) {
        query.push({username});
      }

      const users = await Employer.find({$or:query });

      return users;
    } catch (error) {
      throw error;
    }
  }

  async getUsersByName(name) {
    try {
      const {username} = query;
      const users = await Employer.find(query);

      return users;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserQuery();
