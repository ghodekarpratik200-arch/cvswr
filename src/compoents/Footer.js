import React from 'react';
import '../them/Footer.css';

function Footer() {
  return (
    <footer className="footer">
    <div className='container'>
      <div className="footer-section">
        <h4>Head Office – Pune</h4>
        <p>
          Amalanand Bungalow, Plot No. 14 Survey No. 3023/14 Bhambhurda, Mangalwadi Society, S B Road, Haveli, Pune, Maharashtra 411016<br />
          Email: pune@3dotsdesign.in, contact@3dotsdesign.in<br />
          Phone: +91 9511696411, +91 20 2566 5266
        </p>
      </div>
      <div className="footer-section">
        <h4>Branch Office – Hyderabad</h4>
        <p>
          Flat No. 202, Hyderguda, Old MLA Quarters Rd, Opp. Fabric Care Dry Cleaners, Hyderabad, Telangana 500029<br />
          Email: hyderabad@3dotsdesign.in, contact@3dotsdesign.in<br />
          Phone: +91 9511696411, +91 20 2566 5266
        </p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
