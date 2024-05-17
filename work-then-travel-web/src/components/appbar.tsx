import React from 'react';
import { Button, Card, CardMedia, IconButton, Link, Stack, ThemeProvider, createTheme } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function HeaderComponent() {

  const theme = createTheme({
    typography: {
      fontFamily: 'Open Sans', 
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={35} sx={{ ml: 15, mr: 10, mt: -47 }}>
        <Card>
          <CardMedia
            component="img"
            height="85"
            image="images/logo normal.png"
            alt="Logo"
            sx={{
              borderRadius: "18px",
              overflow: 'hidden',
            }}
          />
        </Card>
        <Stack direction="row" spacing={2.5} sx={{ pt: 4 }}>
          <Button
            sx={{
              color: "black",
              fontFamily: "Open Sans",
              fontWeight: "600",
              fontSize: "18px",
              textTransform: "capitalize",
              '&:focus': {
                outline: 'none', // Remove outline on focus
              },
            }}
          ><Link 
          href = "/"
          sx = {{ 
              color: "black",
              textDecoration: 'none',
              '&:hover': {
                  color: "black"
              },
          }}>
              Home </Link>
          </Button>
          <Button
            sx={{
              color: "black",
              fontWeight: "600",
              fontSize: "18px",
              textTransform: 'capitalize',
              '&:focus': {
                outline: 'none', // Remove outline on focus
              },
            }}
          >
            <Link 
          href = "/about-us"
          sx = {{ 
              color: "black",
              textDecoration: 'none',
              '&:hover': {
                  color: "black"
              },
          }}>
              About us </Link>
              </Button>
          <Button
            sx={{
              color: "black",
              fontSize: "18px",
              fontWeight: "600",
              textTransform: "capitalize",
              '&:focus': {
                outline: 'none', // Remove outline on focus
              },
            }}
          >
            Agencies</Button>
          <Button
            sx={{
              color: 'black',
              textTransform: "capitalize",
              fontWeight: 600,
              fontSize: "18px",
              '&:focus': {
                outline: 'none',
                backgroundColor: 'white'
              },
              '&:active': {
                backgroundColor: 'white', 
              },
            }}
          >
          <Link 
          href = "/contact-us"
          sx = {{ 
              color: "black",
              textDecoration: 'none',
              '&:hover': {
                  color: "black"
              },
          }}>
              Contact </Link>
            </Button>
        </Stack>
        <Stack direction="row" spacing={4} sx={{ pt: 4.5 }}>
          <Button
            sx={{
              color: "black",
              borderRadius: "80%",
              fontWeight: "600",
              width: "130px",
              height: "50px",
              fontSize: "16px",
              textTransform: "capitalize",
              border: '1px solid',
              boxShadow: '3px 3px 0px 0px rgba(0,0,0,0.5)',
              borderTopLeftRadius: '50px', // Flat on top-left corner
              borderTopRightRadius: '50px', // Flat on top-right corner
              borderBottomLeftRadius: '50px', // Rounded on bottom-left corner
              borderBottomRightRadius: '50px', // Rounded on bottom-right corner
              '&:focus': {
                backgroundColor: "white"
              },
            }}
          >
            Add Agency</Button>
          <IconButton
          sx={{
            '&:focus': {
              outline: 'none',
            },
          }}>
            <AccountCircleIcon
              sx={{
                mt: -0.7,
                width: 45,
                height: 45,
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
      </ThemeProvider>
    </>
  );
}

