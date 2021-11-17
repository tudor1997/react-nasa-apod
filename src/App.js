import React, {useContext} from 'react';
import { ApiContext } from './context/ApiContext';
import CardsList from './components/CardsList'
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Confirm from  './components/Confirm';
function App() {

  const {loading,confirm} = useContext(ApiContext);
  return (
    <section className="container">
        <Navbar/>
      {loading ? <CardsList/> : <Loading/>}
      {confirm && <Confirm/>}
    </section>
  );
}

export default App;
