// Ethan Goldstein - CSCE 242
require("dotenv").config();
require("dns").setServers(["8.8.8.8", "1.1.1.1"]); //my wifi's DNS can't look up the Atlas address
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

//connects to my Atlas database, the connection string is in .env
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.error("could not connect to mongodb...", err));

const schema = new mongoose.Schema({
  name: String,
});

//this creates a Message class in our app
const Message = mongoose.model("Message", schema);

async function createMessage() {
  const message = new Message({
    name: "Hello World",
  });
  const result = await message.save();
  console.log(result);
}

createMessage().catch((err) => console.error("could not save message...", err));

app.get("/", (req, res) => {
  res.send("Hello World from the Sweet Expressions server!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});