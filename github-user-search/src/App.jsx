import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
