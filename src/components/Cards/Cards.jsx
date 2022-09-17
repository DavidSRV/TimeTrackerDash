import "./_styleCards.scss";
import { dots } from "../../utils/utils";
import { useEffect, useState } from "react";
import {objFav} from '../../utils/utils.js'

export default function Cards({ activity }) {

  const [favicon, setFavicon] = useState(null);

  function render(){
    return(
      objFav[activity]
    );
  }

  const renderImg = render();


  useEffect(function(){
    setFavicon(renderImg);
  }, [renderImg])


  return (
    <div className={`card __card${activity}`}>
      <div className="activity">{favicon}</div>
      <div className={`card_2 cardtype_${null}`}>
        <div className="dots">
          <p>{activity}</p>
          <>{dots}</>
        </div>
        <h1 className="time">{}time</h1>
        <p className="info">{}info</p>
      </div>
    </div>
  );
}
