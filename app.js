const express = require("express");

require('dotenv').config();
const web = require("./routes/web.js")
const connectDB  = require("./db/connectdb.js");
const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;


// Load routes 
app.use('/student',web)


// load db
connectDB(DATABASE_URL);

// api json 
app.use(express.json())

// port 
app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
