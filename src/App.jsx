import React, { useState } from "react";
import useUsersCrud from "./hooks/useUsersCrud";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";

function App() {
  const { users, createUser, updateUser, deleteUser } = useUsersCrud();
  const [selectedUser, setSelectedUser] = useState(null);

  const handleCreateOrUpdateUser = (user) => {
    if (selectedUser) {
      updateUser(selectedUser.id, user);
    } else {
      createUser(user);
    }
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-8">Users CRUD</h1>
      
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <UserForm 
          onSubmit={handleCreateOrUpdateUser} 
          selectedUser={selectedUser} 
        />
      </div>
      
      <div className="w-full max-w-4xl mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard 
            key={user.id} 
            user={user} 
            onDelete={deleteUser} 
            onEdit={setSelectedUser} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
