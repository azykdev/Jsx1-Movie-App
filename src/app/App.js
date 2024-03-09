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
          title: "Omar",
          rating: 5,
          cookie: true,
          star: true,
        },
        {
          id: 2,
          title: "Ertugrul",
          rating: 6,
          cookie: false,
          star: false,
        },
        {
          id: 3,
          title: "Asqar",
          rating: 4,
          cookie: false,
          star: false,
        },
      ],
      term: "",
      filter: "all",
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
          };
        }

        return movie;
      }),
    });
  };

  searchMovie = (arr, term) => {
    if (term.length === 0) {
      return arr;
    } else {
      return arr.filter(
        (movie) => movie.title.toLowerCase().indexOf(term.toLowerCase()) > -1
      );
    }
  };

  updateTerm = (e) => {
    this.setState({
      term: e,
    });
  };

  filterData = () => {
    const { data, filter } = this.state;

    switch (filter) {
      case 'all':
        return data;
        break;
      case 'rating':
        return data.filter(movie => movie.rating >= 5);
        break;
      case 'liked':
        return data.filter(movie => movie.star);
        break;
    }
  }

  updateFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }

  render() {
    const { data, term } = this.state;
    const visibleData = this.searchMovie(this.filterData(), term);

    return (
      <div className="App">
        <div className="my-container">
          <AppInfo data={data} />
          <AppSearch updateFilter={this.updateFilter} filter={this.state.filter}  updateTerm={this.updateTerm} term={this.state.term} />
          <MovieList
            data={visibleData}
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
