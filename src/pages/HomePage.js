import React, { Component } from "react";
import { getTrending } from "../services/usefulApi";
import { NavLink } from "react-router-dom";
import classes from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    getTrending().then((data) => {
      this.setState({ data: data.results });
    });
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.data.map((film) => (
            <li key={film.id} className={classes.ul}>
              <NavLink
                to={{
                  pathname: `/movies/${film.id}`,
                }}
              >
                {film.original_name ||
                  film.name ||
                  film.original_title ||
                  film.title}
                {}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
