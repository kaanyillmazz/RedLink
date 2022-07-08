import {Pagination} from '@mui/material';
import React from 'react'
import {Grid} from '@mui/material'


function Paginator() {


    return (
        <Grid container spacing={2} alignItems="center">

            <Grid item xs={12}  display="flex" justifyContent="center" >
                <Pagination count={5}/>
            </Grid>

        </Grid>
    )


}

export default Paginator;