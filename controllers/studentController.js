const StudentModel = require("../models/Student.js");


  // post / creating new data
   const createDoc = async (req, res) => {
    try {
      const doc = new StudentModel(req.body)
      const result = await doc.save();
      res.send(result);
    } catch (error) {
      console.log(error)
    }
  };

  // getting all data
   const getAllDoc = async (req, res) => {
    try {
      const result = await StudentModel.find();

      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };

  // getting by id
   const getByIdDoc = async (req, res) => {
    try {
      const result = await StudentModel.findById(req.params.id);

      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };

   const updateByIdDoc = async (req, res) => {
    try {
      const result = await StudentModel.findByIdAndUpdate(req.params.id,req.body)
      res.send(result)
      
    } catch (error) {
      console.log(error)
      
    }
    // res.send("Updated");
  };
   const deleteDoc = async (req, res) => {
    try {
      const result = await StudentModel.findByIdAndDelete(req.params.id)
      res.status(204).send(result)
      
    } catch (error) {
      console.log(error)
      
    
  };
}

  module.exports = {createDoc,getAllDoc,updateByIdDoc,deleteDoc,getByIdDoc}


