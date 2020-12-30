import React from 'react';
import BreakIceButton from '../BreakIceButton/BreakIceButton';
import BottomNav from '../Nav/BottomNav';
import './ActivitiesAll.css';
import ActivityCategories from './ActivityCategories';

export default function Activities() {
    return (
        <>
            <div className='ActivitiesAll'>
                <h1>Activities</h1>
                <p>Choose some activities and break the ice!</p>
                <ActivityCategories />
                <BreakIceButton />
            </div>
            <BottomNav />
        </>
    );
}
