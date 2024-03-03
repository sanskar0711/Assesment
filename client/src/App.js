import React from 'react';
import AddData from './AddData';
import UpdateData from './UpdateData';
import APICallCount from './APICallCount';
import './App.css'; // Imported the CSS file 

function App() {
    const handleAdd = (userData) => {
        // Implemented add API call here
        console.log('Add data:', userData);
    };

    const handleUpdate = (userEmail) => {
        // Implemented update API call here
        console.log('Update email:', userEmail);
    };

    return (
        <div className="container"> {/* Use container class */}
            <h1 className="heading">Welcome to My App</h1> {/* Use heading class */}
            <h2 className="sub-heading"><AddData onAdd={handleAdd} /></h2>
            <h2 className="sub-heading"><UpdateData onUpdate={handleUpdate} /></h2>
            <h2 className="sub-heading"><APICallCount /></h2>
        </div>
    );
}

export default App;
