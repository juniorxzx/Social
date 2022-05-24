import React from 'react';
import './friendscard.css';
import foto5 from '../assets/foto5.jpg'
import foto8 from '../assets/foto8.jpg'
import foto9 from '../assets/foto9.jpg'
import foto10 from '../assets/foto10.jpg'

function FriendsCard2() {
    return (
        <div className="friends-content">
            <div className='infos'>
                Natasha Almeida <br />
                Mora em Curitiba - PR <br />
                26 anos
            </div>

            <div className='fotos-profile'>
                <div className='grid-item'><img src={foto5} alt="" /></div>
                <div className='grid-item'><img src={foto8} alt="" /></div>

            </div>
            <div className="fotos-profile">
                <div className='grid-item'><img src={foto9} alt="" /></div>
                <div className='grid-item'><img src={foto10} alt="" /></div>
            </div>
        </div>
    
    );
}
export default FriendsCard2;