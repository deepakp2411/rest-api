const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { 
    required:true,
    type: String 
  },
  age: { 
    required:true,
    type: Number 
  },
});

// Model

const StudentModel = mongoose.model("teacher", studentSchema);

module.exports = StudentModel;
