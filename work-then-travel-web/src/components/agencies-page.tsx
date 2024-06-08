import { Box, Card, CardMedia, Container, Divider, Link, Stack, Typography, createTheme } from "@mui/material";
import HeaderComponent from "./appbar"
import Footer from "./footer"
import { ThemeProvider } from "@emotion/react";
import { Agency } from "../models/agency-model";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AgenciesPage() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Open Sans',
        },
    });

    const [agency, setAgency] = useState<Agency[] | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAgencies = async () => {
            try {
                const token = localStorage.getItem("authToken");

                if (!token) {
                    throw new Error("Authentication token not found in localStorage");
                }

                const response = await fetch("https://localhost:7163/api/Agency/GetALLAgencies", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setAgency(data);
                console.log(data);
            } catch (error) {
                console.error("Unknown error occurred:", error);
            }
        };
        fetchAgencies();
    }, []);

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
                                    Write a review </Typography>
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
                    {agency?.length === 0 ? (
                        <Typography variant="h6" color="textSecondary" sx={{ mt: 20, pl: 200}}>
                            There are no Agencies available.
                        </Typography>
                    ) : (
                        agency?.map((agency: Agency) => (
                            <React.Fragment key={agency.agencyID} >
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
                                                    <Typography sx={{ fontSize: "40px", fontWeight: "600", color: "#F45151" }}>
                                                        {agency?.name}
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Divider orientation="vertical" flexItem sx={{ mt: 3, mb: 3, backgroundColor: "black", borderRightWidth: 2 }} />
                                            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                                <Stack direction="column" spacing={1} sx={{ ml: 2.5, width: '100%' }}>
                                                    <Typography sx={{ textAlign: 'left', color: 'black', fontSize: "17px", fontWeight: "500" }}>
                                                        {agency?.description}
                                                    </Typography>
                                                    <Typography sx={{ textAlign: 'left', pt: 3, color: 'black', fontSize: "17px", }}>See all details
                                                        <Link component="button" disabled={!agency}
                                                            onClick={() => {
                                                                console.log("Agency ID:", agency.name); // Add your console log here
                                                                navigate(`/agency/${agency.name}`, { state: { name: agency.name } });
                                                            }}
                                                            sx={{ color: "#F45151", textDecoration: "none" }}>
                                                            {'>>'}
                                                        </Link>
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Container>
                            </React.Fragment>))
                    )}
                </Box>
                <Footer />
            </ThemeProvider>
        </>
    )
}
