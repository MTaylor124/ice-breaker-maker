import React, { useContext, useEffect, useState } from 'react'
import './IceBreakersSingle.css'

import firebase from 'firebase/app'
import 'firebase/firestore'
import { GlobalContext } from '../context/GlobalContext';
import Button from '@material-ui/core/Button'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import { ToggleButton } from '@material-ui/lab'

export default function IceBreakersSingle() {

  const [icebreaker, setIceBreaker] = useState("Press the Button!")
  
  let {
  icebreakers,
  home,
  auth,
//   checkContext,
  user
  } = useContext(GlobalContext)

  useEffect(() => {
    if (icebreakers.icebreakerList[icebreakers.indexOfRandomIcebreaker]) {
      const getIceBreaker = icebreakers.icebreakerList[icebreakers.indexOfRandomIcebreaker].body
      setIceBreaker(getIceBreaker)
    }
  }, [icebreakers.icebreakerList, icebreakers.indexOfRandomIcebreaker])
    //  if app bugs out remove this ^ 
  
    let favoriteImage, titleCheck
    const heartButtonStyle = {
        fontSize: '5vh'
    }
    if (icebreakers.loadingList) {
        titleCheck = ''
    } else if (icebreakers.loadingList === false) {
        titleCheck = icebreakers.icebreakerList[icebreakers.indexOfRandomIcebreaker].title
    } else {
        titleCheck = ''
    }
    if (auth.signedIn) {
        favoriteImage = (
            <button className="fav-button-empty"
            onClick={() => {
                let today = new Date()
                let day = today.getDate().toString()
                let month = (today.getMonth() + 1).toString()
                let year = today.getFullYear().toString()
                let todaysDate = month.concat('-',day,'-',year)

                // checkContext()

                firebase.firestore().collection('users').doc(user.userRef).collection('favorites')
                .add({
                    favoriteID: icebreakers.icebreakerList[icebreakers.indexOfRandomIcebreaker].id,
                    favoritedOn: todaysDate
                })
                .then(doc => {
                    console.log('check for sub collection')
                })
                .catch(err => {
                    console.eror(err.code)
                })

                // firebase.firestore().collection('users')
                // .where('userID', '==', user.userID)
                // .limit(1)
                // .get()
                // .then(snapshot => {
                //     snapshot.forEach(doc => {
                //         console.log('data?@', doc.id)
                //     })
                //     console.log('???', snapshot)
                // })
                // .limit(1)
                // .get()
                // .then(doc => {
                //     console.log('data?', doc.data())
                // })
                //     firebase.firestore().collection('users')
                //     .doc(doc.id)
                //     .collection('favorites')
                //     .add({
                //         favoritedOn: 'todays date',
                //         favoriteIcebreakerID: 'context ID of icebreaker (write this into context)',
                //     })
                // })
                // .then(() => {
                //     firebase.firestore().collection('Icebreakers')
                //     .doc('context ID of icebreaker')
                //     .update({
                //         numberOfLikes: firebase.firestore.FieldValue.increment(1)
                //     })
                //     .catch(err => {
                //         console.error(err.code)
                //     })
                // })
                // .catch(err => {
                //     console.error(err.code)
                // })

            }}>
              <FavoriteBorderIcon style={heartButtonStyle}/>
            </button>
        )
    } else {
        favoriteImage = ''
    }
    // need to check to see if its a favorite first
    
    return (
      <div className="icebreakersingle-containter">
        <div className="icebreaker-card">
          <h2 className="card-title">{titleCheck}</h2>
            <hr className="card-hr"/>
          <p className="icebreaker-text">{icebreaker}</p>

            {favoriteImage}          
        </div>
        <button
          className="BreakIceBtn-2"
          onClick={() => {
            icebreakers.clearList()
            icebreakers.loadList()
            firebase.firestore().collection('Icebreakers')
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let newIceBreaker = {
                        title: doc.data().title,
                        body: doc.data().body,
                        id: doc.id
                    }
                    icebreakers.addToIceBreakers(newIceBreaker)
                })
            })
            .then(() => {
                icebreakers.finishLoadingList()
                icebreakers.setIndexOfRandomIcebreaker(Math.floor((Math.random() * icebreakers.icebreakerList.length)))
            })
            .catch(err => {
                console.error(err.code)
            })
        }}
        >
          BREAK THE ICE
        </button>
        <Button 
            // color='primary'
            variant='contained'
            style={{
                backgroundColor: 'gray',
                color: 'white',
                textTransform: 'none',
                width: '50vw',
                margin: 'auto',
                marginTop: '15px'
            }}
            onClick={() => home.closePopup()}>
            Close
        </Button>
      </div>
    )
}

//next step is making the button display an icebreaker