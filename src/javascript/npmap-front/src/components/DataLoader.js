import React, { useEffect, useState } from 'react';

const DataLoader = ({ onAreaLoad }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch('/data/areas.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        onAreaLoad(data.zones); // Passe les zones au composant parent
      } catch (error) {
        console.error('Error loading areas:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAreas(); // Charge initialement les zones

    const intervalId = setInterval(() => {
      fetchAreas(); // Récupérer les zones à intervalles réguliers
    }, 5000);

    return () => clearInterval(intervalId); // Nettoie l'intervalle lors de la suppression du composant
  }, [onAreaLoad]); // Se déclenche lorsque `onAreaLoad` change

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading areas: {error}</div>;
  }

  return null; // Aucune interface à rendre ici, le parent gère l'affichage
};

export default DataLoader;
