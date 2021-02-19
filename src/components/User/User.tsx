import React, { FC } from "react";
import { useUser } from "../../hooks/useUser";
import SearchField from "../SearchField";
import UserInfo from "./UserInfo";
import "./index.css";
import Repos from "./Repos";

const Users: FC = () => {
  const { loading, user, handleInput, searchQuery, repos, error } = useUser();
  return loading ? (
    <h1>Loading... </h1>
  ) : (
    <div className="wrapper">
      {error.length ? <h2>{error}</h2> : <UserInfo {...user} />}
      <SearchField handleInput={handleInput} query={searchQuery} />
      {repos.length && <Repos {...repos} />}
    </div>
  );
};
export default Users;
