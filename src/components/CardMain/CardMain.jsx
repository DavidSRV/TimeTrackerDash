import React from "react";
import { jeremy } from "../../utils/utils";
import "./_styleCard.scss";

export default function CardMain() {

  return (
    <>
      <div className="contenedor_1">
        <div className="contenedor_2">
          <img src={jeremy} alt="imgJeremy" />
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
        <div className="buttons">
          <button>Daily</button>
          <button>Weekly</button>
          <button>Monthly</button>
        </div>
      </div>
    </>
  );
}
