import React ,{useState,useEffect}from 'react';
import {connect} from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';


import '../assets/styles/App.scss';





const Home = ({myList,trends,originals}) => {

    
   return (
    <>

   
     <Search/>

          { myList.length >  0 &&    
                <Categories title="Mi lista">
                    <Carousel>
                       {myList.map(item=> <CarouselItem
                        key={item.id}
                        {...item}
                        isList/>)}
                    </Carousel>
                </Categories>
          }   
     <Categories title="Tendencias">
         <Carousel>
             {trends.map(item =>  //aca hacemos el llamado al video.trends y utilizamos map que lo que hace es traer uno por uno los valores y trae un item, ese item el que va a iterar
             <CarouselItem key={item.id} {...item}/>
             //key lo identifica y luego lo pasamos todos los elementos que contenga item, desestructurandolo {...item}
             )}
         </Carousel>
     </Categories>
     <Categories title="Originales de PlatziVideo">
         <Carousel>
             {originals.map(item =>
              <CarouselItem key={item.id}{...item}/>
             )}
             
            
            
         </Carousel>
     </Categories>
    
     
    </>)
       /* se borro header y footer y volvemos un fragment el div de classnName "Home", que es el mismo de App */
}

const mapStateToProps = state =>{
    return {
        myList: state.myList,
        trends: state.trends,
        originals:state.originals,
    };
}




// export default Home;
// export default connect(props,actions)(Home);
export default connect(mapStateToProps,null)(Home);