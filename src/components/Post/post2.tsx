import React from 'react';
import foto7 from '../assets/foto7.jpg'
import foto6 from '../assets/foto6.jpg'
import { FaKissWinkHeart, FaBomb, FaGrinSquintTears, FaMehRollingEyes } from 'react-icons/fa';

import './post.css';

function Post2() {
    return (

        <div className="post-content">
            <div className="user">
                <img src={foto6} alt="" />
                <p>Natasha</p>
            </div>
            <div className="img-content">
                <img src={foto7} alt="" />
            </div>
            <div className="reactions">
                <button>
                    <FaKissWinkHeart />
                </button>
                <button>
                    <FaGrinSquintTears />
                </button>
                <button>
                    <FaMehRollingEyes />
                </button>
                <button>
                    <FaBomb />
                </button>
            </div>
            
        </div>
    );
}

export default Post2;
