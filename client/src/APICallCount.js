import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define fetchAPICallCount outside of the component
export const fetchAPICallCount = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/user/callCount');
    return response.data;
  } catch (error) {
    console.error('Error fetching API call count:', error);
    return {};
  }
};


const APICallCount = () => {
  const [apiCalls, setAPICalls] = useState({});
  //const [, setRefreshKey] = useState(0); // Ignore this line for ESLint

  useEffect(() => {
    // Call fetchAPICallCount inside useEffect
    const fetchData = async () => {
      const data = await fetchAPICallCount();
      setAPICalls(data);
    };
    fetchData();
  }, []); // Add an empty dependency array to run only once

  //updating values
  return (
    <div> {/* No need to use refreshKey */}
      <h2>API Call Count</h2>
      <p>Add Calls: {apiCalls.addAPICalls}</p>
      <p>Update Calls: {apiCalls.updateAPICalls}</p>
    </div>
  );
};

export default APICallCount;
