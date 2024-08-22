



//import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
//import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

const SearchBar = () => (
	<Paper
	component="form"
	sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
>
	<InputBase
		sx={{ ml: 1, flex: 1 }}
		placeholder="Search"
		onInput={(e) => {
			const target = e.target as HTMLInputElement;
			console.log(target.value);
		}}
	/>
	<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
		<SearchIcon />
	</IconButton>
</Paper>
	
);


export default SearchBar;