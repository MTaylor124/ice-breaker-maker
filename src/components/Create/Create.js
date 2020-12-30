import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import firebase from 'firebase/app'
import 'firebase/firestore'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Create() {

    let {
        auth,
        createPrompt,
        user
    } = useContext(GlobalContext)

    const checkboxStyle = {
        width: '20vw'
    }
    const titleStyle = {
        width: '90vw',
        marginTop: '15px'
    }
    const bodyStyle = {
        width: '90vw',
        marginTop: '20px'
    }
    const submitStyle = {
        marginTop: '15px',
        textTransform: 'none',
        width: '50vw',
        height: '8vh',
        fontSize: '1.2rem'
    }
    let titleContent, bodyContent, submitContent, submitMessage, bodyPlaceholder, finalMessage
    if (createPrompt.submitting) {
        submitMessage = (
            <CircularProgress style={{color: 'white'}}/>
        )
    } else {
        if (createPrompt.type === 'Icebreakers') {
            submitMessage = 'Submit Icebreaker'
            bodyPlaceholder = 'Why do YOU think the chicken crossed the road?'
        } else {
            submitMessage = 'Submit Activity'
            bodyPlaceholder = "Wave your hands in the air like you just don't care!"   
        }
    }
    if (createPrompt.submittedType === 'Icebreakers') {
        finalMessage = 'Thank you for adding your Icebreaker!'
    } else if (createPrompt.submittedType === 'Activity') {
        finalMessage = 'Thank you for adding your Activity!'
    } else {
        finalMessage = 'somethings wrong'
    }

    if (createPrompt.type !== null) {
        titleContent = (
            <TextField
                placeholder={bodyPlaceholder}
                style={titleStyle}
                color='primary'
                // disabled={}
                label='Title'
                type='text'
                variant='outlined'
                onChange={event => {
                    createPrompt.changeTitle(event.target.value)
                }}
            />
        )
        bodyContent = (
            <TextField
                placeholder={bodyPlaceholder}
                style={bodyStyle}
                color='primary'
                // disabled={}
                label={createPrompt.type}
                type='text'
                rows={5}
                multiline
                rowsMax={10}
                variant='outlined'
                onChange={event => {
                    createPrompt.changeBody(event.target.value)
                }}
            />
        )
        submitContent = (
            <Button 
                style={submitStyle}
                variant='contained'
                color='primary'
                onClick={() => {
                    
                    createPrompt.submitForm(createPrompt.type)

                    let today = new Date()
                    let day = today.getDate().toString()
                    let month = (today.getMonth() + 1).toString()
                    let year = today.getFullYear().toString()
                    let todaysDate = month.concat('-',day,'-',year)

                    let randomID = Math.floor(Math.random() * 1000000)

                    firebase.firestore().collection(createPrompt.type)
                    .add({
                        title: createPrompt.title,
                        body: createPrompt.body,
                        added: todaysDate,
                        createdBy: user.userID,
                        id: randomID
                    })
                    .then(() => {
                        setTimeout(() => {
                            createPrompt.finishSubmitting()
                        }, 1000)
                    })
                    .catch(err => {
                        console.error(err.code)
                    })
                }}>
                {submitMessage}
            </Button>
        )
    } else {
        titleContent = <div></div>
        bodyContent = <div></div>
        submitContent = <div></div>
    }


    if (!auth.signedIn) {
        return (
            <div>
                Create is only allowed for users, please create an account if you wish to access this feature
            </div>
        )
    } else if (createPrompt.submitted) {
        return (
            <div className='create-prompt-container'>
                <div className="create-prompt-header">
                    Create New Icebreaker or Activity
                </div>
                <div className="create-prompt-thanks">
                    {finalMessage}
                </div>
            </div>
        )
    } else {
        return (
            <div className='create-prompt-container'>
                <div className="create-prompt-header">
                    Create New Icebreaker or Activity
                </div>
                <div className='create-prompt-checkbox-row'>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                            control={<Checkbox disabled={(createPrompt.type === 'Activity')} style={checkboxStyle} color="primary" onClick={() => createPrompt.setType('Icebreakers')} />}
                            label="IceBreaker"
                            labelPlacement="bottom"
                            />
                            <FormControlLabel
                            control={<Checkbox disabled={(createPrompt.type === 'Icebreakers')} style={checkboxStyle} color="primary" onClick={() => createPrompt.setType('Activity')} />}
                            label="Activity"
                            labelPlacement="bottom"
                            />
                        </FormGroup>
                    </FormControl> 
                </div>
                {titleContent}
                {bodyContent}
                {submitContent}
            </div>
        )
    }
}
