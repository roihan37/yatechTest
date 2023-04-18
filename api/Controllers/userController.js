const { User } = require('../models/index')
class Controller{
    static async registerUser(req, res){
        try {
            const customer = await User.create({
                username : req.body.username,
                email: req.body.email,
                password: req.body.password,
              });
        
              res.status(201).json({ message: "Account has been created"});
        } catch (err) {
            if(err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError" ){
                res.status(400).json({message : err.errors[0].message})
            }else{
                res.status(500).json({message : "Internal Server Error" })
            }
        }
    }
    static async
}

module.exports = Controller