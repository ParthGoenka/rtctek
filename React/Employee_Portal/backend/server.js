require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const userRoute = require("./routes/userRoute");
const cors = require("cors");
require("./db");

const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.get("/home", (req, res) => {
  res.send("Hello, World!");
});

// routes
app.use("/api", userRoute);
if(process.env.NODE_ENV !== 'test') {
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});}

module.exports = app;