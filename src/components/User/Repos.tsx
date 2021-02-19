import React, { FC } from "react";
import { Link } from "react-router-dom";
import { RepoInterface } from "../../interfaces/interfaces";

const Repos: FC = (repos: any) => (
  <ul>
    {repos.map((repo: RepoInterface) => (
      <Link to={repo.html_url} target="_blank">
        <li key={repo.id} className="repo__item">
          <h2>{repo.name}</h2>
          <div className="repo-details">
            <span>{repo.forks}</span>
            <span>{repo.stargazers_count}</span>
          </div>
        </li>
      </Link>
    ))}
  </ul>
);

export default Repos;
