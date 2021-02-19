import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RepoInterface } from "../interfaces/interfaces";

const baseUrl = "https://api.github.com/users";

type TParams = { username: string };
export const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>({});
  const [repos, setRepos] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [error, setError] = useState("");
  const { username }: TParams = useParams();

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    const searchedRepos = repos.filter(
      (item: RepoInterface) => item.name === searchQuery
    );
    setRepos(searchedRepos);
  };

  // user
  useEffect(() => {
    if (username) {
      setLoading(true);
      axios
        .get(
          `${baseUrl}/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
        )
        .then((res) => setUser(res.data))
        .catch(() => setError("some sing went wrong"))
        .finally(() => setLoading(false));

      axios
        .get(
          `${baseUrl}/${username}/repos?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
        )
        .then((res) => setRepos(res.data))
        .catch(() => setError("some sing went wrong2"));
    }
  }, [username]);

  return {
    user,
    repos,
    loading,
    handleInput,
    searchQuery,
    error,
  };
};
