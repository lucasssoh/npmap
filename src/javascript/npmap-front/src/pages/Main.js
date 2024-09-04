import React, { useState } from 'react';
import DataLoader from '../components/DataLoader';
import Area from '../components/Area';
import './Main.css';

const Main = () => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');

  const handleAreaLoad = (loadedAreas) => {
    // Compare les anciennes et nouvelles zones
    setAreas(prevAreas => {
      const updatedAreas = [...loadedAreas];
      const currentAreaNames = new Set(prevAreas.map(area => area.name));

      // Met à jour les zones en ajoutant les nouvelles et en supprimant celles qui n'existent plus
      const areasToKeep = updatedAreas.filter(area => currentAreaNames.has(area.name));

      return areasToKeep.length > 0 ? areasToKeep : updatedAreas; // Garde les zones existantes ou utilise les nouvelles
    });

    // Vérifie si la zone sélectionnée existe encore
    if (loadedAreas.length > 0) {
      if (!loadedAreas.find(area => area.name === selectedArea)) {
        setSelectedArea(loadedAreas[0].name); // Sélectionne la première zone par défaut si la zone actuelle n'existe plus
      }
    } else {
      setSelectedArea(''); // Si aucune zone n'existe, réinitialise la sélection
    }
  };

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value); // Met à jour la zone sélectionnée
  };

  const filteredArea = areas.find(area => area.name === selectedArea);

  return (
    <div className="Main">
      <DataLoader onAreaLoad={handleAreaLoad} />
      <label htmlFor="area-select">Choose an area:</label>
      <select id="area-select" value={selectedArea} onChange={handleAreaChange}>
        {areas.map((area) => (
          <option key={area.name} value={area.name}>
            {area.name}
          </option>
        ))}
      </select>

      {/* Affiche la zone sélectionnée */}
      {filteredArea ? <Area area={filteredArea} /> : <p>Aucune zone sélectionnée ou zone inexistante.</p>}
    </div>
  );
};

export default Main;
