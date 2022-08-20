const express = require("express");

const router = express.Router();

const  {getAllDoc,createDoc,getByIdDoc,updateByIdDoc,deleteDoc} = require("../controllers/studentController.js");

router.get("/",getAllDoc);
router.post("/", createDoc);
router.get("/:id", getByIdDoc);
router.put("/:id", updateByIdDoc);
router.delete("/:id", deleteDoc);

module.exports = router;
