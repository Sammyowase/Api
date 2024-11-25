const User = require("../models/index");

const userService = () => {
    const signUserUp = async (req, res) => {
        try {
            const { name, Email_Address, DateOfBIrth, Address, Bio } = req.body;

           
            if (!name || !Email_Address || !DateOfBIrth) {
                return res.status(400).send("Name, email, and date of birth are required.");
            }

            let newUser = new User();
            newUser.name = name;
            newUser.Email_Address = Email_Address;
            newUser.DateOfBIrth = DateOfBIrth;
            newUser.Address = Address;
            newUser.Bio = Bio;

            await newUser.save();
            res.send("User saved successfully");
        } catch (err) {
            console.log(err);
            res.status(500).send("An error occurred");
        }
    };

    const signUserIn = async (req, res) => {
        try {
            const { name } = req.body;
            if (!name) {
                return res.status(400).send("Name is required.");
            }

            const userData = await User.findOne({ name: req.body.name });
            if (userData) {
                res.send("User found");
            } else {
                res.send("User not found");
            }
        } catch (error) {
            console.log(error);
            res.status(500).send("An error has occurred");
        }
    };

    return { signUserUp, signUserIn };
};

module.exports = userService;
