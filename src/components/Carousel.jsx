import React from 'react';
import '../assets/styles/components/Carousel.scss'

const Carousel = ({children}) => (
    <section className="carousel">
    <div className="carousel__container">
        {children}
        {/* se le pasa un hijo porque le voy a pasar cada uno de estos item en este caso cada elemento del carrusel */}
        </div>
        </section>
)
export default Carousel ;