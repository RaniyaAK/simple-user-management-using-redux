import React from 'react';
import { useSelector } from 'react-redux';

function UserList() {
  const users = useSelector((state) => state.users.users);

  return (
    <div>
      <h2>Users List</h2>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              name:{user.name} - email:{user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;