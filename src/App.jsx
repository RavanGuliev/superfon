import React from 'react';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router';
import Company from './components/Pages/Company';
import Login from './components/Pages/Login';
import Product from './components/Pages/Product';
import Navigator from './components/Pages/Navigator';
import Best from './components/Pages/Best';
import OursStores from './components/Pages/OursStores';
import Corpative from './components/Pages/Corpative';
import WatchPage from './components/Pages/WatchPage';
import WatchDetails from './components/Pages/WatchDetails';
import BestSeller from './components/Pages/BestSeller';
import Basket from './components/Pages/Basket';
import Layouts from './Layout/Layouts';
import Error from './components/Error/Error';

import { CartProvider } from './context/CartContext';
import Wishlist from './components/Pages/Wishlist';
import NewSeller from './components/Pages/Newseller';
import ScrollToTop from './components/utility/ScrollToTop';
import Compare from './components/Pages/Compare';

function App() {
  return (
   
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="/" element={<Main />} />
            <Route path="/company" element={<Company />} />
            <Route path="/log" element={<Login />} />
            <Route path="/new" element={<NewSeller />} />
            <Route path="/best" element={<BestSeller />} />
            <Route path="/store" element={<OursStores />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/core" element={<Corpative />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/wish" element={<Wishlist />} />
            <Route path="/best/:id" element={<Best />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/watch/:id" element={<WatchDetails />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <Navigator />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
