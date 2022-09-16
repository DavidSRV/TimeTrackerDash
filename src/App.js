import CardMain from "./components/CardMain/CardMain";
import "../src/scss/_styleApp.scss";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <main>
        <CardMain />
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </main>
    </div>
  );
}

export default App;
