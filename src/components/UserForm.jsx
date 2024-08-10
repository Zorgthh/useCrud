import React, { useState, useEffect } from "react";

function UserForm({ onSubmit, selectedUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: "",
    image_url: ""
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        email: selectedUser.email || "",
        password: selectedUser.password || "",
        first_name: selectedUser.first_name || "",
        last_name: selectedUser.last_name || "",
        birthday: selectedUser.birthday || "",
        image_url: selectedUser.image_url || ""
      });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    const { image_url, ...data } = formData;
    onSubmit({
      ...data,
      image_url: image_url.trim() ? image_url : undefined
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="date"
        name="birthday"
        placeholder="Birthday"
        value={formData.birthday}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="image_url"
        placeholder="Image URL (optional)"
        value={formData.image_url}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        {selectedUser ? "Update User" : "Create User"}
      </button>
    </form>
  );
}

export default UserForm;
