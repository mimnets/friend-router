import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
  },[])
  return (
    <div>
      <h1>Friends {friends.length}</h1>
    </div>
  );
}

export default App;
