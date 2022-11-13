import { Box, Grid, Typography , createTheme , ThemeProvider} from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from "axios";
import { Country } from "../components/Country";
import Navbar from "../components/Navbar"

export async function getStaticProps(){

  const data = await axios.get("https://restcountries.com/v2/all").then((res)=>res.data)
  return {
    props : {
      data
    }
  }
}
const theme = createTheme({
    
})
theme.typography.h5 = {
    fontWeight : 300,
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.3rem',
      fontWeight: 400,
      alignItems:"start"
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.1rem',
      alignItems:"center",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
      alignItems:"center"
    },
    [theme.breakpoints.up("lg")] : {
      fontSize : '3rem',
      alignItems:"center"
    }
  };

export default function Home({data}) {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{width:"100%"}}>
      <Navbar/>
      <Typography variant="h5" margin={7} marginX={15} display="flex" alignItems="center">
      <InfoOutlinedIcon style={{textAlign:"center" , marginRight:3}}/>
        There are about 250 countries around the world, pick one...
      </Typography>
      <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center" sx={{width : "80%" , display:"flex" , margin:"auto", flexWrap:"wrap" }}>
        {
          data.map((country) => 
            <Country key={country.name} country={country}/>
          )
        }
      </Grid>
    </Box>
    </ThemeProvider>
  )
}

