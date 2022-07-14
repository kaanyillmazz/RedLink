import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';

function SortSelect() {
    const [sort, setSort] = React.useState("Default");

    const handleChange = (event) => {
        console.log(event.target.value);
        let value = event.target.value;
        setSort(value);
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
                    <option value="Most Points">Most Points</option>
                    <option value="Least Points">Least Points</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
export default SortSelect;