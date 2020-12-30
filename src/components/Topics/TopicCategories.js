import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './TopicCategories.css';

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
        ga: true,
        family: false,
        transportaion: false,
        musical: false,
        tech: false,
        food: false,
        entertainment: false,
        games: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { ga, family, transportaion, musical, tech, food, entertainment, games } = state;
    const error = [ga, family, transportaion, musical, tech, food, entertainment, games].filter((v) => v).length !== 2;

    return (
        <div className='TopicCategories'>
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={ga} onChange={handleChange} name="ga" />}
                            label="GA After Hours"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={family} onChange={handleChange} name="family" />}
                            label="Family Friendly"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={transportaion} onChange={handleChange} name="transportaion" />}
                            label="Transportaion"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={musical} onChange={handleChange} name="musical" />}
                            label="Musical Theater"
                        />
                    </FormGroup>
                </FormControl>
                <FormControl required error={error} component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={tech} onChange={handleChange} name="tech" />}
                            label="Technology"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={food} onChange={handleChange} name="food" />}
                            label="Food"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={entertainment} onChange={handleChange} name="entertainment" />}
                            label="Entetainment"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={games} onChange={handleChange} name="games" />}
                            label="Name Games"
                        />
                    </FormGroup>
                </FormControl>
            </div>
        </div>
    );
}