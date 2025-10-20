import React from 'react';
import UserList from './components/UserLists';
import AddUserForm from './components/AddUserForms';

function App() {
  return (
    <div className="App">
      <AddUserForm />
      <UserList />
    </div>
  );
}

export default App;