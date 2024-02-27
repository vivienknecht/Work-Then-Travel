import { Box, Button, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import Appbar from "./appbar"

export default function AgencyMainPage() {
  return (
    <>
      <Appbar />
      <Box
        margin={1}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="flex-end"
        sx={{
          top: 100,
          right: "60%",
          marginRight: -100,
          position: "absolute",
        }}
      >
        <Typography
          component={RouterLink}
          to="/student-page" 
          variant="h6"
          color="inherit"
          sx={{
            position: "sticky",
            top: "20px",
            right: "100px",
            zIndex: 1000,
            height: "60px",
            width: "220px",
            color: "white",
            backgroundColor: "#FAA0A0",
            textTransform: "none",
            fontSize: "30px",
            fontWeight: "600",
            marginBottom: 2,
            marginTop: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            borderRadius: '5px',
            fontFamily: 'Cormorant, sans-serif',
            "&:hover": {
              backgroundColor: "#FF7F7F",
              color: "white"
            },
          }}
        >
          Student page
        </Typography>
      </Box>
      <Typography variant="h3" sx={{
        mt: 1,
        ml: 10,
        mb: 3,
        color: "#697074",
        fontWeight: "500",
        fontFamily: 'Cormorant, sans-serif',
      }}> Present your offer here:</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': {
            mt: 1,
            mb: 1,
            mr: 1,
            ml: 9,
            width: 1000,
          },
        }}
      >
        <TextField label={
          <Typography
          variant="h5"
          sx={{
            fontFamily: 'Cormorant, sans-serif'
          }}
        >
          Name
        </Typography>
        } 
        variant="outlined" sx={{
        backgroundColor: "white",
        }} />
        <TextField multiline rows={8}
          label={
            <Typography
            variant="h5"
            sx={{
              fontFamily: 'Cormorant, sans-serif'
            }}
          >
            Offer
          </Typography>
          } 
          variant="outlined" sx={{
          backgroundColor: "white"
          }} />
        <TextField label={
            <Typography
            variant="h5"
            sx={{
            fontFamily: 'Cormorant, sans-serif'
            }}
          >
            Link
          </Typography>
          } 
          variant="outlined" sx={{
          backgroundColor: "white"
          }} /> 
        <Button variant="contained"
          size="large"
          color="inherit"
          sx={{
            color: "white",
            textDecoration: 'none',
            backgroundColor: "#FAA0A0",
            textTransform: "none",
            fontSize: "25px",
            fontFamily: 'Cormorant, sans-serif',
            fontWeight: "600",
            "&:hover": {
              backgroundColor: "#FF7F7F",
            },
          }}>
            Submit</Button>
      </Box>
    </>
  )
}