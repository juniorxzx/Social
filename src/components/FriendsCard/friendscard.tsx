import React from 'react';
import './friendscard.css';
import foto1 from '../assets/foto1.jpg'
import foto2 from '../assets/foto2.jpg'
import foto3 from '../assets/foto3.jpg'
import foto4 from '../assets/foto4.jpg'

function FriendsCard() {
    return (
        <div className="friends-content">
            <div className='infos'>
                Alexandre Rodrigues Júnior <br />
                Mora em Itapeva - SP <br />
                19 anos
            </div>

            <div className='fotos-profile'>
                <div className='grid-item'><img src={foto1} alt="" /></div>
                <div className='grid-item'><img src={foto2} alt="" /></div>

            </div>
            <div className="fotos-profile">
                <div className='grid-item'><img src={foto3} alt="" /></div>
                <div className='grid-item'><img src={foto4} alt="" /></div>
            </div>
        </div>
    
    );
}
export default FriendsCard;