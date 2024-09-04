import React from 'react';
import Equipment from './Equipment';

const Table = ({ table }) => {
  return (
    <div>
      {table.equipments && table.equipments.length > 0 ? (
        <ul>
          {table.equipments.map((item) => (
            <li key={item.id}>
              <Equipment {...item} /> {/* Utilise le composant Equipment */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun équipement disponible.</p>
      )}
    </div>
  );
};

export default Table;
