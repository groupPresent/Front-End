import { Link } from "react-router-dom";

export default function ReviewRow({ idx, giftName, giftPhoto, star, review }) {
  // const giftName = giftName;
  // const pubDate = props.row.pubDate;
  // const desc = props.row.description;

  return (
    <Link to={`/yeram/detail/${idx}`}>
      <li className="review-row">
        <div>
          <div>...</div>
          <div>
            <img className="gift-img" src={giftPhoto} />
          </div>
          <div className="gift-info">
            <div className="name">���� �̸�: {giftName}</div>
            <div className="price">���� ����: {}</div>
            <div className="star">���� ����: {star}</div>
            <div className="review">���� ����: {review}</div>
          </div>
        </div>
      </li>
    </Link>
  );
}
