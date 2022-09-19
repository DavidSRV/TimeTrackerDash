import React from "react";
import { useChangeDataContext } from "../../context/Context";
import { jeremy } from "../../utils/utils";
import "./_styleCard.scss";

export default function CardMain({activity}) {

  return (

    <>
      <div className="contenedor_1">
        <div className="contenedor_2">
          <img src={jeremy} alt="imgJeremy" />
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
        <div className="buttons">
          <button onClick={null}>Daily</button>
          <button >Weekly</button>
          <button >Monthly</button>
        </div>
      </div>
    </>
  );
}
