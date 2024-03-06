import "./AppSearch.css";

const AppSearch = () => {
  return (
    <div className="app-search">
      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        className="app-search-input form-control"
      />

      {/* Filter */}
      <div class="btn-group mt-3" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-light">
          Left
        </button>
        <button type="button" class="btn btn-outline-light">
          Middle
        </button>
        <button type="button" class="btn btn-outline-light">
          Right
        </button>
      </div>
    </div>
  );
};

export default AppSearch;
