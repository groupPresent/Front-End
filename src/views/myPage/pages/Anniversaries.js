import React from 'react'

const Anniversaries = ({anniversary,setAnniversaries,key}) => {

const deleteAnniversary=()=>{
    
}
const updateAnniversary=()=>{

}

return(
    <>
        <li>{anniversary.title}</li>
        <li>{anniversary.date}</li>
        <li>{anniversary.description}</li>
        <button onClick={deleteAnniversary}>수정하기</button>
        <button onClick={updateAnniversary}>삭제하기</button>
        <br/>
    </>
)
}

export default Anniversaries
