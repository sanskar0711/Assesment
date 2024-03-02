import React from 'react';
import AddData from './AddData';
import UpdateData from './UpdateData';
import APICallCount from './APICallCount';

function App() {
    const handleAdd = (userData) => {
        // Implement add API call here
        console.log('Add data:', userData);
    };

    const handleUpdate = (userEmail) => {
        // Implement update API call here
        console.log('Update email:', userEmail);
    };

    return (
        <div className="App">
            <AddData onAdd={handleAdd} />
            <UpdateData onUpdate={handleUpdate} />
            <APICallCount />
        </div>
    );
}

export default App;
