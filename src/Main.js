import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Main() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(
          "https://www.omdbapi.com/?apikey=6b342c34&t=sairat"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAPI();
  }, []);
  return (
    <div className="render-div">
      <Card
        thumbnail={data?.Poster}
        title={data?.Title}
        desc={data?.Plot}
        id={data?.Title}
      />
    </div>
  );
}
