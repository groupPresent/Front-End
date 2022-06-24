import React, { Fragment, useEffect, useState } from "react";
import ReviewRow from "./ReviewRow";

export default function ReviewList(props) {
  // const [reviews, setReview] = useState();
  const reviews = [
    {
      idx: "1",
      name: "������",
      photo: "/",
      star: "5��",
      review: "������ ����"
    },
    { idx: "2", name: "�ƺ�", photo: "/", star: "4��", review: "m2Ĩ ���Դ�" }
  ]; //API���� �޾ƿ��� ��

  return (
    <>
      <h1>Leview list</h1>
      <ul className="reviewListView">
        {!reviews.length && <h4>���� �ıⰡ �����ϴ�.</h4>}
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
