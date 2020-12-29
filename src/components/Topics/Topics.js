import React from 'react';
import TopicCategories from './TopicCategories.js';
import BreakIceButton from '../BreakIceButton/BreakIceButton';
import BottomNav from '../Nav/BottomNav';
import './Topics.css';

export default function Topics() {
    return (
        <>
            <div className='Topics'>
                <h1>Discussion Topics</h1>
                <p>Choose some topics and break the ice!</p>
                <TopicCategories />
                <BreakIceButton />
            </div>
            <BottomNav />
        </>
    )
}
