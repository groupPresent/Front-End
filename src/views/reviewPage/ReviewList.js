import React, { Fragment, useEffect, useState } from "react";
import ReviewRow from "./ReviewRow";

export default function ReviewList(props) {
  // const [reviews, setReview] = useState();
  const reviews = [
    {
      idx: "1",
      name: "아이폰",
      photo: "/",
      star: "5점",
      review: "아이폰 좋앙"
    },
    { idx: "2", name: "맥북", photo: "/", star: "4점", review: "m2칩 나왔대" }
  ]; //API에서 받아오는 듯

  return (
    <>
      <h1>Leview list</h1>
      <ul className="reviewListView">
        {!reviews.length && <h4>선물 후기가 없습니다.</h4>}
        {reviews?.map((review) => {
          return (
            <ReviewRow
              index={review.idx}
              giftName={review.name}
              giftPhoto={review.photo}
              star={review.star}
              review={review.review}
              // row={v}
            />
          );
        })}
      </ul>
      <span>+</span>
    </>
  );
}
