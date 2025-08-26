const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
mongoose.connect(process.env.MONGO_URL);
app.use(express.json());
app.use(cors());
dotenv.config();
app.listen(port, () => {
  console.log(console.log("listening to port" + port));
});
