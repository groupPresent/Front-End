import React from 'react';

const MyInfoList = (info,anniversaries) => {
    return (
        <div>
            <p>{info.name}</p>
            <p>{info.date}</p>
            <p>{info.accountNum}</p>


            {anniversaries.map(item=>{
                return (
                    <ul>
                        <li>{item.title}</li>
                    </ul>
                )
            })}
        </div>
    );
};

export default MyInfoList;

