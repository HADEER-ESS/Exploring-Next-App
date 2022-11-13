import React from 'react'
import axios from "axios";
import { Country } from '../../components/Country';
import Navbar from '../../components/Navbar';
import CountryName from './[country.name]';


export async function getStaticProps(){

  const data = await axios.get("https://restcountries.com/v2/all").then((res)=>res.data)
  console.log("from " , data)
  return {
    props : {
      data
    }
  }
}
const MainPage = ({data}) => {
  console.log("the data " , data)
  return (
    <>
    <Navbar/>
    <CountryName/>
    </>
  )
}

export default MainPage