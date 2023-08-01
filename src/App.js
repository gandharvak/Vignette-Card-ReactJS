import "./styles.css";
import Explore from "./Explore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/info/:id" element=<Explore /> />
        </Routes>
      </BrowserRouter>
      <Explore />
    </>
  );
}
