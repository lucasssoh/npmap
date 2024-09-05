import React from 'react';
import Table from './Table';
import './Area.css';

const Area = ({ area }) => {
  return (
    <div className='area'>
      <p>{area.name}</p>
      
      {area.tables && area.tables.length > 0 ? (
        area.tables.map((table) => (
          <div key={table.id}>
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
