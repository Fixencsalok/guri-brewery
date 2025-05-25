// src/components/BeerCard.jsx
//Ez a komponens egy beer objektumot kap, aminek megjeleníti az adatait

import React from "react";

const BeerCard = ({ beer }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-1">{beer.name}</h2>
      <p className="text-sm italic text-gray-600">{beer.style}</p>
      <p className="mt-2"><strong>Alkoholfok:</strong> {beer.alcohol}</p>
      <p><strong>Komló:</strong> {beer.hops}</p>
      <p className="mt-2">{beer.description}</p>
      {beer.awards && (
        <p className="mt-2 text-sm text-yellow-600">
          <strong>🏅 Díjak:</strong> {beer.awards}
        </p>
      )}
    </div>
  );
};

export default BeerCard;
