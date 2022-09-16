import "./_styleCards.scss";
import { dots, exercise } from "../../utils/utils";


export default function Cards() {
  return (
    <div className={`card __card${null}`}>
      <div className="activity">{exercise}</div>
      <div className={`card_2 cardtype_${null}`}>
        <div className="dots">
          <p>{}activity</p>
          <>{dots}</>
        </div>
        <h1 className="time">{}time</h1>
        <p className="info">{}info</p>
      </div>
    </div>
  );
}
