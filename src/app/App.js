import "./App.css";
import { Component } from "react";

import AppInfo from "../components/app-info/AppInfo";
import AppSearch from "../components/app-search/AppSearch";
import MovieList from "../components/movie-list/MovieList";
import CreateMovie from "../components/create-movie/CreateMovie";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          title: "Movie 1",
          rating: 5,
          cookie: true,
          star: true,
        },
        {
          id: 2,
          title: "Movie 2",
          rating: 6,
          cookie: false,
          star: false,
        },
        {
          id: 3,
          title: "Movie 3",
          rating: 4,
          cookie: false,
          star: false,
        },
      ],
    };
  }

  onDelete = (id) => {
    const { data } = this.state;

    this.setState({
      data: data.filter((movie) => movie.id !== id),
    });
  };

  addMovie = (movie) => {
    const { data } = this.state;

    this.setState({
      data: [movie, ...data],
    });
  };

  toggleLikeAndCookieHandler = (id, el) => {
    console.log(id, el);
    const { data } = this.state;

    this.setState({
      data: data.map((movie) => {
        if (movie.id == id) {
          return {
            ...movie,
            [el]: !movie[el],
          }
        }

        return movie
      }),
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <div className="my-container">
          <AppInfo data={data} />
          <AppSearch />
          <MovieList
            data={data}
            onDelete={this.onDelete}
            toggleLikeAndCookieHandler={this.toggleLikeAndCookieHandler}
          />
          <CreateMovie addMovie={this.addMovie} />
        </div>
      </div>
    );
  }
}

export default App;
