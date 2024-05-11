import { Box, Container, CardMedia, Typography, Stack, Grid, Card, Button, createTheme, ThemeProvider } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import HeaderComponent from "./appbar";
import Footer from "./footer";

export default function AboutUs() {
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
                                background: 'linear-gradient(to left, rgba(255,255,255,0.45) 35%, rgba(255,255,255,0) 100%)',
                            }}
                        ></Box>
                        <CardMedia
                            component="img"
                            src="images/friends at ocean.jpg" // Update with your image path
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
                                top: '30%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'black',
                                fontSize: '67px',
                                fontWeight: '900',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                textAlign: 'center',
                            }}
                        >
                            About Us
                        </Typography>
                    </Box>
                </Container>
                <Grid container spacing={10} sx={{ ml: 20, mt: 4, }}>
                    <Grid item xs={4}>
                        <Typography sx={{
                            textAlign: 'left',
                            fontSize: "15px"
                        }}
                        >Work&Travel Guide </Typography>
                        <Typography sx={{
                            textAlign: 'left',
                            fontSize: "21px",
                            fontWeight: "800",
                        }}>
                            Who are we? </Typography>
                        <Typography sx={{
                            textAlign: 'left',
                            fontSize: "13.5px",
                            mt: 2.5,
                            lineHeight: 1.3,
                        }}>
                            Welcome to Work&Travel Guide, the ultimate resource for students seeking the adventure and learning of a lifetime
                            through work and travel programs. Our platform was born f rom a simple vision: to empower students to make informed
                            decisions about work and travel agencies by providing a transparent, user-driven community where experiences are
                            shared f reely and honestly.  </Typography>
                        <Typography sx={{
                            textAlign: 'left',
                            fontSize: "13.5px",
                            mt: 2.5,
                            lineHeight: 1.3,
                        }}>
                            At Work&Travel Guide, we understand that choosing the right agency can significantly influence your experience
                            and outcomes. That’s why we’ve dedicated ourselves to compiling a comprehensive directory of agencies, complete
                            with reviews and ratings posted by students just like you. Whether you’re planning to explore the beaches of
                            Miami, teach English in New York, or immerse yourself in the culture of USA, our platform offers invaluable
                            insights into the myriad of programs available abroad.
                        </Typography>
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
                                src="images/group1.jpeg" // Update with your image path
                                alt="Picture"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to bottom right, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0.8) 100%)',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Stack direction="row" spacing={1.5} sx={{ ml: 11, mt: 12 }}>
                    <Container maxWidth="xs" >
                        <Card variant="outlined"
                            sx={{
                                borderColor: 'black', // Black border color
                                borderTopWidth: '2px',
                                borderLeftWidth: '1.8px',
                                borderRightWidth: '4px',
                                borderBottomWidth: '4px',
                                borderRadius: "20px",
                                height: "400px",
                                width: "350px",
                                display: 'flex',
                                flexDirection: 'column',
                                pl: '20px', // Add padding for inner content
                                pr: "20px"
                            }}>
                            <CardMedia
                                component="img"
                                src="images/todolist.png" // Update with your image path
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
                                Our mission</Typography>
                            <Typography sx={{
                                fontSize: "14px",
                                mt: 2,
                                textAlign: 'left',
                                lineHeight: 1.3,
                            }}>
                                Our mission is straightforward: to provide a trustworthy, easy-to- navigate
                                platform where students can both share and learn f rom real- world experiences.
                                We strive to foster a supportive community that values transparency and detailed feedback.
                                This not only helps students navigate their options but also holds agencies accountable for the services
                                they provide. </Typography>
                        </Card>
                    </Container>
                    <Container maxWidth="xs" >
                        <Card variant="outlined"
                            sx={{
                                borderColor: 'black', // Black border color
                                borderTopWidth: '2px',
                                borderLeftWidth: '1.8px',
                                borderRightWidth: '4px',
                                borderBottomWidth: '4px',
                                borderRadius: "20px",
                                height: "400px",
                                width: "350px",
                                display: 'flex',
                                flexDirection: 'column',
                                pl: '20px', // Add padding for inner content
                                pr: "20px"
                            }}>
                            <CardMedia
                                component="img"
                                src="images/atdesk.png" // Update with your image path
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
                                How it works</Typography>
                            <Typography sx={{
                                fontSize: "14px",
                                mt: 2,
                                textAlign: 'left',
                                lineHeight: 1.3,
                            }}>
                                Work&Travel Guide allows you to browse reviews based on location, cost, support, and overall experience. Each review is written by
                                peers who have navigated the complexities of choosing a program and are eager to share their unfiltered experiences.
                                Moreover, we encourage you to contribute your own insights upon returning f rom your adventure, thereby growing our community’s
                                knowledge and helping future travelers. </Typography>
                        </Card>
                    </Container>
                    <Container maxWidth="xs" >
                        <Card variant="outlined"
                            sx={{
                                borderColor: 'black', // Black border color
                                borderTopWidth: '2px',
                                borderLeftWidth: '1.8px',
                                borderRightWidth: '4px',
                                borderBottomWidth: '4px',
                                borderRadius: "20px",
                                height: "400px",
                                width: "350px",
                                display: 'flex',
                                flexDirection: 'column',
                                pl: '20px', // Add padding for inner content
                                pr: "20px"
                            }}>
                            <CardMedia
                                component="img"
                                src="images/partners.png" // Update with your image path
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
                                Join our community</Typography>
                            <Typography sx={{
                                fontSize: "14px",
                                mt: 2,
                                textAlign: 'left',
                                lineHeight: 1.3,
                            }}>
                                By joining Work&Travel Guide, you’re not just planning another  trip; you’re arming yourself with  knowledge and connecting with a
                                community of like-minded adventurers. Whether you re looking for the safest program, the best value, or the most comprehensive cultural
                                immersion, our platform is your go-to guide for all things work and travel </Typography>
                        </Card>
                    </Container>
                </Stack>
                <Grid container spacing={10} sx={{ ml: 20, mt: 4, }}>
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
                                src="images/friends at beach.jpg" // Update with your image path
                                alt="Picture"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to bottom right, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0.8) 100%)',
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{
                            textAlign: 'left',
                            fontSize: "15px",
                            mt: 2
                        }}
                        >Work&Travel Guide </Typography>
                        <Typography sx={{
                            textAlign: 'left',
                            fontSize: "21px",
                            fontWeight: "800",
                        }}>
                            Connect with us </Typography>
                        <Typography sx={{
                            textAlign: 'left',
                            fontSize: "13.5px",
                            mt: 2.5,
                            lineHeight: 1.3,
                        }}>
                            Have questions or need guidance? Our dedicated team is here to help. Contact us through our website,
                            and follow us on social media to stay updated on the latest reviews and tips f rom fellow travelers.
                            At Work&Travel Guide, we’re more than just a platform; we’re a community that travels together  </Typography>
                        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                            <EmailIcon />
                            <Typography>contact@workandtravelguide.com</Typography>
                        </Stack>
                        <Button
                            variant="outlined"
                            sx={{
                                ml: -45,
                                mt: 3,
                                width: "120px",
                                height: "45px",
                                borderTopLeftRadius: '50px',
                                borderTopRightRadius: '50px',
                                borderBottomLeftRadius: '50px',
                                borderBottomRightRadius: '50px',
                                color: 'white',
                                fontWeight: "600",
                                fontSize: "15px",
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
                            }}>
                            Contact
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
            </ThemeProvider>
        </>
    )
}