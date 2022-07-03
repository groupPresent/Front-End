import React, { useState } from "react";

export default function Tab2() {
  //친구 마이페이지 - 받은 펀딩 조회
  const [funding] = useState([
    {
      giftPhoto: "",
      giftName: "Iphone",
      giftPrice: "50000",
      giftFundingPrice: "5000",
      giftFundingRate: "10"
    },

    {
      giftPhoto: "",
      giftName: "S22",
      giftPrice: "50000",
      giftFundingPrice: "5000",
      giftFundingRate: "10"
    }
  ]);

  const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
      height: 20,
      width: "70%",
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    };

    const fillerStyles = {
      height: "100%",
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: "inherit",
      textAlign: "right"
    };

    const labelStyles = {
      padding: 5,
      color: "white",
      fontWeight: "bold"
    };

    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };

  function Funding({ funding }) {
    return (
      <>
        <div>
          <img src={funding.giftPhoto} />
          <b>{funding.giftName}e</b>
          <p>{funding.giftPrice}원</p>
        </div>
        <div>
          <ProgressBar
            key={funding.id}
            bgcolor="#6a1b9a"
            completed={funding.giftFundingRate}
          />
          <p>
            {funding.giftFundingPrice}원{}
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        {funding.map((funding) => (
          <Funding funding={funding} key={funding.id} />
        ))}
      </div>
    </>
  );
}
