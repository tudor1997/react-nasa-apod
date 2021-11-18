import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext'
import Card from './Card';

const Favorites = () => {

    const {favorites} = useContext(ApiContext);
    if(favorites.length < 1) {
        return (
                <div className="container-empty">
                    <h1>You don't have any favorite article.</h1>
                            <Link className="add-items" to="/">Add new favorites</Link>
                </div>
        )
    }
    
    return (
        <div  className="container-list">
            {favorites && favorites.map((item, index) => {
                return <Card key={index}  value={{...item}}></Card>
            })}
        </div>
    )
}

export default Favorites
