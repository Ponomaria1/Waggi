// src/App.js
import './App.css';
import './style.scss'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage'
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import Cart from './pages/Cart/Cart';
import Favourites from './pages/Favourites/Favourites';
import EmptyUser from './components/EmptyUser/EmptyUser';
import { SearchProvider } from './context/SearchContext';
import CookieConsent from './components/CookieConsent/CookieConsent'; // Добавьте импорт

function App() {
    const [cart, setCart] = useLocalStorage('cart', []);
    const [favourites, setFavourites] = useLocalStorage('favourites', []);
    
    return (
        <SearchProvider>
            <div className="App">
                <Header cart={cart}/>
                <Routes>
                    <Route index element={<HomePage cart={cart} setCart={setCart} favourites={favourites} setFavourites={setFavourites}/>} />
                    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} favourites={favourites} setFavourites={setFavourites}/>} />
                    <Route path="/favourites" element={<Favourites cart={cart} setCart={setCart} favourites={favourites} setFavourites={setFavourites}/>} />
                    <Route path="/account" element={<EmptyUser />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer/>
                <CookieConsent /> 
            </div>
        </SearchProvider>
    );
}

export default App;