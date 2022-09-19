import React, {useState} from "react";

import AddUser from './Components/Users/AddUser'
import UsersList from './Components/Users/UsersList'

function App() {
  const [usersList, setUserList] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
     });
  }
  return (
    <>
      <AddUser onAddUser={addUserHandler } />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
