import React, {useContext} from 'react'
import { ApiContext } from '../context/ApiContext'


const Navbar = () => {

    const {getNasaData, api,updateDomWithFavorites} = useContext(ApiContext);

    return (
        <ul className="navbar">
            <li className="nav-elem" onClick={() => getNasaData(api)} >Load More</li>
            <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
            <li className="nav-elem" onClick={() => updateDomWithFavorites()}>Favorites</li>
        </ul>
    )
}

export default Navbar
