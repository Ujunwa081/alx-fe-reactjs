// src/services/githubService.js
import axios from "axios";

// Fetch GitHub users by advanced search criteria
export const fetchUsers = async (username, location, minRepos) => {
  // Build search query
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );
  return response.data.items; // returns an array of users
};
