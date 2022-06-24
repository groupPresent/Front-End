import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MyInfo({ name, personalImg, birth, account, anniversaryInfo }) {
  return (
    <div>
      <img src={personalImg} alt={personalImg} />
      <h2>
        <Link to={`/myinfo/${name}`}>{name}</Link>
      </h2>
      <h2>{name}</h2>
      <h2>{birth}</h2>
      <h2>{account}</h2>
      <button>+</button>
      <ul>
        {anniversaryInfo.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <button>...</button>
      <button>친구목록 보기</button>
      <button>내가 남긴 후기</button>
    </div>
  );
}

MyInfo.propTypes = {
  name: PropTypes.string.isRequired,
  personalImg: PropTypes.string.isRequired, //url
  birth: PropTypes.number.isRequired,
  account: PropTypes.number.isRequired,
  anniversaryInfo: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MyInfo;
