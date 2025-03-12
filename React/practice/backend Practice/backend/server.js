const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require("./model.js");

const corsOptions = {
  origin: 'http://localhost:5173',  
  methods: ['GET', 'POST', 'PUT'],
};

// MongoDB Connection
mongoose.connect('mongodb+srv://parthgoenka777:9yXNr0nN61TkWS7z@cluster0.0ovpm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.use(cors(corsOptions));
app.use(express.json()); 

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; 
  if (!token) {
    return res.status(403).json({ message: 'Token is required' });
  }

  try {
    const decoded = jwt.verify(token, 'secretkey'); // Hardcoded secret key
    req.user = decoded; 
    next(); 
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token' });
  }
};

app.get('/Dashboard', verifyToken, (req, res) => {
  res.json({ message: 'You have access to the protected route', user: req.user });
});

// Login Route
app.post("/api/login", async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("Wrong username or password");
    }

    if (pass === user.pass) {
      const token = jwt.sign({ username: user.username }, 'secretkey', { expiresIn: '1h' }); 
      res.status(200).json({ message: "Logged in successfully", token });
    } else {
      res.status(404).send("Wrong username or password");
    }

  } catch (error) {
    res.status(500).send("Server error: " + error.message);
  }
});

// Signup Route
app.post("/api/signup", async (req, res) => {
  const { email, pass, username } = req.body;

  try {
    const existuser = await User.findOne({ email });

    if (existuser) {
      return res.status(400).send("User already exists. Please log in.");
    }

    const user = new User({ username, email, pass });

    await user.save();
    res.status(200).json({ message: "Signed up successfully" });

  } catch (error) {
    res.status(500).send("Error signing up user: " + error.message);
  }
});

app.listen(4040, () => {
  console.log("Server is listening on port 4040");
});
