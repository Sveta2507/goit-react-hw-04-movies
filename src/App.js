import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import routes from "./services/routes";
import Bar from "./components/Bars/Bars";
import "./App.css";
import classes from "./App.css";

const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));

function App() {
  return (
    <>
      <div className={classes.background}>
        <Bar />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
