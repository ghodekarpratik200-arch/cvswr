import React from 'react';
import '../them/ServicesSection.css';

const services = [
  {
    title: 'Print Media Advertising',
    description: 'Our creativity has the power to turn your brand into pure gold...',
    link: '/services/print-media'
  },
  {
    title: 'Digital Marketing',
    description: 'Rather than depending on one single platform…get the optimum results.',
    link: '/services/digital-marketing'
  },
  {
    title: 'Brand Strategy & Planning',
    description: 'Steady, cautious yet fast... we run that extra mile…',
    link: '/services/brand-strategy'
  },
  {
    title: 'Events & Exhibitions',
    description: 'Events & Exhibitions that we organise have a magnetic pull...',
    link: '/services/events'
  },
  {
    title: 'Media Planning',
    description: 'Meticulous media planning delivers success consistently!',
    link: '/services/media-planning'
  },
  {
    title: 'AV Production',
    description: 'Our AV Production team gets things done the creative way...',
    link: '/services/av-production'
  }
];

function ServicesSection() {
  return (
    <div className="container"> 
    <section className="services">
      {services.map(s => (
        <div key={s.title} className="service-card">
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <a href={s.link}>Explore</a>
        </div>
      ))}
    </section>
        </div>
  );
}

export default ServicesSection;
