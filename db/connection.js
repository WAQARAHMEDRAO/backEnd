const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/admin")
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((e) => {
    console.log(e);
  });
