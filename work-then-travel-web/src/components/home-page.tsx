import { Box, Button, CardMedia, Container, Link, ThemeProvider, Typography, createTheme } from "@mui/material";
import HeaderComponent from "./appbar";
import Footer from "./footer";

export default function HomePage() {

    const theme = createTheme({
        typography: {
          fontFamily: 'Open Sans', 
        },
      });
    return (
        <>
        <ThemeProvider theme={theme}>
            <Box sx={{ mt: 48, mb: 7 }}>
                <HeaderComponent />
            </Box>
            <Box sx={{ textAlign: 'center', mt: 7, ml: 10 }}>
                <Container maxWidth="xl">
                    <Box sx={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                        <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 100%)',}}
                        ></Box>
                        <CardMedia
                            component="img"
                            src="images/airplane2.jpg" // Update with your image path
                            alt="Picture"
                            sx={{
                                width: '100%',
                                borderRadius: '12px',
                                mt: 0,
                                mx: 'auto', // Center horizontally
                            }}
                        />
                        <Typography
                           variant="h4"
                            component="div"
                            sx={{ 
                                position: 'absolute',
                                top: '35%',
                                left: '16.2%',
                                transform: 'translate(-50%, -50%)',
                                color: 'black',
                                fontSize: '67px',
                                fontWeight: '900',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                textAlign: 'center',
                            }}
                        >
                            Find Your
                        </Typography>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                position: 'absolute',
                                top: '45%',
                                left: '20%',
                                transform: 'translate(-50%, -50%)',
                                color: 'black',
                                fontSize: '67px',
                                fontWeight: '900',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                textAlign: 'center',
                            }}
                        >
                            Ideal Agency
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                position: 'absolute',
                                top: '57%',
                                left: '10%',
                                height: "50px",
                                width: "130px",
                                borderTopLeftRadius: '50px', // Flat on top-left corner
                                borderTopRightRadius: '50px', // Flat on top-right corner
                                borderBottomLeftRadius: '50px', // Rounded on bottom-left corner
                                borderBottomRightRadius: '50px', // Rounded on bottom-right corner
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                fontWeight: "600",
                                fontSize: "18px",
                                textTransform: 'capitalize',
                                backgroundColor: "#F45151",
                                textAlign: 'center',
                                borderColor: 'black', // Black border color
                                    borderTopWidth: '1px',
                                    borderLeftWidth: '1px',
                                    borderRightWidth: '2px',
                                    borderBottomWidth: '3px',
                                    '&:hover': {
                                        backgroundColor: "#F45151"
                                    },
                            }}
                        > <Link 
                        href = "/login"
                        sx = {{ 
                            color: "white",
                            textDecoration: 'none',
                            '&:hover': {
                                color: "white"
                            },
                        }}>
                            Log in </Link>
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Footer />
            </ThemeProvider>
        </>
    )
}