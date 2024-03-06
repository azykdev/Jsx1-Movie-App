import "./AppSearch.css";

const AppSearch = () => {
  return (
    <div className="app-search">
      <input
        type="text"
        placeholder="Search..."
        className="app-search-input form-control"
      />

      <div className="btn-group mt-3">
        <button className="btn btn-light">Barcha kinolar</button>
        <button className="btn btn-outline-light">
          Eng ko'p korilgan kinolar
        </button>
        <button className="btn btn-outline-light">
          Barcha qidirgan kinolar
        </button>
      </div>
    </div>
  );
};

export default AppSearch;
