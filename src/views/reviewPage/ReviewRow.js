import { Link } from "react-router-dom";

export default function ReviewRow({ review }) {

  return (
    <li className="review-row">
      <div>
        <div>
          <Link to={`/user/funding/review/create`} key={review.idx} props={review.idx}>
            <button>수정</button>
          </Link>
          <Link to={`/user/funding/review/create`} key={review.idx} props={review.idx}>
            <button>삭제</button>
          </Link>
        </div>
        <div>
          <img className="gift-img" src={review.photo} />
        </div>
        <div className="gift-info">
          <div className="name">선물 이름: {review.name}</div>
          <div className="price">선물 가격: {review.price}</div>
          <div className="star">선물 별점: {review.star}</div>
          <div className="review">리뷰 내용: {review.review}</div>
        </div>
      </div>
    </li>
  );
}
