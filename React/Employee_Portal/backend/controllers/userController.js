const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const userController = {
  signup: async (req, res) => {
    try {
      const { name, empid, email, password, dept } = req.body;
      if (!(name && empid && email && password && dept))
        return res.status(400).json({ message: "All fields are required to fill" });

      const existingUser = await User.findOne({ email });

      if (existingUser)
        return res.status(409).json({ message: "User already exists" });

      const hashedPassword = await bcrypt.hash(password, 12);  

      const newUser = new User({
        name,
        empid,
        dept,
        email,
        password: hashedPassword, 
      });

      await newUser.save();

      return res.status(200).json({ message: "User added successfully", id:newUser.empid});
    } catch (error) {
      console.error(error);  
      res.status(500).json({ message: "Something went wrong, please try again later" });
    }
  },

  login: async (req, res) => {
    try {
      const { empid, password } = req.body;
  
      if (!(empid && password)) {
        return res.status(400).json({ message: "Both email and password are required" });
      }
  
      const existingUser = await User.findOne({ empid });
  
      if (!existingUser) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
  
      return res.status(200).json({ message: "Login successful", id: empid });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Something went wrong, please try again later" });
    }
  },
  

  user: async (req, res) => {
    const {empid} = req.params;
    try {
      const user = await User.findOne({empid}); 
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);  
      return res.status(500).json({ message: "Something went wrong", error: error });
    }
  },

  users: async (req, res) => {
    const{dept} = req.params;
    try {
      const allDept = await User.find({dept}); 
      return res.status(200).json(allDept);
    } catch (error) {
      console.error(error);  
      return res.status(500).json({ message: "Something went wrong", error: error });
    }
  },
};

module.exports = userController;
