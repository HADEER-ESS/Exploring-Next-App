import {
  Card,
  CardContent,
  CardMedia,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import DomainIcon from "@mui/icons-material/Domain";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import Link from "next/link";
import { useRouter } from "next/router";
const theme = createTheme({});
theme.typography.h4 = {
  fontWeight: 400,
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.8rem",
  },
};

export const Country = ({ country }) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid item lg={4} md={6} xs={12} sm={8} sx={{ marginBottom: 3 }}>
        <Link href={{pathname : `/home/${country.name}` , query: {countryName : country.name}}}>
          <Card
            sx={{
              maxHeight: 450,
              maxWidth: 345,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={country.flag}
              alt={country.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {country.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography variant="body" color="black">
                  <DomainIcon /> &nbsp;
                </Typography>
                {country.capital}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography variant="body" color="black">
                  <TranslateIcon /> &nbsp;
                </Typography>
                {country.languages[0].name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography variant="body" color="black">
                  <SouthAmericaIcon /> &nbsp;
                </Typography>
                {country.region}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </ThemeProvider>
  );
};
