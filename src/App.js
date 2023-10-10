import { useEffect, useState } from "react";
import getData from "../src/services/sw-api";
import NavBar from "./components/NavBar";
import StarShipCard from "./components/StarShipCard";

function App() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    async function getShips() {
      try {
        const ships = await getData();
        setShips(ships);
      } catch (err) {
        console.error();
      }
    }
    getShips();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <StarShipCard data={ships} />
    </div>
  );
}

export default App;