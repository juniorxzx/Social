import React from 'react';
import Post from '../Post/post'
import FriendsCard from '../FriendsCard/friendscard';
import Post2 from '../Post/post2'
import FriendsCard2 from '../FriendsCard/friendscard2';
import './card.css';

function Card() {
    return (
        <div className="tudo">
            <div className="content">
                <Post />
                <div className='friends-content'>

                    <FriendsCard />
                </div>

            </div >

            <div className="content">
                <Post2 />
                <div className='friends-content'>

                    <FriendsCard2 />
                </div>

            </div >


        </div>
    );
}

export default Card;
