import React from 'react';
import photo from '../assets/photo.png'
import jr from '../assets/jr.png'
import { FaKissWinkHeart, FaBomb, FaGrinSquintTears, FaMehRollingEyes } from 'react-icons/fa';

import './post.css';

function Post() {
    return (

        <div className="post-content">
            <div className="user">
                <img src={jr} alt="" />
                <p>Alexandre</p>
            </div>
            <div className="img-content">
                <img src={photo} alt="" />
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

export default Post;
