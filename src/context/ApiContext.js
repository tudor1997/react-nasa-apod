import React, {useState, useEffect} from 'react'
import api from '../api/api'; 

const ApiContext = React.createContext();

function getFavoritesItemsFromLocalStorage() {
    return localStorage.getItem('nasaFavorites')?JSON.parse(localStorage.getItem('nasaFavorites')):[];
}

const ApiProvider = ({children}) => {

    const [nasa, setNasa] = useState([]);
    const [favorites, setFavorites] = useState(getFavoritesItemsFromLocalStorage());
    const [loading,setLoading] = useState(false);
    const [confirm, setConfirm] = useState(false);
    useEffect(() =>{
        setConfirm(false)
        setLoading(false);
        getNasaData(api);
       
    },[])

    const getNasaData = async (API) => {
        const result = await fetch(API);
        const data = await result.json();

        setLoading(true);
        setNasa(data);
        localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
    }
    const saveFavorites = (itemUrl) => {
        nasa.forEach((item) => {
            if(item.url.includes(itemUrl) && !favorites[itemUrl]){
                    const {date, explanation, url, title, copyright} = item
                    const favoriteItem = [...favorites].find(item => item.url === itemUrl)
                    if(favoriteItem){
                        return;
                    }else{
                        const newItem = {date, explanation, url, title, copyright, added:true};
                        const newFavorites = [...favorites, newItem];
                        setConfirm(true);
                        setFavorites(newFavorites);
                        setTimeout(() => {
                            setConfirm(false);
                        },3000)
                    }
            }
        })
    }
    const updateDomWithFavorites = () => {
        setNasa(favorites);
    }
    const removeItem = (url) => {
        setFavorites([...favorites].filter(item => item.url !== url));
    }
    return (
        <ApiContext.Provider value={{nasa,loading,getNasaData,api,favorites,saveFavorites,removeItem,updateDomWithFavorites,
        setConfirm,confirm}}>
            {children}
        </ApiContext.Provider>
    )
}

export {ApiProvider, ApiContext}
