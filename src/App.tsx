import React from 'react';
import './App.css';
import Header from './layouts/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ItemDetail from './pages/ItemDetail';
import Footer from './layouts/Footer';
import SearchItem from './pages/SearchItem';

function App() {
  return (
    <div className='bg-while-240'>
      <div className='flex justify-center bg-white'>
        <Header />
      </div>
      
      <div className='flex justify-center'>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='products' element={ <ItemDetail />} />

            <Route path='searchengine' element={ <SearchItem /> } />
          </Route>

          {/* <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route> */}
        </Routes>
      </div>

      <div className='flex justify-center'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
