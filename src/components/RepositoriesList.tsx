import { useState } from "react";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [query, setQuery] = useState("");
  const { searchRepos } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepos(query);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
