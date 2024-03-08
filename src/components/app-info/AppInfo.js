import "./AppInfo.css";

const AppInfo = ({ data }) => {
  const cookieCount = data.filter((movie) => movie.cookie).length;
  const movieCount = data.length;
  return (
    <div className="app-info">
      <h2>Barcha kinolar soni: {movieCount}</h2>
      <h2>Sevimli kinolar soni: {cookieCount}</h2>
    </div>
  );
};

export default AppInfo;
