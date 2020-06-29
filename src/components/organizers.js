import React from 'react';
import Speaker from './speaker';
import imgPhil from '../images/organizers/phil.png';
import imgAmy from '../images/organizers/amy.jpg';
import imgBrooke from '../images/organizers/brooke.png';

export default () => (
  <div>
    <Speaker name="Phil Pluckthun" image={imgPhil} />
    <Speaker name="Amy Boyd" image={imgAmy} />
    <Speaker name="Brooke Paske" image={imgBrooke} />
  </div>
);
