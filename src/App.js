import React from 'react';
import UserList from './components/UserLists';
import AddUserForm from './components/AddUserForms';

function App() {
  return (
    <div className="App">
      {/* <h1>User Management</h1> */}
      <AddUserForm />
      <UserList />
    </div>
  );
}

export default App;