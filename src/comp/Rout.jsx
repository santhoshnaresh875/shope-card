import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';
import Cart from './Cart';


const Rout = ({ addtocart, cardItem, setcardItem }) => {
    return (
        <Routes>
            <Route path='/' element={<Product addtocart={addtocart} />} />
            <Route path='/cart' element={<Cart addtocart={addtocart} cardItem={cardItem} setcardItem={setcardItem} />} />
        </Routes>
    );
};

export default Rout;