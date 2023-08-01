import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Explore() {
  const [data, setData] = useState(null);
  const id = useParams();
  const fetchAPI = async () => {
    const movieName = id["id"];
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=6b342c34&t=${movieName}`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div className="explore-card">
        <div className="img-div">
          <img src={data?.Poster} className="card-img-top" alt="" />
        </div>
        <div className="explore-card-body">
          <div>
            <h5 className="card-title">{data?.Title}</h5>
            <p className="card-text">{data?.Plot}</p>
            <p className="card-text text-warning ">
              Rating: {data?.imdbRating}
            </p>

            <a className="btn btn-primary">Watch Trailer</a>
          </div>
        </div>
      </div>
    </>
  );
}
