const express = require('express');
const app = express();
const serverConfig = require('./Config/serverConfig')
const {server,color} = require('./Config/config')
const {connection} = require('./Config/database')
const db = connection()













serverConfig()
db.connectToMongo()
  









const AdminRouter = require('./Routes/Admin')
const EmployerRouter = require('./Routes/Employer');

app.use('/',AdminRouter)
app.use('/',EmployerRouter)






app.listen(server.PORT,()=>{
    console.log(color.green,`Connected to ${server.PORT} ✓`)
})