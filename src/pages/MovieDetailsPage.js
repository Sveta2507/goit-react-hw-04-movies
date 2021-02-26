import React, { Component, lazy } from "react";
import { Route, Switch, NavLink, withRouter } from "react-router-dom";
import { getDetails } from "../services/usefulApi";
import routes from "../services/routes";
import MoviePreview from "../components/MoviePrev/MoviePrev";
import classes from "./MovieDetailsPage.module.css";

const Cast = lazy(() =>
  import("../components/Cast/Cast")
);
const Reviews = lazy(() =>
  import("../components/Reviews/Reviews")
);

class MovieDetailsPage extends Component {
  state = {
    id: "",
    genres: [],
    release_date: "",
    overview: "",
    vote_average: 0,
    pics: "",
    title: "",
    original_title: "",
    name: "",
  };

  componentDidMount() {
    const { moviesId } = this.props.match.params;
    getDetails(moviesId).then((data) => {
      this.setState({ ...data });
    });
  }

  handleGoback = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      history.push(location.state.from);
      console.log("step1");
      console.log(location.state.from);
      return;
    }
    console.log("step2");
    history.push(routes.home);
  };

  render() {
    return (
      <>
        <button
          type="button"
          onClick={this.handleGoback}
          className={classes.button}
          style={{ color: "red", fontSize: "35px" }}
        >
          Back
        </button>

        <MoviePreview
          genres={this.state.genres}
          release_date={this.state.release_date}
          overview={this.state.overview}
          vote_average={this.state.vote_average}
          poster_path={this.state.poster_path}
          title={this.state.title}
          original_title={this.state.original_title}
          name={this.state.name}
        />
        <h2 className={classes.h2}>Additional information</h2>
        <ul key={this.state.id}>
          <li>
            <NavLink
              to={`${this.props.match.url}/cast`}
              style={{ fontSize: "26px" }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${this.props.match.url}/reviews`}
              style={{ fontSize: "26px" }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={routes.cast} component={Cast} />
          <Route path={routes.reviews} component={Reviews} />
        </Switch>
      </>
    );
  }
}
export default withRouter(MovieDetailsPage);
