import React from 'react';

const ReceivedFundingList = ({ users }) => {
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
                    <button>댓글 보기</button>
                    <button>후기 작성</button>
                </div>
                )

            })}
        </div>
        
    );
};

export default ReceivedFundingList;