import "./CreateMovie.css";
import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

class CreateMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      rating: "",
    };
  }

  chageHandler = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const { title, rating } = this.state;
    

    if (title && rating) {
      this.props.addMovie({
        title,
        rating: +rating,
        id: uuidv4(),
        cookie: false,
        star: false,
      })
  
      this.setState({ title: "", rating: "" });
    }
  }

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
              <button  onClick={this.submitHandler} className="rounded" type="submit">
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
