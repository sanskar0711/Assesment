import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Imported the CSS file 

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
      <h2>Add Data</h2>
      <input className="text-field"
        type="text"
        placeholder="Name"
        name="userName"
        value={userData.userName}
        onChange={handleChange}
      /> <tab></tab>
      <input className="text-field"
        type="email"
        placeholder="Email"
        name="userEmail"
        value={userData.userEmail}
        onChange={handleChange}
      /> <tab></tab>
      <input className="text-field"
        type="text"
        placeholder="Phone"
        name="userPhone"
        value={userData.userPhone}
        onChange={handleChange}
      /> <tab></tab>
      <input className="text-field"
        type="text"
        placeholder="Address"
        name="userAddress"
        value={userData.userAddress}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <button className="button" onClick={handleAdd}>Add</button>
      <p>{message}</p>
    </div>
  );
};

export default AddData;
