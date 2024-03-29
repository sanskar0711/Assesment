const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log(err);
  });

//create a port for the server
const port = 3001;

// get request for route
app.get("/", (req, res) => {
  res.send("Node APIs");
});

app.listen(port, () => {
  console.log("Server Listening on port http://localhost:" + port);
});