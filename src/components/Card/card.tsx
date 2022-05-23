import React from 'react';
import NewPost from '../NewPost/newpost';
import Post from '../Post/post'
import FriendsCard from '../FriendsCard/friendscard';
import './card.css';

function Card() {
    return (
        <div className="tudo">
            <div className='new-post'>
                <NewPost />
            </div>
            <div className="content">
                <Post />
                <div className='friends-content'>

                    <FriendsCard />
                </div>

            </div >


        </div>
    );
}

export default Card;
