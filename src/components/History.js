import React , {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/dataContext";

const History = () => {
  const { watchHistory } = useContext(DataContext);

  return (
    <div className="container history-container">
      {watchHistory.map((item, index) => {
        return (
          <span key={index}>
            <Link to={`/view/${item}`}>
              <img src={`https://img.youtube.com/vi/${item}/0.jpg`} alt="" />
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default History;
