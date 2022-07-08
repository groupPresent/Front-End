import React from 'react';

const RecommandLists = ({recommand}) => {

    const {img,description}=recommand

    return (
        <div>
            <div>(이미지){img}</div>
            <div>{description}</div>
        </div>
    );
};

export default RecommandLists;