import React from 'react';
import './App.css';
import Header from './layouts/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ItemDetail from './pages/ItemDetail';

function App() {
  return (
    <>
      <div className='flex justify-center'>
        <Header></Header>
      </div>
      
      <div className='bg-while-240 flex justify-center'>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='detail' element={ <ItemDetail />} />
          </Route>

          {/* <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
