import React, { useState } from 'react';
import axios from 'axios';

const AddData = () => {
  const [userData, setUserData] = useState({
    userName: '',
    userEmail: '',
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

  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/addUser', userData);
      setMessage(response.data.message);
      // Reset form data
      setUserData({
            userEmail: '',
            userName: '',
            userPhone: '',
            userAddress: ''
        });
    } catch (error) {
      console.error('Error adding data:', error);
      setMessage('An error occurred while adding data. Please try again later.');
    }
  };
  

  return (
    <div>
      <h2>Add Data</h2>
      <input
        type="text"
        placeholder="Name"
        name="userName"
        value={userData.userName}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="userEmail"
        value={userData.userEmail}
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
      <button onClick={handleAdd}>Add</button>
      <p>{message}</p>
    </div>
  );
};

export default AddData;
