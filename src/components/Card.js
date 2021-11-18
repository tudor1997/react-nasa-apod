import React, {useContext, useEffect} from 'react'
import { ApiContext } from '../context/ApiContext'
const Card = (props, id) => {

    const {saveFavorites,removeItem} =  useContext(ApiContext);

  
    const {date, explanation, url, title, copyright, added } = props.value
 
    return (
        <article className="card">
            <h2>{title}</h2>
            <h4 className="author">{copyright && copyright}</h4>
            <h5 className="date">Date : {date}</h5>
            <div className="card-container">
                <img src={url} alt={title} />
                    <div className="info">
                        <p>{explanation}</p>
                    </div>
            </div>

        {added ?  <div>
        <button className="favorites-btn" onClick={() =>{
              removeItem(url);
             }}>Remove Item</button>
        </div> :  <button  onClick={() => {
            saveFavorites(url);
            }} className="favorites-btn" >Add to Favorites</button>    }
      
        </article>
        
    )
}

export default Card
