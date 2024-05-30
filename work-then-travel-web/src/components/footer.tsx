import { Button, Card, CardMedia, Divider, Stack, ThemeProvider, Typography, createTheme } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Open Sans', 
    },
  });

  const handleClick = () => {
         
    const mailtoUrl = 'mailto:contactwtguide@gmail.com';
    const windowFeatures = 'width=800,height=600,left=100,top=100'; 
    window.open(mailtoUrl, '_blank', windowFeatures);
  };

    return (
    <>
     <ThemeProvider theme={theme}>
    <Divider sx={{ 
        marginTop: '20px', 
        ml: 20,
        mr: 20,
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
        <Typography sx = {{ fontWeight: "600" }}>Menu</Typography>
        <Stack>
        <Typography>Home</Typography>
        <Typography>About Us</Typography>
        <Typography>Contact</Typography>
        <Typography>Agencies</Typography>
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Typography sx = {{ fontWeight: "600" }} >Links</Typography>
        <Stack>
        <Typography>Terms and Conditions</Typography>
        <Typography>Privacy and Policy</Typography>
        <Typography>GDPR</Typography>
        </Stack>
      </Stack>
      <Stack spacing={1.2}>
        <Typography sx = {{ fontWeight: "600"}} >Contact</Typography>
        <Stack direction="row" spacing={0.5} alignItems="center" sx = {{ mt: -3 }}>
        <EmailIcon />
        <Button onClick={handleClick} sx = {{
                                    ml: -36,
                                   color:  `rgba(0, 0, 0, 0.75)`,
                                    textTransform: "lowercase",
                                    fontSize: "17px",
                                    fontWeight: "400",
                                    '&:focus':{
                                        outline: "none"
                                    }
                                }}>contactwtguide@gmail.com </Button>

        </Stack>
      </Stack>
    </Stack>
    <Divider sx={{ 
        marginTop: '20px', 
        ml: 20,
        mr: 20,
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