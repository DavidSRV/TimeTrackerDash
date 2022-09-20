import { useTimeFrames } from "../../context/TimeProvider";
import { jeremy } from "../../utils/utils";
import "./_styleCard.scss";

export default function CardMain() {
  
  const {setTime} = useTimeFrames()

  return (
    <>
      <div className="contenedor_1">
        <div className="contenedor_2">
          <img src={jeremy} alt="imgJeremy" />
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
        <div className="buttons">
          <button onClick={() => setTime("daily")}>Daily</button>
          <button onClick={() => setTime("weekly")}>Weekly</button>
          <button onClick={() => setTime("monthly")}>Monthly</button>
        </div>
      </div>
    </>
  );
}
