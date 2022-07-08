import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReviewRow from "./ReviewRow";
import axios from 'axios';
import "./ReviewRow.css"

export default function ReviewList(props) {
  return (
    <>
      <ul className="reviewListView">
        {!props.reviewList.length && <h4>선물 후기가 없습니다.</h4>}
        {props.reviewList?.map((review) => {
          return (
            <ReviewRow
              key={review.idx}
              review={review}
              modeEvent={props.modeEvent}
              IdEvent={props.IdEvent}
            />
          );
        })}
      </ul>
    </>
  );
}
