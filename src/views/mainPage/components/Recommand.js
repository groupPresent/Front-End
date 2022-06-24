import React, { useState } from 'react';
import RecommandLists from './RecommandLists'

const Recommand = () => {

    const [recommands,setRecommands]=useState([
        {
            id:1,
            img:null,
            description:'선물1'
        },
        {
            id:2,
            img:null,
            description:'선물2'
        },
        {
            id:3,
            img:null,
            description:'선물3'
        },
        {
            id:4,
            img:null,
            description:'선물4'
        }
    ])



    return (
        <div>
            <h3>이 선물은 어떠신가요</h3>

            <div>
                {recommands.map(recommand=>(
                    <RecommandLists recommand={recommand} key={recommand.id}/>
                ))}
            </div>
        </div>
    );
};

export default Recommand;