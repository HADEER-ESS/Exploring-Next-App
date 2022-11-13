import React, { useState } from 'react'
import { Box, IconButton, Toolbar, Typography, AppBar, TextField } from '@mui/material';
import AppLogo from "../public/18-location-pin-lineal.gif";
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [ val , setVal ] = useState("") ;
  const runInput = (e) => {
    setVal(e.target.value)
    console.log("the valll " , val)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar style={{ display:"flex" , justifyContent:"center" , alignItems:"center"}}>
        <Link href="/">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Image src={AppLogo} alt="application logo" height={60} width={60}/>
        </IconButton>
        </Link>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{display:"flex" , flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          EXPLORING
        </Typography>
        <Box
          component="div"
          style={{display:"flex" , alignItems:"center", borderWidth:1 , borderRadius:30 , backgroundColor:"white" , padding:11}}
      >
    <SearchIcon style={{color:"#6a6a6a" , marginRight:11}}/>
    <input onChange={runInput} placeholder='Country Name' value={val}/>
    </Box>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar