import React from 'react'
import Navbar from '../common/NavBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import FundingList from './FundingList'
import Review from './Review'

const Detail = () => {
  const [fundingPrice, setFundingPrice] = useState()

  const onChange = (e) => {
    setFundingPrice(e.target.value)
  }

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

  let text = `펀딩 최소 금액은 ${tmpData.giftFundingPrice}원 입니다`
  return (
    <div>
      <div>
        <h1>{tmpData.giftName}</h1>
        <img src={tmpData.giftPhoto} alt="선물"></img>
      </div>

      <hr />

      <div>
        <h2> 펀딩률 : {tmpData.giftFundingRate}%</h2>
        <progress
          style={{
            width: '70%',
            height: '50px',
          }}
          value={Number(tmpData.giftFundingRate)}
          max="100"
        ></progress>
      </div>

      <hr />

      <div>
        <input placeholder={text} value={fundingPrice} onChange={onChange} />원
        <br />
        <br />
        <button
          onClick={() => {
            //post메소드
            setFundingPrice(0)
          }}
        >
          펀딩하기
        </button>
      </div>

      <hr />
      <div>
        <FundingList contributorList={tmpData.contributorList}></FundingList>
      </div>
      <hr />

      <br />
      <br />
      <div>
        <Review commentList={tmpData.commentList}></Review>
      </div>
      <div></div>

      <br />
      <br />
    </div>
  )
}

export default Detail
