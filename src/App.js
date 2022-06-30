import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavi from './components/mainNavi/mainNavi'
import PriceMonitor from './components/priceMonitor/priceMonitor'
import PriceContext, { useStore } from './store';


function App() {
  const  value = useStore();
  return (
   <React.Fragment>
      <PriceContext.Provider value={value}>
        <div className='container mt-4'>
          <MainNavi/>          
          <PriceMonitor/>
        </div>
      </PriceContext.Provider>    
   </React.Fragment>
  );
}

export default App;
