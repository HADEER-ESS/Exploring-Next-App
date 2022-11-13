import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../../components/Navbar'

const CountryName = () => {
    const router = useRouter()
    const {countryName} = router.query
    console.log("country name " , router.query)
  return (
    <>
        <Navbar/>
        <Box marginTop={7}>
        <Typography variant='h3' component='div' align='center'>Welcome in {countryName}</Typography>
        </Box>
    </>
  )
}

export default CountryName