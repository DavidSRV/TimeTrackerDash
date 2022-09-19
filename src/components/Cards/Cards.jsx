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
      <div className={`card_2`}>
        <div className="dots">
          <p>{activity}</p>
          <>{dots}</>
        </div>
        <h1 className="time">{null}hrs</h1>
        <p className="info">Last{` ${null}-${null}`}</p>
      </div>
    </div>
  );
}
