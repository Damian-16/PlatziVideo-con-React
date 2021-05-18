import React from 'react';
import {connect} from  'react-redux';
import PropTypes from 'prop-types';
import {setFavorite,deleteFavorite} from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from "../assets/static/plus-icon.png";
import removeIcon from '../assets/static/remove-icon.png';



const CarouselItem=(props)=>{
  const {id,cover,title,year,contentRating,duration,isList} = props; //ootra manera de pasar propiedades como parametros
 const handleSetFavorite = () =>{
   props.setFavorite(
     {
      id, cover,title,year,contentRating,duration //asi vamos a poder mostrar dentro de myList estos elementos
     }
   )
 }
 
 const handleDeleteFavorite=(itemId)=>{
   props.deleteFavorite(itemId)
 }
  return (
        <div className="carousel-item">
                <img className="carousel-item__img" src={cover} alt={title}  />
                <div className="carousel-item__details">
                  <div>
                    <img className="carousel-item__details--img"
                     src={playIcon} alt="Play Icon"/> 


                      {isList ? 
                            <img className="carousel-item__details--img"
                            src={removeIcon} alt="Remove-icon" onClick={()=> handleDeleteFavorite(id)}// se manda en forma de funcion con el parametro id para que pueda identificarse y proceder ala action
                            />:
                            <img className="carousel-item__details--img"
                            src={plusIcon} alt="Plus Icon" onClick={handleSetFavorite}/> 
                          
                      }
                 
                  </div>
                  <p className="carousel-item__details--title">{title}</p>
                  <p className="carousel-item__details--subtitle">
                          {`${year} ${contentRating} ${duration}`}</p>
                </div>
              </div>
          )}


          CarouselItem.propTypes = {
            cover: PropTypes.string,
            title:PropTypes.string,
            year:PropTypes.number,
            contentRating:PropTypes.string,
            duration:PropTypes.number,
          }



          const mapDispatchToProps ={
            setFavorite,
            deleteFavorite,
          }
          //aca declaramos que tipo de dato nos va a llegar por cada elemento que nos regresa el API
          //no mapeamos estados por eso se devuelve nulo y luego mapDispatch lo que hace
          export default connect(null,mapDispatchToProps)(CarouselItem)
          // esto se cambia por el parametro cover que regresara dela api src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
          //2019 16+ 114 minutos este parrafo se transforma en las variables year etc..