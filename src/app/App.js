import "./App.css";

import AppInfo from "../components/app-info/AppInfo";
import AppSearch from "../components/app-search/AppSearch";
import MovieList from "../components/movie-list/MovieList";
import CreateMovie from "../components/create-movie/CreateMovie";

function App() {
  return (
    <div className="App">
      <div className="my-container">
        <AppInfo />
        <AppSearch />
        <MovieList />
        <CreateMovie />
      </div>
    </div>
  );
}

export default App;
