import React, { useContext } from 'react';
import './BreakIceButton.css';
// import Button from '@material-ui/core/Button';

import firebase from 'firebase/app'
import 'firebase/firestore'
import { GlobalContext } from '../context/GlobalContext';

function BreakIceButton(props) {

    let {
        icebreakers,
        home
    } = useContext(GlobalContext)

    return(
        <>
            {/* <Button>Break The Ice</Button> */}
            <br></br>
            <button 
                onClick={() => {
                    icebreakers.clearList()
                    firebase.firestore().collection('Icebreakers')
                    .get()
                    .then(snapshot => {
                        snapshot.forEach(doc => {
                            let newIceBreaker = {
                                title: doc.data().title,
                                body: doc.data().body
                            }
                            icebreakers.addToIceBreakers(newIceBreaker)
                        })
                    })
                    .then(() => {
                        icebreakers.setIndexOfRandomIcebreaker(Math.floor((Math.random() * icebreakers.icebreakerList.length)))
                    })
                    .then(() => {
                        home.showPopup()
                    })
                    .catch(err => {
                        console.error(err.code)
                    })
                }}
                className='BreakIceBtn'>BREAK THE ICE</button>
        </>
    );
}
export default BreakIceButton;