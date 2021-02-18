import React, { useState, useEffect, FC } from "react";
import { fetchUsers } from "../../gateway";
import UserItem from "./UserItem";
import { UserInterface } from "../../interfaces/interfaces";
import SearchField from "../SearchField";
import "./index.css";

const Users: FC = () => {
  const [users, setUsers] = useState<[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (searchQuery.length > 3) {
      setLoading(true);
      fetchUsers(searchQuery)
        .then((usersData) => setUsers(usersData.items.splice(0, 3)))
        .then(() => setLoading(false))
        .catch(({ message }) => {
          throw new Error(message);
        });
    }
  }, [searchQuery]);

  return (
    <>
      <SearchField handleInput={handleInput} query={searchQuery} />
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
