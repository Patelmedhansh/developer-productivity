const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = 4000; // Use port 4000 for local testing

// Root route for a friendly message
app.get('/', (req, res) => {
    res.send('Welcome to the Developer Productivity API! Use /api/index to fetch GitHub commits.');
});

// API endpoint to fetch GitHub commits
app.get('/api/index', async (req, res) => {
    const { owner, repo } = req.query;

    // Validate inputs
    if (!owner || !repo) {
        return res.status(400).json({ error: 'Missing owner or repo query parameters.' });
    }

    try {
        // Fetch commits from GitHub API
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, // Use GitHub token from environment variables
            },
        });

        // Simplify and format the response data
        res.status(200).json({
            commits: response.data.map((commit) => ({
                sha: commit.sha,
                author: commit.commit.author.name,
                message: commit.commit.message,
                date: commit.commit.author.date,
                url: commit.html_url,
            })),
        });
    } catch (error) {
        console.error('Error fetching commits:', error.response?.data || error.message);
        res.status(error.response?.status || 500).json({
            error: error.response?.data?.message || 'Failed to fetch data from GitHub.',
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});