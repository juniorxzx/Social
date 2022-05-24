import { useState, useEffect } from 'react'
import Link from 'react-router-dom'
import jr from '../assets/jr.png'

function Menu() {


    return (
        <div className="perfil">
            <div >
                <div className='menuIcon'></div>
            </div>
            <div className='menuPerfil'>
                <nav className='dp-menu'>
                    <ul>
                        <li> <a href="" className='img-menu'><img src={jr} alt="" /></a>
                            <ul>
                                <li><a href="/">Perfil</a></li>
                                <li><a href="/">Postar</a></li>
                                <li><a href="/">Tema</a></li>
                                <li><a href="/">Configurações</a></li>

                                <hr />
                                <li><a href="/">Sair</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu