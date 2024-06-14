// Import libraries
const express = require('express');
const path = require('path');
const app = express();

// Define Port 
port = 3000

// Serve static files from the 'src' directory
app.use('/src', express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});