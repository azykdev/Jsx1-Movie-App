import "./CreateMovie.css";

const CreateMovie = () => {
  return (
    <div className="create-movie">
      <h3>Create Movie</h3>

      <form className="mt-3">
        <div className="row">
          <div className="col-md-6">
            <input type="text" placeholder="Movie Title" className="" />
          </div>
          <div className="col-md-3">
            <input type="text" placeholder="Movie Year" />
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
};

export default CreateMovie;
