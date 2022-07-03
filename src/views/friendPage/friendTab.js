import { Link } from "react-router-dom";

export default function FriendTab() {
  return (
    <>
      <div>
        <Link to="/Tab1">친구 정보</Link>
      </div>
      <div>
        <Link to="/Tab2">받은 펀딩</Link>
      </div>
    </>
  );
}
