import React from 'react'
import Navbar from '../common/NavBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import FundingList from './FundingList'
import Review from './Review'
//백그라운드 이미지 경로
import bg from "../../../src/img/background/withRibon2.png";
import "./detail.css"
import "../../css/components/box.css"
import "../../css/components/button.css"

const Detail = () => {
  const [fundingPrice, setFundingPrice] = useState()

  const onChange = (e) => {
    setFundingPrice(e.target.value)
  }

  useEffect(() => {
    document.body.style.background = `url(${bg}) repeat-y center top / cover`;
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/user/funding/{fundingId}')
  //       //여긴 지금 당장은 무조건 에러가 발생
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  //   fetchData()
  // }, [])

  //펀딩리스트를 받아온 임시데이터입니다
  let tmpData = {
    giftName: '아이폰',
    giftPhoto:
      'http://img.segye.com/content/image/2019/12/24/20191224513213.jpg',
    giftFundingRate: '50',
    currentFundraisingPrice: 2500,
    giftFundingPrice: 5000,
    contributorList: [
      { id: 1, name: '홍길동1' },
      { id: 2, name: '홍길동2' },
      { id: 3, name: '홍길동3' },
      { id: 4, name: '홍길동4' },
      { id: 5, name: '홍길동5' },
      { id: 6, name: '홍길동6' },
      { id: 7, name: '홍길동7' },
      { id: 8, name: '홍길동8' },
      { id: 9, name: '홍길동9' },
      { id: 10, name: '홍길동10' },
      { id: 11, name: '조민호' },
      { id: 12, name: '이현범' },
      { id: 13, name: '신미림' },
      { id: 14, name: '박준서' },
      { id: 15, name: '임예람' },
      { id: 16, name: '문하늘' },
      { id: 17, name: '김현수' },
      { id: 18, name: '디자이너분' },
    ],
    contributorNum: 10,
    commentList: [
      { commenter: '버민', content: 'ㅋ왜태어났냐' },
      { commenter: '버민', content: 'ㅋ왜태어났냐' },
      { commenter: '버민', content: 'ㅋ왜태어났냐' },
      { commenter: '버민', content: 'ㅋ왜태어났냐' },
      { commenter: '버민', content: 'ㅋ왜태어났냐' },
    ],
    commentNum: 3,
  }

  let text = `최소 금액 ${tmpData.giftFundingPrice}원`
  return (
    <div className='detailPage'>
      <div className='gift-funding-info basic-box'>
        <div className='gift-basic-info'>
          <img src={tmpData.giftPhoto} alt="선물"></img>
          <h3>{tmpData.giftName}</h3>

          <div className='give-funding'>
            <div>
              <input placeholder={text} value={fundingPrice} onChange={onChange} />
              <span>원</span>
            </div>
            <button
              className='highlight-btn'
              onClick={() => {
                //post메소드
                setFundingPrice(0)
              }}
            >
              펀딩하기
            </button>
          </div>
        </div>
        <div className='funding-info'>
          <div className='funding-percent'>
            <div> 펀딩률 : {tmpData.giftFundingRate}%</div>
            <progress
              style={{
                width: '100%',
                height: '30px',
              }}
              value={Number(tmpData.giftFundingRate)}
              max="100"
            ></progress>
          </div>

          <hr />
          <div className='funding-list'>
            <FundingList contributorList={tmpData.contributorList}></FundingList>
          </div>
        </div>
      </div>

      <div className='comment-box basic-box'>
        <Review commentList={tmpData.commentList}></Review>
      </div>
    </div>
  )
}

export default Detail
