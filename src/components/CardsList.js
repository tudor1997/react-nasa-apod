import React,{useContext}  from 'react'
import Card from './Card'
import { ApiContext } from '../context/ApiContext';

const CardsList = () => {
    const {nasa} = useContext(ApiContext);


 
    return (
        <div className="container-list">
         
        {nasa && nasa.map((item,index) => {
        
          return  <Card key={index} value={{...item}}></Card>
  
        })}

    
        </div>
    )
}

export default CardsList
