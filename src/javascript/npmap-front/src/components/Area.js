import React from 'react';
import Table from './Table';

const Area = ({ area }) => {
  return (
    <div>
      <h2>{area.name}</h2>
      <h3>Tables:</h3>
      {area.tables && area.tables.length > 0 ? (
        area.tables.map((table) => (
          <div key={table.id}>
            <h4>{table.number}</h4>
            <Table table={table} /> {/* Passe la table au composant Table */}
          </div>
        ))
      ) : (
        <p>Aucune table disponible.</p>
      )}
    </div>
  );
};

export default Area;
