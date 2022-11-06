import Navbar from "../components/Navbar"
import axios from "axios";

export async function getStaticProps(){

  const data = await axios.get("https://restcountries.com/v2/all").then((res)=>res.data)

  return {
    props : {
      data
    }
  }
}

export default function Home({data}) {

  console.log("data " , data)
  return (
    <div>
      <Navbar/>
    </div>
  )
}

