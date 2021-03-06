import './App.css'
import Login from './screens/Login'
import SignUp from './screens/SignUp'

import {useContext} from 'react'

// import firebase from 'firebase/app'
// import 'firebase/firestore'

import Nav from './components/Nav/Nav'
import BottomNav from './components/Nav/BottomNav'
import Favorites from './components/Favorites/Favorites'
import Topics from './components/Topics/Topics'
import Create from './components/Create/Create'
import Dev from './components/Dev/Dev'

import IceBreakersAll from './components/IceBreakers/IceBreakersAll'
import IceBreakersSingle from './components/IceBreakers/IceBreakersSingle'
import ActivitiesAll from './components/Activities/ActivitiesAll'
import ActivitiesSingle from './components/Activities/ActivitiesSingle'

import MyIceBreakers from './components/IceBreakers/MyIceBreakers'
import MyIceBreaker from './components/IceBreakers/MyIceBreaker'
import MyActivities from './components/Activities/MyActivities'
import MyActivity from './components/Activities/MyActivity'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"

import Home from './components/Home/Home'

import {GlobalContext} from './components/context/GlobalContext'

export default function App() {

    let {
        auth
    } = useContext(GlobalContext)

    let bottomNavContent

    if (auth.signedIn) {
        bottomNavContent = <BottomNav />
    } else {
        bottomNavContent = <div></div>
    }
    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/signup' component={SignUp} />  
                  <Route exact path='/topics' component={Topics} />
                  <Route exact path='/favorites' component={Favorites} /> 
                  <Route exact path='/create' component={Create} /> 
                  <Route exact path='/activities' component={ActivitiesAll} /> 
                  <Route exact path='/activity' component={ActivitiesSingle} /> 
                  <Route exact path='/icebreakers' component={IceBreakersAll} /> 
                  <Route exact path='/icebreaker' component={IceBreakersSingle} /> 

                  <Route exact path='/myactivities' component={MyActivities} /> 
                  <Route exact path='/myactivity' component={MyActivity} /> 
                  <Route exact path='/myicebreakers' component={MyIceBreakers} /> 
                  <Route exact path='/myicebreaker' component={MyIceBreaker} /> 

                  <Route exact path='/dev' component={Dev} />            
                </Switch>
                {bottomNavContent}
            </Router>
        </div>
  );
}
