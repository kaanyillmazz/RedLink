import React from 'react'
import axios from "axios";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import {Box, Grid, Paper} from '@mui/material'
import Fab from '@mui/material/Fab';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import Button from "@mui/material/Button";

const client = axios.create({
    baseURL: "https://mockend.com/kaanyillmazz/redlink/posts"
});

let obj = function (id, title, points) {
    this.id = id;
    this.title = title;
    this.points = points;
}
let obj1 = new obj(1, "Loading...", "0");
let obj2 = new obj(2, "Loading...", "0");
let obj3 = new obj(3, "Loading...", "0");

let postsHolder = [obj1, obj2, obj3];

function LinkList() {

    const [open, setOpen] = React.useState(false);
    const [posts, setPosts] = React.useState([]);
    const [post, setPost] = React.useState([]);


    React.useEffect(() => {
        async function getPosts() {
            const response = await client.get("");
            postsHolder = response.data;
            setPosts(response.data);
        }

        getPosts();
    }, []);


    console.log(posts);
    console.log(posts.at(0));

    window.sessionStorage.setItem('posts', JSON.stringify(posts));

    const MyListItem = ({index}) => {
        const AlertDialogNew = ({show}) => {
            const [open, setOpen] = React.useState(false);
            const handleClick = () => {
                setOpen(true);
            };
            const handleClose = () => {
                setOpen(false);
            };
            const handleDelete = () => {
                deleteHandler();
                setOpen(false);
            };

            let box;
            if (show) {
                box = <Box sx={{'& > :not(style)': {m: 1}}}>
                    <Fab size="small" color="secondary" aria-label="edit" style={{position: 'absolute'}}>
                        <DeleteOutlineIcon onClick={handleClick}/>
                    </Fab>
                </Box>
            }
            return (
                <div>
                    {box}
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">
                            {"Are you sure you want to delete this?"}
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={handleClose}>No</Button>
                            <Button onClick={handleDelete} autoFocus> Yes </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            );
        }

        const handleFocusEnter = () => {
            setOpen(true);
        };
        const handleFocusLeave = () => {
            setOpen(false);
        };
        const myObject = postsHolder.at(index);
        const [open, setOpen] = React.useState(false);
        const [post, setPost] = React.useState(myObject);

        const likeHandler = async () => {
            const id = post.id;
            const article = {id: id, points: post.points + 1, title: post.title};
            const response = await client.put(`/${id}`, article);
            response.data = {id: id, points: post.points + 1, title: post.title}
            postsHolder[index] = response.data;
            window.sessionStorage.clear();
            window.sessionStorage.setItem('posts', JSON.stringify(postsHolder));
            setPost(response.data);



        };

        const dislikeHandler = async () => {
            const id = post.id;
            const article = {id: id, points: post.points - 1, title: post.title};
            const response = await client.put(`/${id}`, article);
            response.data = {id: id, points: post.points - 1, title: post.title}
            postsHolder[index] = response.data;
            window.sessionStorage.clear();
            window.sessionStorage.setItem('posts', JSON.stringify(postsHolder));
            setPost(response.data);

        };

        const deleteHandler = async () => {
            const id = post.id;
            const response = await client.delete(`/${id}`);
            postsHolder[index] = response.data;
            window.sessionStorage.clear();
            window.sessionStorage.setItem('posts', JSON.stringify(postsHolder));
            setPost(response.data);

        };


        let localHolder = JSON.parse(window.sessionStorage.getItem('posts'));
let post1 = localHolder.at(index);



        let ListItem0;
        if (post1) {
            let str = post1.title;
            let str1 = "https://" + str + ".com"
            ListItem0 =
                <ListItem alignItems="flex-start" onMouseEnter={handleFocusEnter} onMouseLeave={handleFocusLeave}>
                    <div>
                        <Fab onClick={function () {likeHandler();}}
                             size="small"
                             style={{position: 'absolute', right: 0, bottom: 5, height: 20, width: 20, minHeight: 20}}>
                            <KeyboardArrowUpIcon/>
                        </Fab>
                        <Fab onClick={function () {dislikeHandler();}}
                             size="small"
                             style={{position: 'absolute', right: 26, bottom: 5, height: 20, width: 20, minHeight: 20}}>
                            <KeyboardArrowDownIcon/>
                        </Fab>
                    </div>
                    <Paper variant="outlined" square style={{padding: "1px", marginRight: "10px"}}>
                        <Grid container textAlign="center" justifyContent="center"
                              style={{minHeight: 80, maxHeight: 80, minWidth: 80}}>
                            <Grid item>
                                <h1 style={{fontSize: "medium"}}>{post1.points}</h1>
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
export default LinkList;