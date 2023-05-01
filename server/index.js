const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
const clientBuildPath = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(clientBuildPath));

// API routes should be placed here

// Catch-all route to serve the index.html file for any unrecognized route
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
