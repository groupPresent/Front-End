import React from 'react';

const ReceivedFundingList = ({ users }) => {
    return (
        <div class = "RFL">
            {users.map(user => {
                return (
                    <div class = "divRFLelement">
                <div key={user.giftName} class = "RFLelement">
                 <div class = "divGiftPhoto">
                    <div class = "giftPhoto"><img src = "{user.giftPhoto}" ></img> </div>
                 </div>  
                    <div>상품명: {user.giftName}</div>
                    <div>가격: {user.giftPrice}원</div>
                    <div>펀딩률: {user.giftFundingRate}</div>
                    <div>펀딩 금액: {user.giftFundingPrice}원</div>
                    <div>{user.anniversaryRemains}</div>
                    <button class = "eventBtn">댓글 보기</button>
                    <button class = "eventBtn">후기 작성</button>
                </div>
                </div>
                )

            })}
        </div>
        
    );
};

export default ReceivedFundingList;