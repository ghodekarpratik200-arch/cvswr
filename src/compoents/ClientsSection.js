import React from 'react';
import '../them/ClientsSection.css';

const clients = [
  'VATASHI',
  'Paranjape Schemes Construction Ltd.',
  'Mangalam Landmarks',
  'Kwality World Developers',
  'Exer Energy',
  'VIVEDAA ORGANIX',
  'BOOKSTATION',

];

function ClientsSection() {
  return (
 
    <section className="clients">
    <div className="container"> 
      <h2>Our Clients</h2>
      <ul className="clients-list">
        {clients.map(name => <li key={name}>{name}</li>)}
      </ul>
      </div>
    </section>
    
  );
}

export default ClientsSection;
