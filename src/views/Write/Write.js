import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Write(props) {
    const [originWriting, setoriginWriting] = useState(null);
    const [url, setUrl] = useState('');
    const [writingType, setWritingType] = useState('');
    const [writingMode, setwritingMode] = useState('');
    const [limit, setLimit] = useState(0);
    const navigate = useNavigate();
    
    useEffect(() => {
      if(props.review) { setoriginWriting(props.review); }
      setUrl(props.url);
      setWritingType(props.writingType);
      setwritingMode(props.writingMode);
    }, [limit])

    const submitWriting = (data) => {
      if (writingMode === 'post') {
        axios.post(url, data)    
        .then((data) => {    
            console.log(data)  
        })
        .catch(() => {
            console.log('submit 실패')    
        })
      } else {
        axios.put(url, data)    
        .then((response) => {    
            console.log(response);
        })
        .catch(() => {
            console.log('i want update', originWriting);
        })
      }
    };

    const goPage = (writingType, method) => {
      if (writingType === 'review') {
        props.reviewModeEvent(method);
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
            const formData = new FormData();
            // formData.append('reviewId', event.target.id.value);

            let img = ''
            if (originWriting !== null){
              img = event.target.photo.value
            } else {
              img = event.target[0].files[0];
            }
            formData.append('reviewPhoto', img);
            formData.append('reviewTitle', event.target.name.value);
            formData.append('reviewPrice', event.target.price.value);
            formData.append('reviewStar', event.target.star.value);
            formData.append('reviewContent', event.target.review.value);
            submitWriting(formData);
            props.reviewModeEvent('get');
          }}
      >
        <div>
          <div className="gift-info-wrap">
            <div className="gift-photo">
              {
                originWriting
                  ? (<img name="photo" src={originWriting.photo}></img>)
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
        <div onClick={event => goPage(writingType, 'get')}>취소</div>
      </form>
    </>
  );
}