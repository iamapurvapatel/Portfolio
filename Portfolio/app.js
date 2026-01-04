const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');

// --- Start of new argument parsing logic ---
// Default port
let port = 3000;

// Look for a --port argument from the command line
const portArgIndex = process.argv.indexOf('--port');
if (portArgIndex !== -1 && process.argv[portArgIndex + 1]) {
  port = parseInt(process.argv[portArgIndex + 1], 10);
} else if (process.env.PORT) {
  // Fallback to environment variable for good measure
  port = parseInt(process.env.PORT, 10);
}
// --- End of new argument parsing logic ---

const host = '0.0.0.0'; // Listen on all available network interfaces

app.set('view engine', 'ejs');

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


// Set View Engine
app.set('views', path.join(__dirname, 'views'));

// Index Route
app.get('/', (req, res) => {
    res.render('index');
});

// About Route
app.get('/resume', (req, res) => {
    res.render('resume');
});

// blog Route
app.get('/blog', (req, res) => {
    res.render('blog');
});

// blog Route
app.get('/contactMe', (req, res) => {
    res.render('contactMe');
});

// Start Server
app.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`);
});