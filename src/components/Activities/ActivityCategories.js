import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './ActivityCategories.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default function CheckboxesGroup() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        truthDare: true,
        haveIEver: false,
        twoTruthsLie: false,
        bingo: false,
        tongueTwisters: false,
        charades: false,
        cahoots: false,
        mafiaGame: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { truthDare, haveIEver, twoTruthsLie, bingo, tongueTwisters, charades, cahoots, mafiaGame } = state;
    const error = [truthDare, haveIEver, twoTruthsLie, bingo, tongueTwisters, charades, cahoots, mafiaGame].filter((v) => v).length !== 2;

    return (
        <div className='ActivityCategories'>
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={truthDare} onChange={handleChange} name="truthDare" />}
                            label="Truth or Dare"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={haveIEver} onChange={handleChange} name="haveIEver" />}
                            label="Never Have I Ever"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={twoTruthsLie} onChange={handleChange} name="twoTruthsLie" />}
                            label="Two Truths and A Lie"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={bingo} onChange={handleChange} name="bingo" />}
                            label="Bingo"
                        />
                    </FormGroup>
                </FormControl>
                <FormControl required error={error} component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={tongueTwisters} onChange={handleChange} name="tongueTwisters" />}
                            label="Tongue Twisters"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={charades} onChange={handleChange} name="charades" />}
                            label="Charades"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={cahoots} onChange={handleChange} name="cahoots" />}
                            label="Cahoots"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={mafiaGame} onChange={handleChange} name="mafiaGame" />}
                            label="Mafia Game"
                        />
                    </FormGroup>
                </FormControl>
            </div>
        </div>
    );
}