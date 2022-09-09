const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
  Company_Name: {
    type: String,
    upperCase: true,
    required: true,
    minlength: 3,
  },
  Job_Title: {
    type: String,
    upperCase: true,
    required: true,
    minlength: 3,
  },
  Job_Description: {
    type: String,
    upperCase: true,
    required: true,
    minlength: 3,
  },
  Created_at: {
    type: Date,
  },
});
const jSchema = mongoose.model("jSchema", jobSchema);
module.exports = jSchema;
