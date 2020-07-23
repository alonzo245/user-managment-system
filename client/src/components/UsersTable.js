import React from "react";

export default ({ users }) => (
  <table className="usersTable">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
        users.map(({ _id, firstName, lastName, email, description }) => (
          <tr key={_id}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{description}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);
