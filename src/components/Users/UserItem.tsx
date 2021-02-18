import React from "react";
import { Link } from "react-router-dom";
import { UserInterface } from "../../interfaces/interfaces";

const UserItem = (user: UserInterface) => (
  <Link to={`/users/${user.login}`} key={user.node_id}>
    <div className="users__list-item">
      <img
        className="users__list-item-avatar"
        src={user.avatar_url}
        alt={user.login}
      />
      <span>{user.login}</span>
    </div>
  </Link>
);

export default UserItem;
