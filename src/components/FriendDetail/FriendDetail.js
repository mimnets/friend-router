import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const FriendDetail = () => {
    const {friendId} = useParams();

    const [friend, setFriend] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <p>This is friedn details componenet :{friendId}</p>
            <h3>Name : {friend.name}</h3>
            <p>Email : {friend.email}</p>
            <p>Phone : {friend.phone}</p>
            <p>Website : {friend.website}</p>
        </div>
    );
};

export default FriendDetail;