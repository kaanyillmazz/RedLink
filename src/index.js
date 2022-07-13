import React from 'react';

import {Grid} from '@mui/material'
import {Divider} from '@mui/material'
import {Box} from '@mui/material'

import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import SubmitALinkComp from "./SubmitALink";
import Paginator from "./Pagination";
import LinkList from "./LinkList"
import FloatingActionButtons from "./RemovePopup"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>

    <Grid container spacing={2} alignItems="left">
        <Grid item xs={3} ml={1}>
            <h1 style={{color: 'red'}}>RedLink</h1>
        </Grid>


    </Grid>

    <Box mt={1} mb={2}>
        <Divider/>
    </Box>


    <Grid container spacing={2}>
        <Grid item xs={12}>

        </Grid>
    </Grid>

    <Box mt={1} mb={1}>

        <Grid container spacing={0} alignItems="end">
            <Grid xs={4}/>
            <Grid xs={4}>
                <Divider variant="middle"/>
            </Grid>
            <Grid xs={4}/>
        </Grid>
    </Box>

    <Grid container spacing={0} display="flex" justifyContent="center">
        <Grid item xs={4}>
            <LinkList/>
        </Grid>
    </Grid>

    <FloatingActionButtons/>




</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
