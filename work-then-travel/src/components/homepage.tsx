import React from "react";
import { Typography, Box, Divider, Stack } from "@mui/material";
import backgroundImage from "../assets/flag3.png";
import { Grid } from '@mui/material/';
import Login from "./Login";
import Signup from "./Signup";

const flagStyle: React.CSSProperties = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.15,
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
};
export default function MainScreen() {

  return (
    <>
      <div style={flagStyle} />
      <Stack direction="row" spacing={2} sx={{ marginX: "auto", mt: -12, mb: 10 }}>
        <Grid item md={2} >
          <Box component="img" sx={{
            mt: 3,
            ml: 1.5,
            height: 183,
            width: 275,
            maxHeight: { xs: 233, md: 400 },
            maxWidth: { xs: 350, md: 500 },
          }}
            src="./images/ny.jpeg">
          </Box>
        </Grid>
        <Grid item md={8}>
          <Typography variant="h3" sx={{ 
            mt: 10, 
            pr: 5,
            pl: 1,
            color: "#697074",
            fontFamily: 'Cormorant, sans-serif',
            fontWeight: '600' 
            }}>
              LETS GO TO THE UNITED STATES OF AMERICA!</Typography>
        </Grid>
        <Grid item md={2} >
          <Box component="img" sx={{
            mt: 3,
            height: 183,
            width: 275,
            maxHeight: { xs: 233, md: 400 },
            maxWidth: { xs: 350, md: 500 },
          }}
            src="./images/ocean.jpeg">
          </Box>
        </Grid>
      </Stack>
      <Typography variant="h4" sx={{
        mt: 8,
        mb: 0,
        ml: 30,
        mr: 30,
        color: "#697074",
        fontFamily: 'Cormorant, sans-serif',
        fontWeight: "500"
      }} >
        If you want to go to the USA, but are wondering about the where, when or how. You came to the rigth place!
      </Typography>
      <Grid container>
        <Divider orientation="vertical" flexItem> </Divider>
        <Grid item >
          <Typography
            variant="h5"
            sx={{
              mt: 2,
              ml: 28,
              mb: 1,
              color: "#697074",
              fontFamily: 'Cormorant, sans-serif',
              fontWeight: "500" 
            }}>
            Make an account and find out everything you want to know! Or share your experiences and help others out.
          </Typography>
          <Typography
            sx={{
              mt: 0.5,
              ml: 28,
              mb: 0,
              color: "#697074",
              fontFamily: 'Cormorant, sans-serif',
              fontWeight: "500",
              fontSize: "20px" 
            }}>
            If you are an agency you can present your offer. 
          </Typography>
          <Grid container direction="column" justifyContent="center" alignItems="center" rowGap={1} sx={{ ml: 17, mt: 8 }}>
            <Grid >
              <div className="App">
                <Login />
              </div>
            </Grid>

            <Grid container direction="column" justifyContent="center" alignItems="center" >
              <Typography sx={{
                fontSize: 20,
                mt: 1.5,
                mb: 1.5,
                color: "#697074",
                fontFamily: 'Cormorant, sans-serif',
                fontWeight: "600" 
              }}
              >
                OR
              </Typography>
            </Grid>
            <Grid >
              <div className="App"  >
                <Signup />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </>
  )
}

