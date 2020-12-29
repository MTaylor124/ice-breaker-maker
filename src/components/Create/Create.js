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
        marginTop: '15px'
    }
    let titleContent, bodyContent, submitContent


    if (createPrompt.type !== null) {
        titleContent = (
            <TextField
                placeholder='why did the chicken cross the road?'
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
                placeholder='why did the chicken cross the road?'
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
                .then(docref => {
                    console.log('we did it', docref.id)
                })
                .catch(err => {
                    console.error(err.code)
                })
            }}>
                submit
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
                this is only allowed for users, please create an account if you wish to access this feature
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
