import React, {useState, useEffect} from 'react';

const Users = ():JSX.Element => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // fetchUsers();
    }, [users])
    return (<h1>User</h1>)
}
export default Users;
