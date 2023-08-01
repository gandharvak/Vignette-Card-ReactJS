import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Card({ thumbnail, title, desc, link, rating, id }) {
  const navigate = useNavigate();
  localStorage.setItem("thumbnail", thumbnail);
  localStorage.setItem("title", title);
  localStorage.setItem("desc", desc);
  localStorage.setItem("rating", rating);
  return (
    <>
      <div className="card">
        <img src={thumbnail} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a
            onClick={() => {
              navigate(`info/${id}`);
            }}
            className="btn btn-primary"
          >
            Explore
          </a>
        </div>
      </div>
    </>
  );
}
