import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const MySelect = ({ options, value, defaultValue, onChange }) => {
  return (
    <FormControl sx={{ m: 3, minWidth: '15%' }} size="small">
      <InputLabel id="demo-select-small">Сортировка по</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label="Сортировка "
        value={value}
        onChange={(event) => onChange(event.target.value)}>
        <MenuItem disabled value="">
          {defaultValue}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelect;
