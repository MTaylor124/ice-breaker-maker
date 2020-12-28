import './App.css'

import {useContext} from 'react'

// import firebase from 'firebase/app'
// import 'firebase/firestore'

import {GlobalContext} from './components/context/GlobalContext'

export default function App() {

    let {
        test
    } = useContext(GlobalContext)


    return (
        <div className="App">
            hello

            <button onClick={() => {

                console.log('test', test)

            }}>
                write to database
            </button>
            
        </div>
  );
}
