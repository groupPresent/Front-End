import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReceivedFundingList from './ReceivedFundingList';

const UserReceivedFunding = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://3.34.191.132:8080/user/funding', {
        headers: {
            Authorization: `BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTczNDU0NTcsImlzcyI6InNwYXJ0YSIsIlVTRVJfTkFNRSI6ImhlbGxvMjM0NSJ9.E29Fcl_PfnNDyiSIaI5Hfia-xBi95VoPIdFojodhgMQ`
        }
    })
            .then(response => {
                setUsers(response.data);
            });
    }, []);

    return (
        <>

            <ReceivedFundingList users={users}/>
        </>
    );
}

export default UserReceivedFunding;