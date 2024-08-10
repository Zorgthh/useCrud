import { useState, useEffect } from "react";
import axios from "axios";

const useUsersCrud = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "https://users-crud.academlo.tech/users/";

  // GET - Read Users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(baseUrl);
      setUsers(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // POST - Create User
  const createUser = async (user) => {
    try {
      const response = await axios.post(baseUrl, user);
      setUsers([...users, response.data]);
    } catch (error) {
      setError(error);
    }
  };

  // PUT - Update User
  const updateUser = async (id, updatedUser) => {
    try {
      const response = await axios.put(`${baseUrl}${id}/`, updatedUser);
      setUsers(users.map(user => (user.id === id ? response.data : user)));
    } catch (error) {
      setError(error);
    }
  };

  // DELETE - Remove User
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${baseUrl}${id}/`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, error, createUser, updateUser, deleteUser };
};

export default useUsersCrud;
