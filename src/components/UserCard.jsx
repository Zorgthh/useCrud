import React from "react";

function UserCard({ user, onDelete, onEdit }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 space-y-4">
      {user.image_url ? (
        <img
          src={user.image_url}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-full h-48 object-cover rounded-md"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}
      <h2 className="text-xl font-semibold">{user.first_name} {user.last_name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-400">{user.birthday}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => onEdit(user)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCard;
