import React from 'react'
import {Paper} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import {Grid} from '@mui/material'
import {IconButton} from '@mui/material'


function SubmitALinkComp() {
    return (

        <Grid container spacing={1}>

            <Grid item xs={12} display="flex" justifyContent="center">

                <Paper variant="outlined">
                    <Grid container spacing={0} alignItems="center" display="Flex" JustifyContent="Center">
                        <Grid item xs={4}>
                            <IconButton size="large">
                                <AddIcon fontSize="large"/>
                            </IconButton>

                        </Grid>
                        <Grid item xs={6}>
                            <h1>Submit A <i style={{color: 'red'}}> Link</i></h1>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default SubmitALinkComp;