const bcrypt = require('bcrypt');

class BcryptHashing {
    
  async generateSaltAndHash(password, rounds = 10) {
    try {
      const salt = await bcrypt.genSalt(rounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log(hashedPassword)
      return hashedPassword;
    } catch (error) {
      throw error;
    }
  }

   async verifyPassword(password, hashedPassword) {
    try {
      const isMatch = await bcrypt.compare(password, hashedPassword);
      return isMatch;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new BcryptHashing
