import "./App.css";

import AppInfo from "../components/app-info/AppInfo";
import AppSearch from "../components/app-search/AppSearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <AppInfo />
        <AppSearch />
      </div>
    </div>
  );
}

export default App;
