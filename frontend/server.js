const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;

// 1. Serve all your frontend files (index.html, index.css, index.js) automatically
app.use(express.static(path.join(__dirname, 'frontend')));

// 2. Handle the main route to load your index.html file when you open the browser
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// 3. Start the server on port 3002 with the corrected URL link
app.listen(PORT, () => {
    console.log(`Server is successfully running!`);
    console.log(`Click here to open: http://localhost:${PORT}`);
});