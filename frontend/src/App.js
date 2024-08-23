import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import  ShopCategory from './Pages/ShopCategory';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

const App = () => (
  <Router>
      <Navbar/>

    <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />

      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>

    <Footer/>
    
  </Router>
);

export default App;
