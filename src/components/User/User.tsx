import React, { FC } from "react";
import { useUser } from "../../hooks/useUser";
import UserInfo from "./UserInfo";
import "./index.css";
import Repos from "./Repos";

const Users: FC = () => {
  const { loading } = useUser();
  return loading ? (
    <h1>Loading... </h1>
  ) : (
    <div className="wrapper">
      <UserInfo />
      <Repos />
    </div>
  );
};
export default Users;
