import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route
          path="/movies/:id"
          render={props => {
            return <Movie addToSavedList={addToSavedList} {...props} />;
          }}
        />
        <Route path="/" component={MovieList} />
      </Switch>
    </div>
  );
};

export default App;
