import { ReactComponent as StarFull } from "assert/img/Star-Full.svg";
import { ReactComponent as StarHalf } from "assert/img/Star-half.svg";
import { ReactComponent as StarEmpty } from "assert/img/Star-empty.svg";
import './styles.css';

function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}

export default MovieStars;
