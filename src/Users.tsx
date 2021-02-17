import React, {useState, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom';
import {fetchUsers} from './gateway';
import ItemUser from "./ItemUser";

const Users = (): JSX.Element => {

    const [users, setUsers] = useState<[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleInput = (e:any) => {
        setSearchQuery(e.target.value);
    }
    useEffect(() => {
        if (searchQuery.length > 3) {
            fetchUsers(searchQuery)
                .then(usersData => setUsers(usersData.items.splice(0, 3)))
        }
    }, [searchQuery])

    return (
        <>
            <div>
                <label htmlFor="inputSearch">Search Users</label>
                <input
                    type="text"
                    name="inputSearch"
                    value={searchQuery}
                    onInput={handleInput}/>
            </div>
            <ul className="navigation">
                {users.map(user =>
                    (
                        <ItemUser {...user}/>
                    ))}
                <li className="navigation__item">
                    <Link to="/users/github">Github</Link>
                </li>
            </ul>
        </>
    )
}
export default Users;
