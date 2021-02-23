import React, { FC } from "react";
import UserItem from "./UserItem";
import { UserInterface } from "../../interfaces/interfaces";
import SearchField from "../SearchField";
import { useUsers } from "../../hooks/useUsers";
import "./index.css";

const Users: FC = () => {
  const { users, loading, searchQuery, handleInput } = useUsers();
  return (
    <>
      <SearchField
        handleInput={handleInput}
        query={searchQuery}
        placeholder="Search for Users"
      />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className="navigation_users">
          {users.map((user: UserInterface) => (
            <UserItem key={user.id} {...user} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Users;
