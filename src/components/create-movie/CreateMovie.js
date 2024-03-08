import "./CreateMovie.css";
import { Component } from "react";

class CreateMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "aaa",
      rating: "",
    };
  }

  chageHandler = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    const { title, rating } = this.state;

    return (
      <div className="create-movie">
        <h3>Create Movie</h3>

        <form className="mt-3">
          <div className="row">
            <div className="col-md-6">
              <input
                onChange={this.chageHandler}
                type="text"
                placeholder="Movie Title"
                className=""
                value={title}
                name="title"
              />
            </div>
            <div className="col-md-3">
              <input
                onChange={this.chageHandler}
                type="text"
                placeholder="Movie Rating"
                className=""
                value={rating}
                name="rating"
              />
            </div>
            <div className="col-md-3">
              <button className="rounded" type="submit">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateMovie;
