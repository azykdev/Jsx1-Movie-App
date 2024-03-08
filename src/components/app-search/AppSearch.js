import "./AppSearch.css";
import { Component } from "react";

class AppSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { updateTerm, term } = this.props;

    return (
      <div className="app-search">
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="app-search-input form-control py-3"
          onChange={(e) => updateTerm(e.target.value)}
          value={term}
        />

        {/* Filter */}
        <div className="btn-group mt-3 w-100">
          <button type="button" className="btn btn-light">
            Barcha kinolar
          </button>
          <button type="button" className="btn btn-outline-light">
            Reytingi baland kinolar
          </button>
          <button type="button" className="btn btn-outline-light">
            Sevimli kinolar
          </button>
        </div>
      </div>
    );
  }
}

export default AppSearch;
