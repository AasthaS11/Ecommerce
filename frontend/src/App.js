import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { ShopCategory } from './Pages/ShopCategory';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';

const App = () => (
  <Router>
      <Navbar/>
      <Footer/>

    <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='/men' element={<ShopCategory category="mens" />} />
      <Route path='/women' element={<ShopCategory category="womens" />} />
      <Route path='/kids' element={<ShopCategory category="kids" />} />

      <Route path='/products' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
  </Router>
);

export default App;
