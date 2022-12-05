import React, {useState} from 'react';
import UsersList from "../../components/usersList/UsersList";
import OneUserInfo from "../../components/usersList/OneUserInfo";


function UsersPage() {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }
    const getUser = (e) => {
        const id = e.target.dataset.id

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
    }

    return (
        <>
            <h1>Users List</h1>
            <button onClick={getUsers}>Get Users</button>
            <OneUserInfo user={user}/>
            <UsersList usersList={users} getUser={getUser}/>
        </>
    );
}

export default UsersPage;