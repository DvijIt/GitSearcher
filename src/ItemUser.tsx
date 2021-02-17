import React from 'react';
import {User} from "./interfaces/interfaces";

const ItemUser = (user: User) => {
    return (
        <li key={user.node_id}>
            <span>{user.id}</span>
            <span>{user.login}</span>
            <img src={user.avatar_url} alt={user.login}/>
            <span>{user.starred_url}</span>
        </li>
    )
}

export default ItemUser;