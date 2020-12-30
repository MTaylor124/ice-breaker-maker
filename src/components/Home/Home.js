import React, {useContext} from 'react';
import BreakIceButton from '../BreakIceButton/BreakIceButton.js';
import Backdrop from '@material-ui/core/Backdrop'
import { GlobalContext } from '../context/GlobalContext.js';
import './Home.css';
import IceBreakersSingle from './../IceBreakers/IceBreakersSingle'

export default function Home() {
    let {
        home
    } = useContext(GlobalContext)

    const backdropstyle = {
        zIndex: '57398457349875928',
        backgroundColor: 'rgba(255,255,255,0.7)'
    }
    return (
        <div className='home'>
            <div className='btn-break'>
                <BreakIceButton />
            </div>
            <Backdrop
                style={backdropstyle}
                open={home.showingPopup}
                transitionDuration={900}
            >
                <IceBreakersSingle />
            </Backdrop>
        </div>
    )
}
