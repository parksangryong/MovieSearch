//상세정보
import { useState } from "react";
import "../css/Movie.css";

function Movie(props) {
  const [sum, setSum] = useState(false);
  const genress = props.genres.map((data) => (
    <span key={data}>{data} &nbsp;</span>
  ));

  const moveInfo = () => {
    //setSum(!sum);
    window.location.href = "/info?query=" + props.id;
  };

  if (sum) {
    return (
      <div id="movie">
        <div onClick={moveInfo} className="info-txt">
          {props.summary}
        </div>
      </div>
    );
  } else {
    return (
      <div id="movie">
        <img
          src={props.medium_cover_image}
          alt={props.title}
          onClick={moveInfo}
        />
        <div className="txt">
          <p>
            <span>title : </span>
            <span>{props.title}</span>
          </p>
          <p>
            <span>year : </span>
            <span>{props.year}</span>
          </p>
          <p>
            <span>language : </span>
            <span>{props.language}</span>
          </p>
          <p>
            <span>rating : </span>
            <span
              className={
                props.rating >= 8
                  ? "good"
                  : props.rating >= 5
                  ? "normal"
                  : "bad"
              }
            >
              {props.rating}
            </span>
          </p>
        </div>
        <p>
          <span>genre : </span>
          <span>{genress}</span>
        </p>
      </div>
    );
  }
}

export default Movie;
