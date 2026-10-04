// Ethan Goldstein - CSCE 242
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World from the Sweet Expressions server!");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});