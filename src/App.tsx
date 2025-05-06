import React from 'react';
import './App.css';
import Header from './layouts/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />

      <div className='bg-while-240'>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
