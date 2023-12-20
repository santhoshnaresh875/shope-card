import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';


const Nav = () => {
    return (
        <>
            <div className='header'>
                <div className='Logo'>
                    <h2>Apple Store</h2>
                </div>
                <div className='nav'>
                    <ul>
                        <li> 
                            <Link to="/" className='Link'>Home</Link>
                        </li>
                        <li>
                            <Link to="/" className='Link'>Products</Link>
                        </li>
                        <li>
                            <Link to="/cart" className='Link'>Cart</Link>
                        </li>
                        <li>
                            <Link to="/" className='Link'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav