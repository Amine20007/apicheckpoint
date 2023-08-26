import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>User List</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
       {listOfUsers.map(user => (
      <li key={user.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
        {user.name}
      </li>
    ))}
    </ul>
    </div>
    
  );
};

export default UserList;
