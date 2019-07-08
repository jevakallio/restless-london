import React from 'react';
import Speaker from './speaker';
import imgJani from '../images/organizers/jani.png';
import imgBrooke from '../images/organizers/brooke.png';
import imgRobert from '../images/organizers/robert.jpg';

export default () => (
  <div>
    <Speaker name="Jani Eväkallio" twitter="@jevakallio" image={imgJani} />
    <Speaker name="Brooke Paske" twitter="@brookepaske" image={imgBrooke} />
    <Speaker name="Robert Haritonov" twitter="@operatino" image={imgRobert} />
  </div>
);