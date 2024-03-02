import React, { useState } from 'react';
import axios from 'axios';

const UpdateData = () => {
  const [userData, setUserData] = useState({
    userEmail: '',
    userName: '',
    userPhone: '',
    userAddress: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put('http://localhost:3001/api/v1/user/updateUser', userData);
      setMessage(response.data.message);
      // Reset form data
      setUserData({
        userEmail: '',
        userName: '',
        userPhone: '',
        userAddress: ''
      });
    } catch (error) {
      setMessage('An error occurred while updating data.');
    }
  };

  return (
    <div>
      <h2>Update Data</h2>
      <input
        type="email"
        placeholder="User Email"
        name="userEmail"
        value={userData.userEmail}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Name"
        name="userName"
        value={userData.userName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="userPhone"
        value={userData.userPhone}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Address"
        name="userAddress"
        value={userData.userAddress}
        onChange={handleChange}
      />
      <button onClick={handleUpdate}>Update</button>
      <p>{message}</p>
    </div>
  );
};

export default UpdateData;
