import React ,{useState,useEffect}from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';


const API = 'http://localhost:3000/initialState';


const Home = () => {
    //al llamar a useState y useEffect encapsulo todo en {} y es return quien llama lo que devolvera
   
   const initialState = useInitialState(API);
 // asi fue primero antes de hooks const [ videos,setVideos ] = useState({mylist:[] , trends:[] , originals:[]});primer elemento videos,la variable que se guarda en el estado y set videos es para actualizar,useState recibe parametros de como va estar inicializado el estado (opuede ser un string array,number etcetera)
    //luego a useState se les paso los valores mylist ylos otros Eso es porque JavaScript espera encontrar esos elementos, pero al no encontrarlos truena el código
   
   /// esto sale como error en la consola porque era la forma que use antes del hook
    useEffect(()=>{//funcion anonima
        //useEffect trae la api atraer informacion para pasarsela a la funcion setVideos que se encarga de actualizar ala variable videos
        fetch("http://localhost:3000/initialState")// aca va la api que requerimos
        .then(response =>response.json())//cuando la api resuelva la peticion ,response se transformara en un objeto que pueda usar en mi aplicacion
        .then(data =>setVideos(data));//otro llamado que me va a  decir a mi informacion que yo ya tengo se la voy a  pasar a mi funcion llamada setVideos y se la voy a transmitir esa informacion en parametro(data)
    },[]);//use effect recibe otro parametro que se encarga de estar escuchando alguna propiedad q pueda cambiar y asi volver  a ejecutarse ,si no le pasamos esta propiedad va a  crear un loop infinito, le pasamos ese segundo valor como un array vacio
    // console.log(videos)
    
    return initialState.length === 0? <h1>Loading ...</h1>: (
    <div className="Home">

     <Header/>
     <Search/>

          { initialState.mylist.length >  0 &&    
                <Categories title="Mi lista">
                    <Carousel>
                        <CarouselItem/>
                    </Carousel>
                </Categories>
          }   
     <Categories title="Tendencias">
         <Carousel>
             {initialState.trends.map(item =>  //aca hacemos el llamado al video.trends y utilizamos map que lo que hace es traer uno por uno los valores y trae un item, ese item el que va a iterar
             <CarouselItem key={item.id} {...item}/>
             //key lo identifica y luego lo pasamos todos los elementos que contenga item, desestructurandolo {...item}
             )}
         </Carousel>
     </Categories>
     <Categories title="Originales de PlatziVideo">
         <Carousel>
             {initialState.originals.map(item =>
              <CarouselItem key={item.id}{...item}/>
             )}
             
            
            
         </Carousel>
     </Categories>
     <Footer/>

    </div>
      )
}

export default Home;