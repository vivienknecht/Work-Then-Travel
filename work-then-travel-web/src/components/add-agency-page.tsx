import React from 'react';
import { ThemeProvider } from "@emotion/react";
import { createTheme, Box, Typography, Grid, TextField, styled, Stack, Checkbox, Link, Button } from "@mui/material";
import HeaderComponent from "./appbar";
import Footer from "./footer";

export default function AddAgency() {

  const [result, setResult] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d631f282-324b-4ed5-b40c-808d7a164af8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Your form has been submitted!");
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
      color: 'black', 
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#000',
      },
      '&:hover fieldset': {
        borderColor: '#000', 
      },
      '&.Mui-focused fieldset': {
        borderColor: '#000', 
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'black',
    },
  }));

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ mt: 48, mb: 7 }}>
          <HeaderComponent />
        </Box>
        <Typography variant="h2" sx={{
          ml: 15,
          fontWeight: "600",
          color: "black"
        }}>
          List your Agency</Typography>
        <Typography sx={{
          ml: 15.7,
          fontWeight: "500",
          color: "black"
        }}>
          Please provide us with your agency details for review. Upon our evaluation, we will consider listing
          your company on our website. Contact us for any other information</Typography>
        <Grid container spacing={5} sx={{ mt: 3, ml: 16 }}>
          <form onSubmit={onSubmit} style={{ display: 'contents' }}>
            <Grid item xs={5} sx={{}}>
              <CustomTextField required label="Agency Name" id="name" name="name" 
                sx={{
                  width: "650px",
                  height: "40px",
                  mb: 5
                }} />
              <CustomTextField required label="Email Address" id="emailAddress" name="emailAddress"
                sx={{
                  width: "650px",
                  height: "40px",
                  mb: 5
                }} />
              <CustomTextField required label="Phone" id="phone" name="phone"
                sx={{
                  width: "650px",
                  height: "40px",
                  mb: 5
                }} />
              <CustomTextField required label="Address" id="address" name="address"
                sx={{
                  width: "650px",
                  height: "40px",
                  mb: 5
                }} />
              <CustomTextField required label="Year of fundation" id="yearOfFundation" name="yearOfFundation"
                sx={{
                  width: "650px",
                  height: "40px",
                  mb: 5
                }} />
              <CustomTextField required label="Number of students" id="numberOfStudents" name="numberOfStudents"
                sx={{
                  width: "650px",
                  height: "40px",
                  mb: 5
                }} />
              <CustomTextField required label="Number of available locations" id="numberOfLocations" name="numberOfLocations"
                sx={{
                  width: "650px",
                  height: "40px",
                  mb: 5
                }} />
              <CustomTextField required label="Official website" id="website" name="website"
                sx={{
                  width: "650px",
                  height: "40px",
                  mb: 5
                }} />
            </Grid>
            <Grid item xs={5}>
              <TextField
                required
                multiline
                label="Description" 
                id="description"
                name="description"
                sx={{
                  '& .MuiInputBase-root': {
                    height: 450,
                    width: 650,
                    alignItems: 'flex-start', 
                  },
                  '& .MuiOutlinedInput-root': {
                    height: 455,
                    width: 650,
                    '& fieldset': {
                      borderColor: '#000', 
                    },
                    '&:hover fieldset': {
                      borderColor: '#000', 
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#000', 
                    },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'black', 
                  },
                  '& .MuiInputLabel-root': {
                    color: 'black', 
                  },
                  '& .MuiInputBase-input': {
                    padding: '5px', 
                  }
                }}
              />
              <Stack direction="row" spacing={0} sx={{ mt: 3, ml: -1.8 }}>
                <Checkbox checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)} 
                  sx={{
                    color: "#F45151",
                    '&.Mui-checked': {
                      color: "#F45151",
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,  
                    },
                  }}
                />
                <Link href="/terms-and-conditions" sx={{
                  fontSize: "20px", textDecoration: "none", color: "black", pt: 1.3,
                  '&:hover': {
                    textDecoration: "none", color: "black"
                  }
                }} > Accept Terms and Conditions</Link>
              </Stack>
              <Button variant="outlined" type="submit" 
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
                  borderColor: 'black', 
                  borderTopWidth: '1px',
                  borderLeftWidth: '1px',
                  borderRightWidth: '2px',
                  borderBottomWidth: '3px',
                  '&:hover': {
                    backgroundColor: "#F45151"
                  },
                }}>List Your Agency</Button>
            </Grid>
          </form>
        </Grid>
        <Footer />
      </ThemeProvider>
    </>
  )
}
