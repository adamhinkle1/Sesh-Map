import React, {useState, useEffect} from 'react'
import Dialog from '@material-ui/core/Dialog';
import {Button} from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel, Select as MuiSelect, MenuItem } from '@material-ui/core';
import {addLocation} from "./api";

function NewLocation(props) {
    const [isOpen, setIsOpen] = useState(true)
    const [name, setName] = useState(null)
    const [sport, setSport] = useState(null)

    const locationState = {
        "category": sport,
	    "name": name,
        "url": '',
        "coordinates": props.coords
    }

    const addLoc = async() => {
        const setLoc = await addLocation(locationState)
        //return props.onclose

    }

    useEffect(() => {

        return(
        props.onClose
        )
    }, [isOpen])

    const onSubmit = (() => {
        addLoc()
        setIsOpen(false)
        setName(null)
        setSport(null)
    })
    return (
        <div>
            <Dialog
            open={props.open}
            TransitionComponent={props.TransitionComponent}
            onClose={props.onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <p>Want to submit a new location?</p>
            <DialogContent>
                <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="dense"
                    label="Whats the name of this location?"
                    fullWidth
                />
                <FormControl>
                    <InputLabel>{"What kind of location is this?"}</InputLabel>
                    <MuiSelect
                        label={"What kind of location is this?"}
                        name={"What kind of location is this?"}
                        value={sport}
                        onChange={(e) => setSport(e.target.value)}
                        >
                        <MenuItem value="Surfing">Surfing</MenuItem>
                        <MenuItem value="Skateboarding">Skateboarding</MenuItem>
                        <MenuItem value="Hiking">Hiking</MenuItem>
                        <MenuItem value="Rock Climbing">Rock Climbing</MenuItem>
                    </MuiSelect>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={onSubmit} color="primary" >
                    Submit Location
                </Button>
            </DialogActions>
        </Dialog>
    </div>
    )
}

export default NewLocation
