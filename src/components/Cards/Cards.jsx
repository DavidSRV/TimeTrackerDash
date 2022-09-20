import "./_styleCards.scss";
import { dots } from "../../utils/utils";
import {objFav} from '../../utils/utils.js'
import { useTimeFrames } from "../../context/TimeProvider";

export default function Cards({ title, timeframes }) {
  const { time } = useTimeFrames()

  return (
    <div className={`card __card${title}`}>
      <div className="activity">{objFav[title]}</div>
      <div className={`card_2`}>
        <div className="dots">
            <p>{title}</p>
          <>{dots}</>
        </div>
        <h1 className="time">{timeframes[time].current}hrs</h1>
        <p className="info">{`Last ${time} - ${timeframes[time].previous} hrs`}</p>
      </div>
    </div>
  );
}
