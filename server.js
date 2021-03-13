const connectDB = require("./config/db");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

// implementing cors
app.use(cors());

// Connect database
connectDB();

// Init bodyParser middleware
app.use(express.json({ extended: false })); // This is equal to use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("hello");
});

// Define routes below this

// Define routes above this

app.listen(PORT, () => {
  console.log(`Its running on ${PORT} dont worry`);
});
