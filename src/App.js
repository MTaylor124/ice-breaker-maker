import './App.css'

import {useContext} from 'react'

// import firebase from 'firebase/app'
// import 'firebase/firestore'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"

import Home from './components/Home/Home'

import {GlobalContext} from './components/context/GlobalContext'

export default function App() {

    let {
        test
    } = useContext(GlobalContext)

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </Router>
        </div>
  );
}
