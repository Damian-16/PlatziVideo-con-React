import React ,{useState,useEffect}from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';



const App = () => {
    //al llamar a useState y useEffect encapsulo todo en {} y es return quien llama lo que devolvera
    const [ videos,setVideos ]= useState([]);//primer elemento videos,la variable que se guarda en el estado y set videos es para actualizar,useState recibe parametros de como va estar inicializado el estado (opuede ser un string array,number etc)
    useEffect(()=>{//funcion anonima
        //useEffect trae la api atraer informacion para pasarsela a la funcion setVideos que se encarga de actualizar ala variable videos
        fetch("http://localhost:3000/initialState")// aca va la api que requerimos
        .then(response =>response.json())//cuando la api resuelva la peticion ,response se transformara en un objeto que pueda usar en mi aplicacion
        .then(data =>setVideos(data));//otro llamado que me va a  decir a mi informacion que yo ya tengo se la voy a  pasar a mi funcion llamada setVideos y se la voy a transmitir esa informacion en parametro(data)
    },[]);//use effect recibe otro parametro que se encarga de estar escuchando alguna propiedad q pueda cambiar y asi volver  a ejecutarse ,si no le pasamos esta propiedad va a  crear un loop infinito, le pasamos ese segundo valor como un array vacio
    console.log(videos)
    
    return(
    <div className="App">

     <Header/>
     <Search/>

     <Categories title="Mi lista">
         <Carousel>
             <CarouselItem/>
             <CarouselItem/>
             <CarouselItem/>
             <CarouselItem/>
         </Carousel>
     </Categories>
     <Categories title="Tendencias">
         <Carousel>
             <CarouselItem/>
             <CarouselItem/>
             <CarouselItem/>
             <CarouselItem/>
             <CarouselItem/>
             <CarouselItem/>
         </Carousel>
     </Categories>
     <Categories title="Originales de PlatziVideo">
         <Carousel>
             <CarouselItem/>
             <CarouselItem/>
            
         </Carousel>
     </Categories>
     <Footer/>

    </div>
      )
}

export default App;