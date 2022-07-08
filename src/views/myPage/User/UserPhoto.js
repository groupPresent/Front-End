import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UserPhoto = () => {
    const [UserPhoto, setUserPhoto] = useState();

    useEffect(() => {
        axios.get('http://3.34.191.132:8080/user/info', {
            headers: {
                Authorization: `BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTc0MjkzNjMsImlzcyI6InNwYXJ0YSIsIlVTRVJfTkFNRSI6ImhlbGxvMjM0NTY4OSJ9.VMjqXvkxgjl8UaNdzXAV_v7YjvAHGX0ew2iQ4BUUBUA`
             }
        })
            .then(response => {
                setUserPhoto(response.data.userPhoto);
            });
    });

    return (
        <>
            {UserPhoto}
        </>
    );
}

export default UserPhoto;



