import React from 'react';
import Header from './Header';
import Footer from './Footer';



const Layout = ({children}) => (
    <div className="App">
     <Header/>
     {children}
     <Footer/>
    </div>
)

export default Layout;

//esto sirve para mantener la continuidad de un componente en navegacion, en este caso Header y Footer