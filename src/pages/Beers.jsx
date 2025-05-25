import React from "react";

// betölti a sörök adatait a külön fájlból
import { beers } from "../data/beers";

// betölti a BeerCard komponenst, ami egy sör adatait jeleníti meg
import BeerCard from "../components/BeerCard";

const Beers = () => {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Söreink</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* a beers tömbön végigmegyünk és minden sörhöz létrehozunk egy BeerCard komponenst */}
        {beers.map((beer, index) => (
          <BeerCard key={index} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default Beers;
