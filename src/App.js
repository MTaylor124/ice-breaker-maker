import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'

export default function App() {
  return (
    <div className="App">
        hello

        <button onClick={() => {

            const newDataEntry = {
                prompt: 'this is the question how do you guys feel about it?',
                category: 'Tech',
                createdBy: 'usersID',
            }

            firebase.firestore().collection('icebreakers').doc('idofdocument').delete()
            
            
            .add(newDataEntry)
            .then(docRef => {
                console.log('this is the docref', docRef)
            })
            .catch(err => {
                console.error(err.code)
            })
        }}>
            write to database
        </button>
        
    </div>
  );
}
