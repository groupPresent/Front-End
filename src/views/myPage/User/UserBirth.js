import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UserBirth = () => {
    const [UserBirth, setUserBirth] = useState();

    useEffect(() => {
        axios.get('http://3.34.191.132:8080/user/info', {
            headers: {
                Authorization: `BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTczNDU0NTcsImlzcyI6InNwYXJ0YSIsIlVTRVJfTkFNRSI6ImhlbGxvMjM0NSJ9.E29Fcl_PfnNDyiSIaI5Hfia-xBi95VoPIdFojodhgMQ`
            }
        })
            .then(response => {
                setUserBirth(response.data.birthDay);
            });
    });

    return (
        <>
            {UserBirth}
        </>
    );
}

export default UserBirth;


