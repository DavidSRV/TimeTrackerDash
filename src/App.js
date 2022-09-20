import CardMain from "./components/CardMain/CardMain";
import "../src/scss/_styleApp.scss";
import Cards from "./components/Cards/Cards";
import { useEffect, useState } from "react";
import objData from '../src/utils/data.json'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(objData);
  }, []);

  return (
    <div className="App">
      <main>
        <CardMain />

        {data.map((cart)=>(<Cards
        key={cart.title}
        title={cart.title}
        timeframes={cart.timeframes}
        />))}

      </main>
    </div>
  );
}

export default App;
