const mongoose = require("mongoose");

mongoose
  .connect(process.env.URI)
  // .then(() => {
  //   console.log("mongoose connected");
  // })
  // .catch((e) => {
  //   console.log("mongoose not connected");
  // });
