import React, { useEffect, useState } from 'react'

const FundingList = ({ contributorList, contributorNum }) => {
  //     'contributorList':[
  //     {'name':'},
  //     {'name':'},
  //     {'name':'},
  //     ],
  //     'contributorNum':5,

  const [num, setNum] = useState(contributorNum)
  const [pagecount, setPagecount] = useState(0)
  const [limit, setLimit] = useState(5)
  //한 페이지당 보여줄 친구 목록수는 5명

  const [currentPage, setCurrentPage] = useState(1)
  const [list, setList] = useState([])
  const [query,setQuery]=useState(1)
  //이건 나중에 axios로 쿼리스트링을 통해서 현재 페이지를 (ex) ?page=3)
  //받아오는데 사용되는 것을 임시로 useState로 구현 한 것

//목록의 갯수에 따라 전체 몇 페이지까지 있는지 지정 (현재 페이지가 아님)
  useEffect(() => {
    const count = Math.ceil(num / limit)
    setPagecount(count)
  }, [limit]) //한 페이지당 몇명을 보여줄지가 바뀐다면 실행
  



  //버튼을 클릭하게 되면 다음 페이지로 넘어감
  //원래 skip 과 limit을 지정해주면 해당 목록만 넘어왔었는데
  //지금은 지정해서 axios로 가져올 수 없으니 직접 for문으로 가져옴
  useEffect(() => {
    let page = query
    page = page ? page : 1
    setCurrentPage(page)
    //현재 페이지 설정

    
    let skip = (page - 1) * limit
    //한 페이지당 질문이 5개라면 질문 배열에서
    //1페이지는 [0]~[4]의 질문을
    //2페이지는 [5]~[9]의 질문을 가져와야 한다

    //원래는 axios로 skip~limit만큼 해당 페이지에 대한 내용을 받아와야 한다    
    let tmp=[]
    for(let i=skip; i<skip+limit; i++){
        tmp.push(contributorList[i])
    }
    setList(tmp)
    console.log(list)
  },[query])


  const goNextPage=(e)=>{
    //setCurrentPage(page)
    
    setQuery(currentPage+1)
  }

  const goBackPage=(page)=>{
    setQuery(currentPage-1)
  }

  return(
    <>

        현재 페이지 : {currentPage}

        <ul>
            {list.map(item=>{
                return <li>{item.name}</li>
            })}
        </ul>


        <button onClick={goBackPage}>이전</button>
        <button onClick={goNextPage}>다음</button>
        
    </>
  )

//   return (
//     <div>
//       <ul>
//         {contributorList.map((item) => (
//           <PrintList item={item} key={item.name} />
//         ))}
//       </ul>
//     </div>
//   )



}

// const PrintList = ({ item }) => {
//   return (
//     <>
//       <li>{item.name}</li>
//     </>
//   )
// }

export default FundingList
