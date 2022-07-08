import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../common/NavBar'
import "./friend.css";
import gaugeBox from "./friendImages/3-2.gaugeBox.png";
import gauge from "./friendImages/3-2.gauge.png";
import frame2 from "./friendImages/3-2.frame2.png";


export default function Tab2() {
  const imagestyle = {
    height: "100px",  
    width: "100px"
  };
  const textstyle= {
  fontSize: "16pt"
  }

  //친구 마이페이지 - 받은 펀딩 조회
  const [funding] = useState([
    {
      giftPhoto: frame2,
      giftName: "Iphone",
      giftPrice: "50000",
      giftFundingPrice: "5000",
      giftFundingRate: "10"
    },

    {
      giftPhoto: frame2,
      giftName: "S22",
      giftPrice: "50000",
      giftFundingPrice: "5000",
      giftFundingRate: "10"
    }
  ]);

  const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
      height: 30,
      width: "100%",
      margin: 50
    }

    const fillerStyles = {
      height: 23,
      width: `${completed}%`
    };

    const labelStyles = {
      padding: 5,
      color: "black",
      fontSize: "11pt"
    };

    return (
      <>
                                  <td><div style={containerStyles} class="gaugeContainer" >
                                    <img style={fillerStyles} src={gauge}/>
                                  </div></td>
                                  <td><div style={labelStyles} class="percentage">{`${completed}%`}</div></td>
                  
      </>
    );
  };

  function Funding({ funding }) {
    return (
      <>
        <div class="friendFunding">
              <img src={funding.giftPhoto} style = {imagestyle}/>
              <li>
                              <p style={textstyle}>{funding.giftName}</p>
                              <p style={textstyle}>가격  |  {funding.giftPrice}원</p>
                              <ProgressBar
                                key={funding.id}
                                bgcolor="#6a1b9a"
                                completed={funding.giftFundingRate}
                              />
              </li>
          </div>
       </>
    );
  }



  return (
    <div class="Tab2BG">
      <Navbar />
      <section id="wrapper">
            <div class="content">
            <div class="tabs2">
                 <Link to="/Tab1"><button class="buttonSt" style={{
                  backgroundColor: 'transparent',  color:"white"
                  }}>친구의 정보</button></Link>
                 <Link to="/Tab2"><button class="buttonSt" style={{
                  backgroundColor: 'transparent',  color:"white"}}>받은 펀딩</button></Link>
                </div>
            </div>
      </section>
      <div>
        {funding.map((funding) => (
          <Funding funding={funding} key={funding.id} />
        ))}
      </div>
    </div>
  );
}
