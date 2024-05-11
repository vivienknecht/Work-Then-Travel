import { Box, Container, CardMedia, Typography, Grid, TextField, Stack, Button, createTheme, ThemeProvider } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import HeaderComponent from "./appbar";
import Footer from "./footer";

export default function ContactUs() {
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
                    <Container maxWidth="xl" sx={{ ml: 1 }}>
                        <Box sx={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to left, rgba(0,0,0,0.7) 100%, rgba(0,0,0,0.2) 100%)',
                                }}
                            ></Box>
                            <CardMedia
                                component="img"
                                src="images/friends at ocean.jpg" // Update with your image path
                                alt="Picture"
                                sx={{
                                    width: '100%',
                                    height: '300px', // Set a fixed height for the cropped image
                                    borderRadius: '12px',
                                    mt: 0,
                                    mx: 'auto', // Center horizontally
                                    objectFit: 'cover', // Crop the image to cover the container
                                    objectPosition: 'center 85%', // Center the image within the container
                                }}
                            />
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '15.6%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'white',
                                    fontSize: '65px',
                                    fontWeight: '900',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                    textAlign: 'center',
                                }}
                            >
                                Contact
                            </Typography>
                        </Box>
                    </Container>
                    <Grid container spacing={10} sx={{ ml: 20, mt: 4, }}>
                        <Grid item xs={4}>
                            <Typography sx={{
                                textAlign: 'left',
                                fontSize: "15px",
                                ml: -5
                            }}
                            >Work&Travel Guide </Typography>
                            <Typography sx={{
                                textAlign: 'left',
                                fontSize: "35px",
                                fontWeight: "800",
                                ml: -5,
                            }}>
                                Let's Talk! </Typography>
                            <Typography sx={{
                                mt: 6,
                                ml: -9,

                            }}>
                                If you have questions or isues, feel free to contact us by clicking on</Typography>
                            <Typography sx={{
                                ml: -47,

                            }}>
                                the email address below: </Typography>
                            <Typography sx={{
                                mt: 4,
                                ml: -37,
                                color: "#F45151",
                                fontWeight: "600"
                            }}>contact@workandtravelguide.com</Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    src="images/contact.jpg" // Update with your image path
                                    alt="Picture"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Footer />
            </ThemeProvider>
        </>
    )
}