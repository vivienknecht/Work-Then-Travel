import { Card, CardMedia, Divider, Stack, ThemeProvider, Typography, createTheme } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Open Sans', 
    },
  });
    return (
    <>
     <ThemeProvider theme={theme}>
    <Divider sx={{ 
        marginTop: '20px', 
        ml: 20,
        height: '4px'
        }} />
    <Stack direction="row" spacing={28} sx = {{ ml: 12, mt: 3}}>
        <Stack spacing={3}>
        <Card>
        <CardMedia
        component="img"
        height="70"
        image="images/logo normal.png"
        alt="Logo"
        sx = {{ 
          borderRadius: "18px",
          overflow: 'hidden',
        }}
        />
      </Card>
      <Typography
      sx = {{ 
        fontWeight: 700,
      }}
      >
        Your experience is our mission. 
      </Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography>Menu</Typography>
        <Stack>
        <Typography>Home</Typography>
        <Typography>About Us</Typography>
        <Typography>Contact</Typography>
        <Typography>Agencies</Typography>
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Typography>Links</Typography>
        <Stack>
        <Typography>Terms and Conditions</Typography>
        <Typography>Privacy and Policy</Typography>
        <Typography>GDPR</Typography>
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Typography>Contact</Typography>
        <Stack direction="row" spacing={1}>
        <EmailIcon />
        <Typography>contact@workandtravelguide.com</Typography>
        </Stack>
      </Stack>
    </Stack>
    <Divider sx={{ 
        marginTop: '20px', 
        ml: 20,
        height: '4px'
        }} />
        <Typography
        variant="body2"
        color="textSecondary"
        sx={{ textAlign: 'center', mt: 2, pb: 2 }}
      >
        &copy; {new Date().getFullYear()} Work&Travel Guide. All Rights Reserved.
      </Typography>
      </ ThemeProvider>
    </>
    )
}