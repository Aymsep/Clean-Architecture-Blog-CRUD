// const login = require('../Modals/Auth')


// const {userServices} = require('../Services/userServices')
// const {UserRepository} = require('../repo/admin')
// const Employer = require('../Modals/Users')

// const userRepo = new UserRepository(Employer)

// const userService = new userServices(userRepo)





// exports.Signin = async(req, res) => {
//     try{
//         const user = await userService.signIn(req)
//         res.cookie("user.cookie.name",user.cookie.value)
//         console.log('entered')
//         res.redirect(user.redirect)
//     }catch(err){
//         res.json('error found')
//     }


// }

// exports.Dashboard = (req,res)=>{
//     console.log('da',req.username)
//     if(req.active){
//         res.json('welcon to dashboard M '+ req.username + ' you are now verified')
//     }
//     res.json('welcon to dashboard M '+ req.username + ' you account on hold')
// }


// exports.allusers =async (req,res)=>{
//     const users = await userService.getallusers(req)
//     res.json(users)
    
// }

// const {generateSaltAndHash} = require('../Utils/Hashing')





// exports.test = async (req, res)=>{
//     const data = {
//         data:await generateSaltAndHash('AYMA',15)
//     }
//     res.json(await data)
// }