import React, { useState } from "react";

const AddUserForm = ({ addUser }) => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    description: ""
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, password, email, description } = user;
    if (!firstName || !lastName || !password || !email || !description) return;

    addUser(user);
    setUser(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit} className="add-user-form">
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleInputChange}
      />

      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleInputChange}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleInputChange}
      />

      <label>Description</label>
      <input
        type="text"
        name="description"
        value={user.description}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
