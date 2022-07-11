import React from 'react'
import axios from "axios";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import {Box, Grid, Paper} from '@mui/material'
import Fab from '@mui/material/Fab';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import AlertDialogNew from "./RemovePopup";

const client = axios.create({
    baseURL: "https://mockend.com/kaanyillmazz/redlink/posts"
});

let obj = function(id, title, likes){
    this.id = id;
    this.title = title;
    this.likes = likes;
}
let obj1 = new obj(1,"yes", "10");
let obj2 = new obj(2,"yes", "10");
let obj3 = new obj(3,"yes", "10");




let postsHolder = [obj1,obj2,obj3];

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

    window.localStorage.setItem('posts', JSON.stringify(posts));

    const MyListItem = ({index}) => {
        const handleFocusEnter = () => {
            setOpen(true);
        };
        const handleFocusLeave = () => {
            setOpen(false);
        };

        const myObject = postsHolder.at(index);
        const [open, setOpen] = React.useState(false);
        const [post, setPost] = React.useState(myObject);



        let ListItem0;
        if (post) {
            let str = post.title;
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
                            <h1 style={{fontSize: "medium"}}>{post.likes}</h1>
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