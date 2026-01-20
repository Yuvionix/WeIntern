import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundImage:
          "url(https://wallpapercave.com/wp/wp4056410.jpg)",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">Money Heist</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <p className="banner-description">
          A criminal mastermind plans the biggest heist in history.
        </p>
      </div>

      <div className="banner-fadeBottom"></div>
    </header>
  );
}

export default Banner;
