const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const userController = {
  signup: async (req, res) => {
    try {
      const { name, empid, email, password } = req.body;
      if (!(name && empid && email && password))
        return res
          .status(400)
          .json({ message: "All field is required to fill" });

      const exitingUser = await User.findOne({ email });

      if (exitingUser)
        return res.status(400).json({ message: "user already exist" });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        name,
        empid,
        email,
        password: hashedPassword, 
      });
      await newUser.save();

      return res.status(200).json({ message: "user added succesfully" });
    } catch (error) {
      res.status(404).json({ message: "something went wrong", error: error });
    }
  },
  login: (req, res) => {
    try {
      

    } catch (error) {
      res.status().json({});
    }
  },
  users: (req, res) => {
    try {
    } catch (error) {
      res.status().json({});
    }
  },
};

module.exports = userController;
