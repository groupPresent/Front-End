import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ReviewPage from "./ReviewPage";

export default function Write(props) {
    const [originWriting, setoriginWriting] = useState(null);
    const [url, setUrl] = useState('');
    const [type, setType] = useState('');
    const [limit, setLimit] = useState(0);
    const navigate = useNavigate();
    
    useEffect(() => {
      setoriginWriting(props.review);
      setUrl(props.url);
      setType(props.type);
      // if (type )
    }, [limit])

    const changeMode = useCallback(type => {
      props.reviewModeEvent(type)
    }, [props.reviewModeEvent])

    const submitWriting = (data) => {
      axios.post(url, data)    
        .then((data) => {    
            console.log(data)  
        })
        .catch(() => {
            console.log('통신 실패')    
        })
    };

    const goPage = (type, method) => {
      if (type === 'review') {
        changeMode(method);
      } else {

      }
    }
  return (
    <>
      <h1>Create {props.url}</h1>
      <form
        className="create-form"
          onSubmit={(event) => {
            event.preventDefault();
            const img = event.target[0].files[0];
            const formData = new FormData();
            // formData.append('reviewId', event.target.id.value);
            formData.append('reviewPhoto', img);
            formData.append('reviewTitle', event.target.name.value);
            formData.append('reviewPrice', event.target.price.value);
            formData.append('reviewStar', event.target.star.value);
            formData.append('reviewContent', event.target.review.value);
            submitWriting(formData);
          }}
      >
        <div>
          <div className="gift-info-wrap">
            <div className="gift-photo">
              {
                originWriting
                  ? (<img src={originWriting.photo}></img>)
                  : (<input type="file" accept="image/*" name="file" required multiple/>)
              }
            </div>
            <div className="gift-info">
              <div className="gift-name">
                <div>선물</div>
                <input
                  type="text"
                  name="name"
                  placeholder="선물명을 적어주세요."
                  defaultValue={originWriting? originWriting.name : ''}
                />
              </div>
              <div className="gift-star">
                <div>별점</div>
                <input type="text" name="star" placeholder="별점을 적어주세요." defaultValue={originWriting? originWriting.star : ''}/>
              </div>
              <div className="gift-price">
                <div>가격</div>
                <input type="number" name="price" placeholder="가격을 적어주세요." defaultValue={originWriting? originWriting.price : ''}/>
              </div>
            </div>
          </div>

          <div className="gift-review">
            <input
              type="textarea"
              name="review"
              placeholder="후기를 남겨주세요."
              defaultValue={originWriting? originWriting.review : ''}
            />
          </div>
        </div>

        <input type="submit" value={originWriting? '후기 수정' : '후기 등록'}></input>
        <button onClick={event => goPage(type, 'get')}>취소</button>
      </form>
    </>
  );
}
