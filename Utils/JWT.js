const jwt = require('jsonwebtoken');

class JwtManager {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  sign(payload, expiresIn = '1h') {
    try {
      const token = jwt.sign(payload, this.secretKey, { expiresIn });
      return token;
    } catch (error) {
      throw error;
    }
  }

  verify(token) {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      return decoded;
    } catch (error) {
      throw error;
    }
  }
}


module.exports = new JwtManager