import React from 'react'
import Navbar from '../common/NavBar'
import { useEffect, useState } from 'react'
import axios from 'axios'

// {
//     ��giftName��:����������,
//     ��giftPhoto��:��www.~��,
//     ��giftFundingRate��:��50%��,
//     ��currentFundraisingPrice��:2500,
//     ��giftFundingPrice��:��5000��,
//     ��contributorList��:[
//     {��name��:����},
//     {��name��:����},
//     {��name��:����},
//     ],
//     ��contributorNum��:5,
//     ��commentList��:[
//     {��commenter��:�����Ρ�,
//     ��content��:�������¾�ġ�
//     },
//     {��commenter��:�����Ρ�,
//     ��content��:�������¾�ġ�
//     },
//     {��commenter��:�����Ρ�,
//     ��content��:�������¾�ġ�
//     }
//     ],
//     ��commentNum��:3
//     }
const Detail = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/user/funding/{fundingId}')
      } catch (e) {
        console.log(e)
      }
    }

    fetchData()

  },[])

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default Detail
