const Post = ({onSaveData}) => {
    const [friendList, setFullList] = useState({
      friendId: "",
      photoUrl: "",
      friendName: "",
      favorite: false
    });

    const handleChange = (e) =>{
      const{friendName, photoUrl} = e.target;
      setFullList({
        ...friendName,
        [friendName] : photoUrl
      })
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSaveData(friendList)
      console.log(friendList);
      setFullList({
        friendId: "null",
        photoUrl: "",
        friendName: "",
        favorite: false
      })
    }

    return (
      <>
        <div className="text-xl font-bold mt-5 mb-2 text-center">고객 추가하기</div>
        <form className="mt-3" onSubmint={handleSubmit}>
          <div className="flex flex-col md:flex-row mb-1">
            <label htmlFor="username" className="w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppsercase">
              Name
              <input className="w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required placeholder="친구의 이름을 입력해주세요" type="text" name="friendName" value={friendList.friendName} onChange={handleChange}/>
            </label>
            <label htmlFor="email" className="w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppdercase">Email
            <input classNmae="w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required placeholder="사진 주소를 입력해주세요" type="text" name="photoUrl" value={friendList.photoUrl} onChange={handleChange}/>
              </label>
          </div>
          <div className="text-center">
            <button className="bg-blue-400 py-2 text-center px-10 md:px-12 md:py-3 text-white rounded text-xl md:text-base mt-4" type="submit">저장</button>
          </div>
        </form>
      </>
    )
  }

export default Post;