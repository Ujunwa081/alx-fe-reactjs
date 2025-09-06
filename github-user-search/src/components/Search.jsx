import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(query);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="border p-4 rounded shadow">
          <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mb-2" />
          <h2 className="text-xl font-bold">{user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-600">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
