import React from 'react'

export function User( { user }) {
    const { userID, name, email, password} = user;

    const resetPasswordClick = () => {
        resetPasswordClick(userID);
    }
    return (
        <div>
            {name}/{email}
        </div>
    )
}
