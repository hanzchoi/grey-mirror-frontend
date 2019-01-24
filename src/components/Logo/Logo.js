import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import mirror from './grey-mirror-logo.png'
const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2"
        options={{ max : 55 },{reverse: true }}
        style={{ height: 150, width: 150 }} >

        <div className="Tilt-inner pa3">
          <img style={{}} src={mirror} alt='logo'/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
