import "./AppSearch.css";
import { Component } from "react";

class AppSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttuns: [
        {
          id: 1,
          title: "Barcha kinolar",
          filter: "all",
        },
        {
          id: 2,
          title: "Reytingi baland kinolar",
          filter: "rating",
        },
        {
          id: 3,
          title: "Sevimli kinolar",
          filter: "liked",
        },
      ],
    };
  }

  render() {
    const { updateTerm, term, filter, updateFilter } = this.props;

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
          {this.state.buttuns.map((btn) => (
            <button
              key={btn.id}
              onClick={() => updateFilter(btn.filter)}
              type="button"
              className={`btn ${
                filter === btn.filter ? "btn-primary" : "btn-outline-primary"
              }`}
            >
              {btn.title}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default AppSearch;
