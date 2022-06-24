import { useState, useEffect } from "react";
import MyInfo from "./Myinfo";

function Home() {
  const [loading, setLoading] = useState(true);
  const [myInfos, setMyInfos] = useState([]);
  const getMyInfos = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();

    setMyInfos(json.data.myInfos);
    setLoading(false);
  };
  useEffect(() => {
    getMyInfos();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {myInfos.map((myInfo) => (
            <MyInfo
              key={myInfo.name}
              personalImg={myInfo.personalImg}
              name={myInfo.name}
              birth={myInfo.birth}
              account={myInfo.account}
              anniversaryInfo={myInfo.anniversaryInfo}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
