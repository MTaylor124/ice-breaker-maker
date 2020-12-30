import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Button from '@material-ui/core/Button'
export default function Dev() {
    let {
        auth
    } = useContext(GlobalContext)

    const toggleButtonStyle = {
        marginTop: '30px',
        textDecoration: 'none'
    }

    let authStatus
    if (auth.signedIn) {
        authStatus = 'Signed In'
    } else {
        authStatus = 'Signed Out'
    }
    return (
        <div className='dev-container'>
            <Button 
                style={toggleButtonStyle}
                variant='contained'
                color='primary'
                onClick={() => auth.toggleSignedIn()}>
                Toggle
            </Button>
            <div className="dev-sign-in-status">
                Currently {authStatus}
            </div>
        </div>
    )
}
