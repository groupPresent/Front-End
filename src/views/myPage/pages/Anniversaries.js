import React from 'react'

const Anniversaries = ({anniversary}) => {



return(
    <>
        <li>{anniversary.title}</li>
        <li>{anniversary.date}</li>
        <li>{anniversary.description}</li>
        <br/>
    </>
)
}

export default Anniversaries
