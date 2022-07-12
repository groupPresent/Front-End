import React from 'react';

const SentFundingList = ({ users }) => {
    return (
        <div>
            {users.map(user => {
                return (
                <div key={user.giftName}>
                    <div>{user.giftPhoto}</div>
                    <div>{user.giftName}</div>
                    <div>{user.giftPrice}</div>
                    <div>{user.giftFundingRate}</div>
                    <div>{user.giftFundingPrice}</div>
                    <div>{user.anniversaryRemains}</div>
                    
                </div>
                )

            })}
        </div>
        
    );
};

export default SentFundingList;