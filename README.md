# developer-productivity
A web-based dashboard to track developer productivity metrics such as commit frequency, pull request status, and code review timelines. Built with Vue.js, Node.js, and PostgreSQL, integrated with GitHub API, and deployed on Vercel.

# Developer Productivity Dashboard

## Overview

The **Developer Productivity Dashboard** is a web application designed to monitor and visualize key developer activity metrics, such as:
- **Commit Frequency**: Tracks the number of commits over time.
- **Pull Request Status**: Displays the status of open, merged, and closed PRs.
- **Code Review Timelines**: Shows the average time taken for code reviews.

This project integrates with the **GitHub API** to fetch real-time data and visualizes it in an intuitive, responsive UI.

---

## Features

- Fetch developer metrics from GitHub repositories.
- Visualize commit frequency, PR statuses, and code review times.
- Responsive and user-friendly frontend built with Vue.js.
- Real-time backend API implemented in Node.js.
- Deployed and scalable with Vercel.

---

## **Tech Stack**

| Technology     | Purpose                              |
|----------------|--------------------------------------|
| **Vue.js**     | Frontend framework for building the dashboard UI. |
| **Node.js**    | Backend for API development and GitHub API integration. |
| **PostgreSQL** | Database for storing developer metrics. |
| **GitHub API** | Source of real-time developer activity metrics. |
| **Vercel**     | Deployment platform for both frontend and backend. |

---

## **Project Structure**
developer-productivity-dashboard/
├── backend/             # Node.js serverless backend code
│   ├── api/             # Serverless API functions
│   │   └── index.js     # Main API for fetching metrics
├── frontend/            # Vue.js frontend code
│   ├── src/             # Source files
│   │   ├── components/  # Vue components
│   │   ├── App.vue      # Main app component
├── database/            # PostgreSQL setup scripts
├── .env.example         # Example environment variables
├── docker-compose.yml   # Docker setup (optional for local development)
└── README.md            # Project documentation


## **Future Enhancements**

1. Support for multiple repositories and developers.
2. Add more metrics like issue tracking and pull request comments.
3. Integrate Grafana for enhanced visualization.
4. Include alerting for significant changes in productivity metrics.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## **Acknowledgments**

- **GitHub API** for providing real-time developer data.
- **Vercel** for seamless deployment.
- Special thanks to the open-source community for their valuable tools and resources.
