import React, { Fragment, useEffect, useState } from "react";

export default function ReviewCreate(props) {
  const submitReview = (data) => {
    console.log(data);
    //ㅇㅇ 잘 넘어옴. back으로 보내주기만 하면 됨
  };

  return (
    <>
      <h1>Create</h1>
      <form
        className="create-review-form"
        onSubmit={(event) => {
          event.preventDefault();
          const data = {
            giftName: event.target.name.value,
            giftReview: event.target.review.value
          };
          submitReview(data);
        }}
      >
        <div>
          <div className="gift-info-wrap">
            <div className="gift-photo">
              <input type="file" accept="image/*" required multiple />
            </div>
            <div className="gift-info">
              <div className="gift-name">
                <div>선물</div>
                <input
                  type="text"
                  name="name"
                  placeholder="선물명을 적어주세요."
                />
              </div>
              <div className="gift-star">
                <div>별점</div>
                {/* <input placeholder="선물명을 적어주세요."/> */}
              </div>
            </div>
          </div>

          <div className="gift-review">
            <input
              type="text-area"
              name="review"
              placeholder="후기를 남겨주세요."
            />
          </div>
        </div>

        <input type="submit" value="후기 등록"></input>
      </form>
    </>
  );
}
