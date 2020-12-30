import React, { useContext, useEffect, useState } from 'react'
import './IceBreakersSingle.css'

import firebase from 'firebase/app'
import 'firebase/firestore'
import { GlobalContext } from '../context/GlobalContext';


export default function IceBreakersSingle() {

  const [icebreaker, setIceBreaker] = useState("Press the Button!")
  
  useEffect(() => {
    if (icebreakers.icebreakerList[icebreakers.indexOfRandomIcebreaker]) {
      const getIceBreaker = icebreakers.icebreakerList[icebreakers.indexOfRandomIcebreaker].body
      setIceBreaker(getIceBreaker)
    }
  })

  let {
  icebreakers
  } = useContext(GlobalContext)
  
    return (
      <div className="icebreakersingle-containter">
        <div className="icebreaker-card">
          <h2 className="card-title">Question</h2>
            <hr className="card-hr"/>
          <p className="icebreaker-text">{ icebreaker }</p>
        </div>
        <button
          className="BreakIceBtn-2"
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
                console.log('random icebreaker', icebreakers.icebreakerList[icebreakers.indexOfRandomIcebreaker])
            })
            .catch(err => {
                console.error(err.code)
            })
        }}
        >
          BREAK THE ICE
        </button>
      </div>
    )
}

//next step is making the button display an icebreaker