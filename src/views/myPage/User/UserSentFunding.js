import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SentFundingList from './SentFundingList';

const UserSentFunding = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://3.34.191.132:8080/user/funding', {
        headers: {
            Authorization: `BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTc0MjkzNjMsImlzcyI6InNwYXJ0YSIsIlVTRVJfTkFNRSI6ImhlbGxvMjM0NTY4OSJ9.VMjqXvkxgjl8UaNdzXAV_v7YjvAHGX0ew2iQ4BUUBUA`
         }
    })
            .then(response => {
                setUsers(response.data);
            });
    }, []);

    return (
        <>
            <SentFundingList users={users}/>
        </>
    );
}

export default UserSentFunding;