<template>
    <div>
        <h1>Developer Productivity Dashboard</h1>
        <input v-model="owner" placeholder="Enter GitHub owner" />
        <input v-model="repo" placeholder="Enter GitHub repo" />
        <button @click="fetchCommits">Fetch Commits</button>

        <ul v-if="commits.length">
            <li v-for="(commit, index) in commits" :key="index">
                <p><strong>Message:</strong> {{ commit.message }}</p>
                <p><strong>Author:</strong> {{ commit.author }}</p>
                <p><strong>Date:</strong> {{ commit.date }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            owner: '',
            repo: '',
            commits: [],
        };
    },
    methods: {
        async fetchCommits() {
            try {
                const response = await axios.get(
                    `https://developer-productivity-backend-55u20yg16-medhanshs-projects.vercel.app/api/index`,
                    {
                        params: { owner: this.owner, repo: this.repo },
                    }
                );
                this.commits = response.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>