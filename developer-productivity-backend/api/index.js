const express = require('express'); // Import Express
const app = express(); // Initialize Express
const PORT = 4000; // Define the port
const axios = require('axios');

// Define a sample route
app.get('/', (req, res) => {
    res.send('Hello, Developer Productivity Dashboard!');
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = async (req, res) => {
    try {
        const { owner, repo } = req.query; // Pass owner and repo via query params
        const response = await axios.get(
            `https://api.github.com/repos/${owner}/${repo}/commits`,
            {
                headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
            }
        );
        const commitData = response.data.map(commit => ({
            message: commit.commit.message,
            author: commit.commit.author.name,
            date: commit.commit.author.date,
        }));
        res.status(200).json(commitData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch commit data' });
    }
};