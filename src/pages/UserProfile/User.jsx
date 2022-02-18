import React from 'react'

export function User( { user }) {
    const { userID, name, email} = user;

    const resetPasswordClick = () => {
        resetPasswordClick(userID);
    }
    return (
        <div>
            {name}/{email}
        </div>
    )
}
