import React from 'react'
import axios from "axios";

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

const client = axios.create({
    baseURL: "https://mockend.com/kaanyillmazz/redlink/posts"
});

let postsHolder = [];


function LinkList() {
    const [open, setOpen] = React.useState(false);
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        client.get("").then((response) => {
            setPosts(response.data.splice(1, 3));
        }).catch(error => {
            console.log(error)
        });
    }, []);

    console.log(posts);
    console.log(posts.at(0));
    postsHolder = posts;

    const handleFocusEnter = () => {
        setOpen(true);
    };
    const handleFocusLeave = () => {
        setOpen(false);
    };

    let listItem;
    if (posts) {
        listItem = posts.map(post => {
            return (
                <ListItem alignItems="flex-start" onMouseEnter={handleFocusEnter} onMouseLeave={handleFocusLeave}>
                    <div>
                        <Fab size="small"
                             style={{position: 'absolute', right: 0, bottom: 5, height: 20, width: 20, minHeight: 20}}>
                            <KeyboardArrowUpIcon/>
                        </Fab>
                        <Fab size="small"
                             style={{position: 'absolute', right: 26, bottom: 5, height: 20, width: 20, minHeight: 20}}>
                            <KeyboardArrowDownIcon/>
                        </Fab>
                    </div>
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
                        primary={post.title}
                        secondary={
                            <React.Fragment>
                                {"I'll be in your neighborhood doing errands this"}
                            </React.Fragment>
                        }/>

                    <AlertDialogNew show={open}/>

                </ListItem>
            )
        });
    }

    return (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>

            <MyListItem index={0}/>
            <Divider variant="inset" component="li"/>
            <MyListItem index={1}/>
            <Divider variant="inset" component="li"/>
            <MyListItem index={2}/>

        </List>
    );
}

const MyListItem = ({index}) => {
    const handleFocusEnter = () => {
        setOpen(true);
    };
    const handleFocusLeave = () => {
        setOpen(false);
    };

    const [open, setOpen] = React.useState(false);

    const post0 = postsHolder.at(index);

    let ListItem0;
    if (post0) {
        let str = post0.title;
        let str1 = "https://"+str+".com"
        ListItem0 = <ListItem alignItems="flex-start" onMouseEnter={handleFocusEnter} onMouseLeave={handleFocusLeave}>
            <div>
                <Fab size="small"
                     style={{position: 'absolute', right: 0, bottom: 5, height: 20, width: 20, minHeight: 20}}>
                    <KeyboardArrowUpIcon/>
                </Fab>
                <Fab size="small"
                     style={{position: 'absolute', right: 26, bottom: 5, height: 20, width: 20, minHeight: 20}}>
                    <KeyboardArrowDownIcon/>
                </Fab>
            </div>

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
                primary={str}
                secondary={
                    <React.Fragment>
                        {str1}
                    </React.Fragment>
                }/>

            <AlertDialogNew show={open}/>

        </ListItem>
    }
    return ListItem0;
}

export default LinkList;