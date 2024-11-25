
const User = require("../models/index");


const userService =()=>{
    const signUserUp = async (req, res) =>{
        try{
        let newUser = new User();
        newUser.name = req.body.name;
        newUser.Email_Address = req.body.Email_Address;
        newUser.DateOfBIrth= req.body.DateOfBIrth;
        newUser.Address = req.body.Address
        newUser.Bio = req.body.Bio
       
        newUser.save()
        .then(data =>{
            res.send("User saved successfully")
        })
        .catch(err => {
            console.log(err)
            res.send("An error occured")
            
        })
    }catch(error){
        res.send("There is an error with your request")
    }
    }

    const signUserIn = async (req, res) =>{
        try {
             const userData = User.find({
             name: req.body.name
            })
           if (userData) {
          (req.body.name, userData.name)
           }
        } catch (error) {
            res.send("An error has occured")

        }
       
        
    }

    return {signUserUp, signUserIn} 
    

}

module.exports = userService;