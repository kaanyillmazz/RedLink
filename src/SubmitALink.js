
import {Paper} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import {Grid} from '@mui/material'
import {IconButton} from '@mui/material'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useRef} from "react";

function SubmitALinkComp() {


    const textField = useRef(null);

    const [open, setOpen] = React.useState(false);

    const [name, setName] = React.useState("value trial");
    const [url, setUrl] = React.useState("url trial");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        let text = event.target.value;
        setName(text);
        console.log(text);

    };
    const handleURLChange = (event) => {
        let text = event.target.value;
        setUrl(text);
        console.log(text);

    };


    return (
<div>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a Link</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Website info:
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Website Name"
                type="text"
                value={name}
                fullWidth
                variant="standard"
                ref={textField}
                onChange={handleChange}
            />
            <TextField
                autoFocus
                margin="dense"
                id="url"
                label="URL"
                type="url"
                fullWidth
                variant="standard"
                value={url}
                onChange={handleURLChange}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Add</Button>
        </DialogActions>
    </Dialog>

    <Grid container spacing={1}>
        <Grid item xs={12} display="flex" justifyContent="center">
            <Paper variant="outlined">
                <Grid container spacing={0} alignItems="center" display="Flex" JustifyContent="Center">
                    <Grid item xs={4}>
                        <IconButton size="large">
                            <AddIcon fontSize="large" onClick={handleClickOpen}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <h1>Submit A <i style={{color: 'red'}}> Link</i></h1>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
</div>
    )
}
export default SubmitALinkComp;