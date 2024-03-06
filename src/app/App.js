import "./App.css";

import AppInfo from "../components/app-info/AppInfo";
import AppSearch from "../components/app-search/AppSearch";
import MovieList from "../components/movie-list/MovieList";
import CreateMovie from "../components/create-movie/CreateMovie";

function App() {

  const data = [
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
  ]
  return (
    <div className="App">
      <div className="my-container">
        <AppInfo />
        <AppSearch />
        <MovieList data={data} />
        <CreateMovie />
      </div>
    </div>
  );
}

export default App;
