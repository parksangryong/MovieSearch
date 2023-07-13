import { useEffect, useState } from "react";
import "../css/MovieInfo.css";
import axios from "axios";
import queryString from "query-string";

//info 연결해서 써도 되지만 github에서 작동이 계속 안되서 하다하다 결국 포기...

function MovieInfo() {
  const [movielist, setMovielist] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const queryObj = queryString.parse(window.location.search);
    const query = queryObj.query;
    //console.log(query);

    try {
      const movies = await axios.get(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${query}`
      );
      //console.log(movies.data.data.movie);
      setGenre(movies.data.data.movie.genres);
      setMovielist(movies.data.data.movie);
      //console.log(movielist);
    } catch (error) {
      //console.log("ded");
      setGenre([]);
      setMovielist([]);
    }
  };
  const genress = genre.map((data) => (
    <span key={data} className="genre">
      {data} &nbsp;
    </span>
  ));

  const moveU = () => {
    const utitle = movielist.title.replace(/(\s*)/g, "");
    window.open(
      `https://www.youtube.com/results?search_query=${utitle}`,
      "_blank"
    );
  };

  return (
    <div id="info">
      <div id="info_img">
        <img
          src={movielist.large_cover_image}
          alt={movielist.title}
          onClick={moveU}
        />
      </div>

      <div className="info_txt">
        <p>
          <span>title : </span>
          <span className="title">{movielist.title}</span>
        </p>
        <p>
          <span>year : </span>
          <span>{movielist.year}</span>
        </p>
        <p>
          <span>language : </span>
          <span>{movielist.language}</span>
        </p>
        <p>
          <span>rating : </span>
          <span
            className={
              movielist.rating >= 8
                ? "good"
                : movielist.rating >= 5
                ? "normal"
                : "bad"
            }
          >
            {movielist.rating}
          </span>
        </p>
        <p>
          <span>genre : </span>
          {genress}
        </p>
        <p>
          <span>summary : </span>
          <span>{movielist.description_full}</span>
        </p>
      </div>
    </div>
  );
}

export default MovieInfo;
