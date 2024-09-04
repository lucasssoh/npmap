import React from 'react';

const Equipment = ({ type, hostname, ip_address }) => {
  return (
    <div>
      <h3>{type}</h3>
      <p>Hostname: {hostname}</p>
      <p>IP Address: {ip_address}</p>
    </div>
  );
};

export default Equipment;
