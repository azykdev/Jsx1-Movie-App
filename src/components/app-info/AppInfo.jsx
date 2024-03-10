import "./AppInfo.css";

const AppInfo = ({ data }) => {
  const cookieCount = data.filter((movie) => movie.cookie).length;
  const movieCount = data.length;

  return (
    <div className="app-info">
      <h4>
        Barcha kinolar soni: <b>{movieCount}</b>
      </h4>
      <h4>
        Sevimli kinolar soni: <b>{cookieCount}</b>
      </h4>
    </div>
  );
};

export default AppInfo;
