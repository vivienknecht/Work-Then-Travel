import { ThemeProvider } from "@emotion/react";
import { createTheme, Box, Typography, Grid, TextField, styled, Stack, Checkbox, Link, Button } from "@mui/material";
import HeaderComponent from "./appbar";
import Footer from "./footer";

export default function AddAgency() {

  const theme = createTheme({
    typography: {
      fontFamily: 'Open Sans',
    },
  });

  const CustomTextField = styled(TextField)(({ theme }) => ({
    width: '650px',
    height: '40px',
    marginBottom: theme.spacing(5),
    '& .MuiInputLabel-root': {
      color: 'black', // Label color
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#000', // Default border color
      },
      '&:hover fieldset': {
        borderColor: '#000', // Border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: '#000', // Darker border color when focused
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'black', // Label color when focused
    },
  }));

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ mt: 48, mb: 7 }}>
          <HeaderComponent />
        </Box>
        <Typography variant="h2" sx={{
          ml: 20,
          fontWeight: "600",
          color: "black"
        }}>
          List your Agency</Typography>
        <Typography sx={{
          ml: 20.7,
          fontWeight: "500",
          color: "black"
        }}>
          Please provide us with your agency details for review. Upon our evaluation, we will consider listing
          your company on our website. Contact us for any other information</Typography>
        <Grid container spacing={5} sx={{ mt: 3, ml: 16 }}>
          <Grid item xs={5} sx={{}}>
            <CustomTextField required label="Agency Name" sx={{
              width: "650px",
              height: "40px",
              mb: 5
            }} />
            <CustomTextField required label="Email Address" sx={{
              width: "650px",
              height: "40px",
              mb: 5
            }} />
            <CustomTextField required label="Phone" sx={{
              width: "650px",
              height: "40px",
              mb: 5
            }} />
            <CustomTextField required label="Address" sx={{
              width: "650px",
              height: "40px",
              mb: 5
            }} />
            <CustomTextField required label="Year of fundation" sx={{
              width: "650px",
              height: "40px",
              mb: 5
            }} />
            <CustomTextField required label="Number of students" sx={{
              width: "650px",
              height: "40px",
              mb: 5
            }} />
            <CustomTextField required label="Number of available locations" sx={{
              width: "650px",
              height: "40px",
              mb: 5
            }} />
            <CustomTextField required label="Official website" sx={{
              width: "650px",
              height: "40px",
              mb: 5
            }} />
          </Grid>
          <Grid item xs={5}>
          <TextField
      required
      label="Description"
      sx={{
        '& .MuiInputBase-root': {
          height: 450, 
          width: 650 ,
        },
        '& .MuiOutlinedInput-root': {
          height: 455, 
          width: 650,
          '& fieldset': {
            borderColor: '#000', // Default border color
          },
          '&:hover fieldset': {
            borderColor: '#000', // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#000', // Darker border color when focused
          },
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'black', // Label color when focused
        },
        '& .MuiInputLabel-root': {
          color: 'black', // Label color
        },
      }}
    />
    <Stack direction="row" spacing={0} sx = {{ mt: 3, ml: -1.8}}>
    <Checkbox
      sx={{
        color: "#F45151",
    '&.Mui-checked': {
      color: "#F45151",
    },
        '& .MuiSvgIcon-root': {
          fontSize: 35,  // Adjust the fontSize to change the checkbox size
        },
      }}
    />
    <Link href="/terms-and-conditions"    sx = {{ fontSize: "20px", textDecoration: "none", color: "black", pt: 1.3,
      '&:hover':{
        textDecoration: "none", color: "black"
      }
     }} > Accept Terms and Conditions</Link>
    </Stack>
    <Button variant="outlined"
                                    sx={{
                                       mt: 4,
                                        width: "650px",
                                        height: "55px",
                                        borderTopLeftRadius: '50px',
                                        borderTopRightRadius: '50px',
                                        borderBottomLeftRadius: '50px',
                                        borderBottomRightRadius: '50px',
                                        color: 'white',
                                        fontWeight: "600",
                                        fontSize: "18px",
                                        textTransform: 'capitalize',
                                        backgroundColor: "#F45151",
                                        borderColor: 'black', // Black border color
                                        borderTopWidth: '1px',
                                        borderLeftWidth: '1px',
                                        borderRightWidth: '2px',
                                        borderBottomWidth: '3px',
                                        '&:hover': {
                                            backgroundColor: "#F45151"
                                        },
                                    }}>List Your Agency</Button>
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>
    </>
  )
}