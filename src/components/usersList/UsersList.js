import React from 'react';

function UsersList({usersList, getUser}) {

    return (
        <>
            <ul>
                {
                    usersList.map(user =>
                    <li key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <button data-id={user.id} onClick={getUser}>get info</button>
                        <p>---------------------</p>
                    </li>
                    )
                }
            </ul>
        </>
    );
}

export default UsersList;