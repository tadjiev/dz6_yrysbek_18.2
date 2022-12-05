import React from 'react';

function OneUserInfo({user}) {
    return (
        <>
            <ul>
                <li>{user.name}</li>
                <li>{user.email}</li>
            </ul>
        </>
    );
}

export default OneUserInfo;