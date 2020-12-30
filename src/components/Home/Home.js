import React, {useContext} from 'react';
import BreakIceButton from '../BreakIceButton/BreakIceButton.js';
import Backdrop from '@material-ui/core/Backdrop'
import { GlobalContext } from '../context/GlobalContext.js';

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
            <BreakIceButton />
            <Backdrop
                style={backdropstyle}
                open={home.showingPopup}
                transitionDuration={1200}
            >
                <IceBreakersSingle />
            </Backdrop>
        </div>
    )
}
