const express = require("express");
const path = require("path");

const app = express();
const PORT = 3002;

app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});
console.log(__dirname);
console.log(path.join(__dirname, "frontend", "index.html"));
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});