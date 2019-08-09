import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const Movie = props => {
  console.log("props", props);
  const [movie, setMovie] = useState();
  // const id = props.match.params.id;

  useEffect(() => {
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  // const { title, director, metascore, stars } = movie;
  return (
    <Route
      path={`/movies/${movie.id}`}
      render={props => {
        return (
          <MovieDetails
            addToSavedList={props.addToSavedList}
            saveMovie={saveMovie}
            movie={movie}
            {...props}
          />
        );
      }}
    />
  );
};

export default Movie;
