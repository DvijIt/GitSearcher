import React from "react";
import { UserInterface } from "../../interfaces/interfaces";

const UserInfo = (user: UserInterface) => {
  const {
    avatar_url,
    created_at,
    email,
    followers,
    following,
    location,
    name,
  } = user;
  return (
    <div className="user-container">
      <div className="user-avatar">
        <img src={avatar_url} alt="" />
      </div>
      <div className="user-data">
        <span>UserName {name}</span>
        <span>Email {email}</span>
        <span>Location {location}</span>
        <span>Join Date {created_at}</span>
        <span>{followers} Followers </span>
        <span>Following {following}</span>
      </div>
    </div>
  );
};

export default UserInfo;
