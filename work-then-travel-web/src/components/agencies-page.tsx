import { Box, Card, CardMedia, Container, Divider, Link, Rating, Stack, Typography, createTheme, styled } from "@mui/material";
import HeaderComponent from "./appbar"
import Footer from "./footer"
import { ThemeProvider } from "@emotion/react";
import StarsIcon from '@mui/icons-material/Stars';
import NavigateNextTwoToneIcon from '@mui/icons-material/NavigateNextTwoTone';

export default function AgenciesPage() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Open Sans',
        },
    });
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
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
                                src="images/friends at ocean.jpg"
                                alt="Picture"
                                sx={{
                                    width: '100%',
                                    height: '300px',
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
                                Agencies
                            </Typography>
                        </Box>
                    </Container>
                    <Typography sx={{
                        mt: 7,
                        color: "#F45151"
                    }}>
                        Only three steps.</Typography>
                    <Typography sx={{
                        fontSize: "45px",
                        fontWeight: "600",
                        color: "black",
                        mt: 0.5
                    }}>
                        Every thing should be easy.</Typography>
                    <Stack direction="row" spacing={1.5} sx={{ ml: 11, mt: 10 }}>
                        <Container maxWidth="xs" >
                            <Card variant="outlined"
                                sx={{
                                    borderColor: 'transparent',
                                    borderRadius: "20px",
                                    height: "300px",
                                    width: "350px",
                                    display: 'flex',
                                    flexDirection: 'column',
                                    pl: '20px',
                                    pr: "20px"
                                }}>
                                <CardMedia
                                    component="img"
                                    src="images/atdesk.png"
                                    alt="Picture"
                                    sx={{
                                        width: '20%',
                                        borderRadius: '12px',
                                        mt: 3,
                                        mb: 1,
                                        alignSelf: 'flex-start',
                                    }}
                                />
                                <Typography sx={{
                                    fontWeight: '800',
                                    fontSize: "23px",
                                    mt: 3,
                                    textAlign: 'left'

                                }}>
                                    Search for Agencies</Typography>
                                <Typography sx={{
                                    fontSize: "15px",
                                    mt: 2,
                                    textAlign: 'left',
                                    lineHeight: 1.3,
                                }}>
                                    Browse through our list of agencies to find the one that matches your interests and desired destinations. </Typography>
                            </Card>
                        </Container>
                        <Container maxWidth="xs" >
                            <Card variant="outlined"
                                sx={{
                                    borderColor: 'transparent',
                                    borderRadius: "20px",
                                    height: "300px",
                                    width: "350px",
                                    display: 'flex',
                                    flexDirection: 'column',
                                    pl: '20px', // Add padding for inner content
                                    pr: "20px"
                                }}>
                                <CardMedia
                                    component="img"
                                    src="images/select.png" // Update with your image path
                                    alt="Picture"
                                    sx={{
                                        width: '20%',
                                        borderRadius: '12px',
                                        mt: 3,
                                        mb: 1,
                                        alignSelf: 'flex-start',
                                    }}
                                />
                                <Typography sx={{
                                    fontWeight: '800',
                                    fontSize: "23px",
                                    mt: 3,
                                    textAlign: 'left'

                                }}>
                                    Select Agency</Typography>
                                <Typography sx={{
                                    fontSize: "15px",
                                    mt: 2,
                                    textAlign: 'left',
                                    lineHeight: 1.3,
                                }}>
                                    Review detailed agency profiles, user ratings, and feedback to choose the best fit for you. </Typography>
                            </Card>
                        </Container>
                        <Container maxWidth="xs" >
                            <Card variant="outlined"
                                sx={{
                                    borderColor: 'transparent',
                                    borderRadius: "20px",
                                    height: "300px",
                                    width: "350px",
                                    display: 'flex',
                                    flexDirection: 'column',
                                    pl: '20px', // Add padding for inner content
                                    pr: "20px"
                                }}>
                                <CardMedia
                                    component="img"
                                    src="images/review.png" // Update with your image path
                                    alt="Picture"
                                    sx={{
                                        width: '20%',
                                        borderRadius: '12px',
                                        mt: 3,
                                        mb: 1,
                                        alignSelf: 'flex-start',
                                    }}
                                />
                                <Typography sx={{
                                    fontWeight: '800',
                                    fontSize: "23px",
                                    mt: 3,
                                    textAlign: 'left',

                                }}>
                                    Write a review</Typography>
                                <Typography sx={{
                                    fontSize: "15px",
                                    mt: 2,
                                    textAlign: 'left',
                                    lineHeight: 1.3,
                                }}>
                                    Share your experience to help other students by submitting an honest, detailed review </Typography>
                            </Card>
                        </Container>
                    </Stack>
                    <Box sx={{
                        ml: 16.5,
                        display: "flex",
                        alignItems: "flex-start",
                    }}>
                        <Typography sx={{
                            fontSize: "45px",
                            fontWeight: "600",
                            color: "black",
                        }}>List of Agencies</Typography>
                    </Box>
                    <Container maxWidth="lg" >
                        <Card variant="outlined"
                            sx={{
                                borderColor: 'black', // Black border color
                                borderTopWidth: '2px',
                                borderLeftWidth: '1.8px',
                                borderRightWidth: '4px',
                                borderBottomWidth: '4px',
                                borderRadius: "20px",
                                height: "200px",
                                width: "1250px",
                                display: 'flex',
                                flexDirection: 'column',
                                pl: '20px', // Add padding for inner content
                                pr: "20px",
                                ml: -10,
                                mt: 5
                            }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                height: '100%',
                            }}>
                                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                    <Stack direction="column" spacing={1} sx={{ ml: -15 }} >
                                        <Typography sx={{ fontSize: "30px", fontWeight: "600" }}> See US Work&Travel </Typography>
                                        <StyledRating
                                            name="customized-color"
                                            defaultValue={2}
                                            getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                            precision={0.5}
                                            icon={<StarsIcon fontSize="inherit" />}
                                            emptyIcon={<StarsIcon fontSize="inherit" />}
                                        />
                                    </Stack>
                                </Box>
                                <Divider orientation="vertical" flexItem sx={{ mt: 3, mb: 3, color: "black", width: "10px" }} />
                                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <Stack direction="column" spacing={1} sx={{ ml: 2.5, width: '100%' }}>
                                        <Typography sx={{ textAlign: 'left', color: 'black', fontSize: "17px", fontWeight: "500"}}>
                                            More than 20 locations in the USA. We assure you a great summer,
                                            unforgettable memories, and a chance to make good money.
                                        </Typography>
                                        <Typography sx={{ textAlign: 'left', pt: 3, color: 'black', fontSize: "17px", }}>See all details   
                                        <Link href="/signup" sx={{ color: "#F45151", textDecoration: "none"}}> {'>>'}</Link> 
                                        </Typography> 
                                    </Stack>
                                </Box>
                            </Box>
                        </Card>
                    </Container>
                </Box>
                <Footer />
            </ThemeProvider>
        </>
    )
}
