import React from 'react';
import Left from './pages/left';
import Right from './pages/right';
import './App.css'
import usePriceStore from './store/price';
const App: React.FC = () => {
  const { price } = usePriceStore();
  return (
    <>
      <div className="container">
        <h1>Zustand Demo</h1>
        <div className="wraps">
          <Left />
          <Right />
        </div>
        <div className='price'>
          价格:<span>{price}</span>
        </div>
      </div>
    </>
  );
}

export default App;