import React from 'react';
import '../assets/styles/components/NotFound.scss';
import backgroundImagen from '../assets/static/homero.gif';
import platziVideoLogo from '../assets/static/logo-platzi-video-BW2.png';


const NotFound =()=> (
    <React.Fragment>
<div >
  <header className="header">

<img className="header__img" src={platziVideoLogo}alt="logo-platzi-video"/>
<section>
<div className="text animated hinge"><h2>Error 404</h2></div> </section>

</header>

<div className="text2 animated bounce">No se pudo encontrar la página...</div>
</div>

</React.Fragment>
);

export default NotFound;