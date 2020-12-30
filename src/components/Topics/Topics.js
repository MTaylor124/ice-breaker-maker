import React, {useContext} from 'react';
import TopicCategories from './TopicCategories.js';
import BreakIceButton from '../BreakIceButton/BreakIceButton';
import BottomNav from '../Nav/BottomNav';
import './Topics.css';
import Backdrop from '@material-ui/core/Backdrop'
import IceBreakersSingle from './../IceBreakers/IceBreakersSingle'
import { GlobalContext } from '../context/GlobalContext.js';

export default function Topics() {
    let {
        home
    } = useContext(GlobalContext)

    const backdropstyle = {
        zIndex: '57398457349875928',
        backgroundColor: 'rgba(255,255,255,0.3)'
    }
    return (
        <>
            <div className='Topics'>
                <h1>Discussion Topics</h1>
                <p>Choose some topics and break the ice!</p>
                <TopicCategories />
                <BreakIceButton />
                <Backdrop
                    style={backdropstyle}
                    open={home.showingPopup}
                    transitionDuration={900}
                >
                    <IceBreakersSingle />
                </Backdrop>
            </div>
            <BottomNav />
        </>
    )
}
