import React from 'react'

export default function AdminUsers() {
    return (
        <div>
            {users.map((user) => (
                <Users
                    key={user.id}
                    users={users}
                    user={user}
                    setUsers={setUsers}
                />
            ))}
        </div>
    )
}
