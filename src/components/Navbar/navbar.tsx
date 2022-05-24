import React from 'react';
import { TiTree } from 'react-icons/ti';
import Menu from './menu'
import './navbar.css';



function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="nav-content">
                    <div className="logo">
                        <TiTree />
                        <h1 className="title">Tree</h1>
                    </div>


                    <div >
                        <Menu></Menu>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
