import React, {useContext} from 'react'
import CardsList from './CardsList'
import Loading from './Loading';
import { ApiContext } from '../context/ApiContext';
import Confirm from  './Confirm';
const Home = () => {

    const {loading,confirm} = useContext(ApiContext);
    return (
        <section className="container">
       
      {loading ? <CardsList/> : <Loading/>}
      {confirm && <Confirm/>}
    </section>
    )
}

export default Home
