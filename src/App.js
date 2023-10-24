import "./App.css";
import item from "./data";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
function App() {
  const cardelements = item.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cardelements}
      </section>
      
    </div>
  );
}

export default App;
