import React, {useContext} from 'react'
import { ApiContext } from '../context/ApiContext'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const {getNasaData, api,updateDomWithFavorites} = useContext(ApiContext);

    return (
        <ul className="navbar">
            <li className="nav-elem" onClick={() => getNasaData(api)} ><Link className="nav-link" to="/">Load More</Link></li>
            <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
            <li className="nav-elem" onClick={() => updateDomWithFavorites()}><Link className="nav-link" to="/favorites">Favorites</Link></li>
        </ul>
    )
}

export default Navbar
