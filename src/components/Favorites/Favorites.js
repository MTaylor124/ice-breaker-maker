import React from 'react';
import BottomNav from '../Nav/BottomNav';
import './Favorites.css';
import FavortiesCard from './FavoritesCards';

export default function Favorites() {
    return (
        <>
        <div className='Favorites'>
            <h1>Favorites</h1>
            <p>Manage your favorites Ice Breakers here!</p>
            <FavortiesCard />
        </div>
        <BottomNav />
    </>
    );
}
