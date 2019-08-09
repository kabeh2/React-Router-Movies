import React from "react";
import { Link, NavLink } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie, index) => (
      <NavLink className="saved-movie" key={index} to={`/movies/${movie.id}`}>
        {movie.title}
      </NavLink>
    ))}
    <Link to="/" className="home-button">
      Home
    </Link>
  </div>
);

export default SavedList;
