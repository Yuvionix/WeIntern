import "./Row.css";

function Row({ title }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        <img loading="lazy" src="https://via.placeholder.com/150x225?text=Movie+1" alt="Movie 1" />
        <img loading="lazy" src="https://via.placeholder.com/150x225?text=Movie+2" alt="Movie 2" />
        <img loading="lazy" src="https://via.placeholder.com/150x225?text=Movie+3" alt="Movie 3" />
        <img loading="lazy" src="https://via.placeholder.com/150x225?text=Movie+4" alt="Movie 4" />
        <img loading="lazy" src="https://via.placeholder.com/150x225?text=Movie+5" alt="Movie 5" />
        <img loading="lazy" src="https://via.placeholder.com/150x225?text=Movie+6" alt="Movie 6" />
        <img loading="lazy" src="https://via.placeholder.com/150x225?text=Movie+7" alt="Movie 7" />
        <img loading="lazy" src="https://via.placeholder.com/150x225?text=Movie+8" alt="Movie 8" />
      </div>
    </div>
  );
}

export default Row;
