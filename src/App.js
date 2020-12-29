import './App.css'
import Login from './screens/Login'
import SignUp from './screens/SignUp'

// import {useContext} from 'react'

// import firebase from 'firebase/app'
// import 'firebase/firestore'

import Nav from './components/Nav/Nav'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"

import Home from './components/Home/Home'

// import {GlobalContext} from './components/context/GlobalContext'

export default function App() {

    // let {
    //     test
    // } = useContext(GlobalContext)

    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/signup' component={SignUp} />            
                </Switch>
            </Router>
        </div>
  );
}
