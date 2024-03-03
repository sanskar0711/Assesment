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
    }  catch (error) {
      if (error.response) {
        // Request made and server responded with an error status code
        const { data } = error.response;
        setMessage(data.message);
      } else if (error.request) {
        // The request was made but no response was received
        setMessage('An error occurred while processing the request. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setMessage('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div>
      <br></br>
      <br></br>
      <h2>Update Data</h2>
      <input
        type="email"
        placeholder="User Email"
        name="userEmail"
        value={userData.userEmail}
        onChange={handleChange}
      /> <tab></tab>
      <input
        type="text"
        placeholder="Name"
        name="userName"
        value={userData.userName}
        onChange={handleChange}
      /> <tab></tab>
      <input
        type="text"
        placeholder="Phone"
        name="userPhone"
        value={userData.userPhone}
        onChange={handleChange}
      /> <tab></tab>
      <input
        type="text"
        placeholder="Address"
        name="userAddress"
        value={userData.userAddress}
        onChange={handleChange}
      /> 
      <br></br>
      <br></br>
      <button className="button" onClick={handleUpdate}>Update</button>
      <p>{message}</p>
    </div>
  );
};

export default UpdateData;
