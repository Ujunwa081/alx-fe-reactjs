import axios from "axios";

export async function fetchUserData(username, location, minRepos) {
  if (!username) {
    throw new Error("Username is required");
  }

  let query = `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );

  if (response.data.items.length === 0) {
    throw new Error("User not found");
  }

  const detailedUsers = await Promise.all(
    response.data.items.map(async (item) => {
      const userDetails = await axios.get(item.url);
      return userDetails.data;
    })
  );

  return detailedUsers;
}
