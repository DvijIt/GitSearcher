import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RepoInterface } from "../interfaces/interfaces";

const baseUrl = "https://api.github.com/users";

type TParams = { username: string };
export const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>({});
  const [repositories, setRepositories] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [error, setError] = useState("");
  const { username }: TParams = useParams();

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    const searchedRepos = repositories.filter(
      (item: RepoInterface) => item.name === searchQuery
    );
    setRepositories(searchedRepos);
  };

  // user
  useEffect(() => {
    if (username) {
      setLoading(true);
      axios
        .get(
          `${baseUrl}/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
        )
        .then((res) => {
          setUser(res.data);
        })
        .catch(() => setError("some sing went wrong"))
        .finally(() => setLoading(false));

      axios
        .get(
          `${baseUrl}/${username}/repos?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
        )
        .then((res) => {
          console.log(res.data);
          setRepositories(res.data);
          console.log(repositories);
        })
        .catch(() => setError("some sing went wrong2"))
        .finally(() => setLoading(false));
    }
  }, [username]);

  return {
    user,
    repos: repositories,
    loading,
    handleInput,
    searchQuery,
    error,
  };
};
