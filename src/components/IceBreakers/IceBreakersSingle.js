import React from 'react'
import './IceBreakersSingle.css'


export default function IceBreakersSingle() {
    return (
      <div className="icebreakersingle-containter">
        <div className="icebreaker-card">
          <h2 className="card-title">Question</h2>
          <hr className="card-hr"/>
           <p className="icebreaker-text">What is your favorite movie?</p>
        </div>
        <button className="BreakIceBtn-2">BREAK THE ICE</button>
      </div>
    )
}

//next step is making the button display an icebreaker