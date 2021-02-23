import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { RepoInterface } from "../../interfaces/interfaces";
import SearchField from "../SearchField";

const Repos: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [repos, setRepos] = useState([]);

  const { fetchUserRepo } = useUser();

  useEffect(() => {
    fetchUserRepo().then((res) => setRepos(res));
  }, []);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="repositories">
      <SearchField
        handleInput={handleInput}
        query={searchQuery}
        placeholder="Search for User`s Repositories"
      />

      <ul>
        {repos
          .filter((item: RepoInterface) =>
            item.name
              .toLowerCase()
              .trim()
              .includes(searchQuery.toLowerCase().trim())
          )
          .map((repo: RepoInterface) => (
            <Link key={repo.id} to={repo.html_url} target="_blank">
              <li className="repo__item">
                <h2>{repo.name}</h2>
                <div className="repo-details">
                  <span>{repo.forks} Forks</span>
                  <span>{repo.stargazers_count} Stars</span>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Repos;
