import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function ReviewWrite(props) {
    const [originReviews, setoriginReview] = useState(null);
    const navigate = useNavigate();

    const submitReview = (data) => {
    // for(var pair of data.entries()) {
    //     console.log(pair[0]+ ', '+ pair[1]); 
    //  }

    axios.post('/user/funding/review', data)    // <-- 버튼을 클릭했을때 데이터를 가져오도록(get) 지정 
      .then((data) => {    // <-- 파라미터를 추가하면 (보통 response or result) 실제로 가져온 데이터를 확인할 수 있음 
          console.log(data)  // <-- 뭔가 의도치 않은 부가정보를 포함한 다양한 정보가 함께 오는데 response.data 식으로 사용하면 원하는 데이터 확인 가능
          navigate('/user/funding/review');
          // window.location.href = '/user/funding/review';
      })
      .catch(() => {
          console.log('통신 실패')    // <-- .then은 데이터 요청 성공시, .catch는 데이터 요청 실패시 수행할 코드
      })
  };
  return (
    <>
      <h1>Create</h1>
      <form
        className="create-review-form"
        onSubmit={(event) => {
          event.preventDefault();
          const img = event.target[0].files[0];
          const formData = new FormData();
          formData.append('reviewPhoto', img);
          formData.append('reviewTitle', event.target.name.value);
          formData.append('reviewPrice', event.target.price.value);
          formData.append('reviewStar', event.target.star.value);
          formData.append('reviewContent', event.target.review.value);
          submitReview(formData);
        }}
      >
        <div>
          <div className="gift-info-wrap">
            <div className="gift-photo">
              <input type="file" accept="image/*" name="file" required multiple/>
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
                <input type="text" name="star" placeholder="별점을 적어주세요."/>
              </div>
              <div className="gift-price">
                <div>가격</div>
                <input type="number" name="price" placeholder="별점을 적어주세요."/>
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
        <Link to={`/user/funding/review`} key={props}>
            <button>취소</button>
        </Link>
      </form>
    </>
  );
}
