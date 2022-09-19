import CardMain from "./components/CardMain/CardMain";
import "../src/scss/_styleApp.scss";
import Cards from "./components/Cards/Cards";
import Context from "./context/Context";

function App() {
  return (
    <Context>
      <div className="App">
        <main>
          <CardMain />
          <Cards activity="Work" />
          <Cards activity="Play" />
          <Cards activity="Study" />
          <Cards activity="Exercise" />
          <Cards activity="Social" />
          <Cards activity="SelfCare" />
        </main>
      </div>
    </Context>
  );
}

export default App;
