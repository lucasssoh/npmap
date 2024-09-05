import React from 'react';
import Equipment from './Equipment';
import './Table.css';

const Table = ({ table }) => {
  return (
    <div>
      {table.equipments && table.equipments.length > 0 ? (
        <div className='table'>
          <p className='table-number'>{table.number}</p>
          
          <div className='table-content'>
          
            {table.equipments.map((item) => (
              <div className='item' key={item.id}>
                <Equipment {...item} /> {/* Utilise le composant Equipment */}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Aucun équipement disponible.</p>
      )}
    </div>
  );
};

export default Table;
