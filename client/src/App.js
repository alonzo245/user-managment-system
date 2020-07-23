import React, { useState, useEffect } from "react";
import axios from "axios";
import AddUserForm from "./components/AddUserForm";
import UserTable from "./components/UserTable";
import "./App.css";

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let result = await axios.get("http://localhost:3001/api/v1/users/");
      setUsers(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (user) => {
    try {
      let result = await axios.post(
        "http://localhost:3001/api/v1/users/",
        user
      );
      setUsers([...users, result.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="siteWrapper">
      <h1>Users Management System</h1>

      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} users={users} />
        </div>
      </div>

      <div className="flex-large">
        <h2>Users</h2>
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default App;
