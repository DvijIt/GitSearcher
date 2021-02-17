import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from './gateway';

const Users = ():JSX.Element => {

    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        try {
            fetchUsers()
                .then(usersData => setUsers(usersData))
        } catch (e) {
            console.log(e.message)
        }
    }, [users])

    interface User {
        id?: number,
        login?: string,
        avatar_url?: string
    }
    return (
        <ul className="navigation">
            {
                users.slice(10).map((user: { id: string | number | null | undefined; login: {} | null | undefined; avatar_url: string | undefined; }): User => {
                    // @ts-ignore
                    // @ts-ignore
                    return (
                        <li key={user.id}>
                            <span>{user.login}</span>
                            <img src={user.avatar_url}/>
                        </li>
                    )
                })
            }
            <li className="navigation__item">
                <Link to="/users/github">Github</Link>
            </li>
        </ul>
    )
}
export default Users;
