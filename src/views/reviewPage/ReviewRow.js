import { Link } from "react-router-dom";

export default function ReviewRow({ idx, giftName, giftPhoto, star, review }) {

  return (
    <li className="review-row">
      <div>
        <div>...</div>
        <div>
          <img className="gift-img" src={giftPhoto} />
        </div>
        <div className="gift-info">
          <div className="name">선물 이름: {giftName}</div>
          <div className="price">선물 가격: {}</div>
          <div className="star">선물 별점: {star}</div>
          <div className="review">리뷰 내용: {review}</div>
        </div>
      </div>
    </li>
  );
}
