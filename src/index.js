import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppV2 from "./AppV2";
// import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      {/* <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} /> */}
      <p>This movies was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppV2 />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amaizing"]}
    />
    <StarRating
      size={24}
      color="red"
      maxRating={5}
      className="test"
      defaultRating={2}
    />
    <Test /> */}
  </React.StrictMode>
);
