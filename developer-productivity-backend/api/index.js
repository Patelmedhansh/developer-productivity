const axios = require('axios');

const fetchCommits = async (owner, repo) => {
    try {
        console.log('GitHub Token:', process.env.GITHUB_TOKEN); // Debug log
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
        });
        console.log('Response:', response.data); // Debug log
        return response.data;
    } catch (error) {
        console.error('Error fetching commits:', error.response?.data || error.message);
    }
};

fetchCommits('octocat', 'Hello-World');