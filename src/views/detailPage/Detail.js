import React from 'react'
import Navbar from '../common/NavBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import FundingList from './FundingList'

// {
//     'giftName':'아이폰',
//     'giftPhoto':'www.~',
//     'giftFundingRate':'50%',
//     'currentFundraisingPrice':2500,
//     'giftFundingPrice':'5000',
//     'contributorList':[
//     {'name':'},
//     {'name':'},
//     {'name':'},
//     ],
//     'contributorNum':5,
//     'commentList':[
//     {'commenter':'버민',
//     'content':'ㅋ왜태어났냐'
//     },
//     {'commenter':'버민',
//     'content':'ㅋ왜태어났냐'
//     },
//     {'commenter':'버민',
//     'content':'ㅋ왜태어났냐'
//     }
//     ],
//     'commentNum':3
//     }
const Detail = () => {
  const [fundingPrice, setFundingPrice] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/user/funding/{fundingId}')
        //여긴 지금 당장은 무조건 에러가 발생
      } catch (e) {
        console.log(e)
      }
    }

    fetchData()
  }, [])

  let tmpData = {
    giftName: '아이폰',
    giftPhoto:
      'http://img.segye.com/content/image/2019/12/24/20191224513213.jpg',
    giftFundingRate: '50',
    currentFundraisingPrice: 2500,
    giftFundingPrice: 5000,
    contributorList: [
      { name: '홍길동1' },
      { name: '홍길동2' },
      { name: '홍길동3' },
      { name: '홍길동4' },
      { name: '홍길동5' },
      { name: '홍길동6' },
      { name: '홍길동7' },
      { name: '홍길동8' },
      { name: '홍길동9' },
      { name: '홍길동10' },
    ],
    contributorNum: 10,
    commentList: [
      { commenter: '버민', content: 'ㅋ왜태어났냐' },
      { commenter: '버민', content: 'ㅋ왜태어났냐' },
      { commenter: '버민', content: 'ㅋ왜태어났냐' },
    ],
    commentNum: 3,
  }

  const onChange = (e) => {
    setFundingPrice(e.target.value)
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
        <progress style={{
					width : '70%',
					height: '50px'
				}} value={Number(tmpData.giftFundingRate)} max="100"></progress>
        {/* 펀딩률을 그래픽 형태로 어떻게 보여주지? */}
      </div>

      <hr />


      <div>
        <input placeholder={text} value={fundingPrice} onChange={onChange} />원
        <br/>
        <br/>
        <button
          onClick={() => {
            //post메소드
            setFundingPrice(0)
          }}
        >
          펀딩하기
        </button>
      </div>


      <div>
        <FundingList contributorList={tmpData.contributorList} contributorNum={tmpData.contributorNum}></FundingList>
      </div>
    </div>
  )
}

export default Detail
