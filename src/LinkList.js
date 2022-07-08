import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {Box, Grid, Paper} from '@mui/material'
import {ListItemIcon} from '@mui/material';
import Fab from '@mui/material/Fab';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import AlertDialogNew from "./RemovePopup";

function LinkList() {
    let fab;
    fab = <div>
        <Fab size="small" style={{position: 'absolute', right: 0, bottom: 5, height: 20, width: 20, minHeight: 20}}>
            <KeyboardArrowUpIcon/>
        </Fab>
        <Fab size="small" style={{position: 'absolute', right: 26, bottom: 5, height: 20, width: 20, minHeight: 20}}>
            <KeyboardArrowDownIcon/>
        </Fab>
    </div>

    let pointsBox;
    pointsBox = <Paper variant="outlined" square style={{padding: "1px", marginRight: "10px"}}>
        <Grid container textAlign="center" justifyContent="center" style={{minHeight: 80, maxHeight: 80, minWidth: 80}}>
            <Grid item>
                <h1 style={{fontSize: "medium"}}>X</h1>
                <h1 style={{fontSize: "medium"}}>Points</h1>
            </Grid>
        </Grid>
    </Paper>


    const [open, setOpen] = React.useState(false);

    const handleFocusEnter = () => {
        setOpen(true);
    };
    const handleFocusLeave = () => {
        setOpen(false);
    };

    return (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <ListItem alignItems="flex-start" onMouseEnter={handleFocusEnter} onMouseLeave={handleFocusLeave}>

                {fab}
                {pointsBox}

                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />

                <AlertDialogNew show={open}/>

            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem alignItems="flex-start">
                <Paper variant="outlined" square style={{padding: "1px", marginRight: "10px"}}>
                    <Grid container textAlign="center" justifyContent="center"
                          style={{minHeight: 80, maxHeight: 80, minWidth: 80}}>
                        <Grid item>
                            <h1 style={{fontSize: "medium"}}>X</h1>
                            <h1 style={{fontSize: "medium"}}>Points</h1>
                        </Grid>
                    </Grid>
                </Paper>
                <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem alignItems="flex-start">
                <Paper variant="outlined" square style={{padding: "1px", marginRight: "10px"}}>
                    <Grid container textAlign="center" justifyContent="center"
                          style={{minHeight: 80, maxHeight: 80, minWidth: 80}}>
                        <Grid item>
                            <h1 style={{fontSize: "medium"}}>X</h1>
                            <h1 style={{fontSize: "medium"}}>Points</h1>
                        </Grid>


                    </Grid>

                </Paper>
                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );

}

function MyListItem() {
    return false;
}

export default LinkList;