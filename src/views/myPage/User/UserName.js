import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UserName = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        axios.get('http://3.34.191.132:8080/user/info', {
            headers: {
                Authorization: `BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTczNDU0NTcsImlzcyI6InNwYXJ0YSIsIlVTRVJfTkFNRSI6ImhlbGxvMjM0NSJ9.E29Fcl_PfnNDyiSIaI5Hfia-xBi95VoPIdFojodhgMQ`
            }
        })
            .then(response => {
                setUserName(response.data.userName);
            });
    });

    return (
        <>
            {userName}
        </>
    );
}

export default UserName;



