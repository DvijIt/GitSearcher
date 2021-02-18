import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "./gateway";

type TParams = { username: string };
const Users: FC = () => {
  const { username }: TParams = useParams();

  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchUser(username)
      .then((userData) => {
        setUser(userData);
        setLoading(false);
      })
      .catch((e) => {
        throw new Error(e);
      })
      .finally(() => setLoading(false));
  }, [user, username]);
  return loading ? <h1>Loading... </h1> : <h1>User: {user.login}</h1>;
};
export default Users;
