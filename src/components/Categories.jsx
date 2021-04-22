import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories=({children,title}) =>(

    <div className="categories">
         <h3 class="categories__title">{title}</h3>
          {children}
          {/*un componente hijo que viene directamente de la funcion para hacer render de otro componente */}
    </div>

)

export default Categories;