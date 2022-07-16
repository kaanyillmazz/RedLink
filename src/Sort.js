import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';

function SortSelect() {
    const [sort, setSort] = React.useState("");

    const handleChange = (event) => {

        let value = event.target.value.toString();
        let value0 = value.toString();
        setSort(value0);
        console.log(value0);
        console.log(sort);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth >
                <InputLabel variant="outlined">
                    Sort
                </InputLabel>
                <NativeSelect
                    value={sort}
                    onChange={handleChange}
                >
                    <option value="Default">Default</option>
                    <option value="MostPoints">Most Points</option>
                    <option value="LeastPoints">Least Points</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
export default SortSelect;