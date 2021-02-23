import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const baseUrl = "https://api.github.com/users";

type TParams = { username: string };
export const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { username }: TParams = useParams();

  const fetchUserInfo = () => {
    setLoading(true);
    return axios
      .get(
        `${baseUrl}/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      )
      .then((res) => res.data)
      .catch(() => {
        setErrorText("data fetch error");
      })
      .finally(() => setLoading(false));
  };

  const fetchUserRepo = () => {
    setLoading(true);
    return axios
      .get(
        `${baseUrl}/${username}/repos?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      )
      .then((res) => res.data)
      .catch(() => {
        setErrorText("data fetch error");
      })
      .finally(() => setLoading(false));
  };

  return {
    loading,
    errorText,
    fetchUserInfo,
    fetchUserRepo,
  };
};
