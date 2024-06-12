import { Box, Button, CardMedia, Container, Link, ThemeProvider, Typography, createTheme } from "@mui/material";
import HeaderComponent from "./appbar";
import Footer from "./footer";
import { useState, useEffect } from "react";
import { Profile } from "../models/profile";

export default function HomePage() {

    const [userProfile, setUserProfile] = useState<Profile | null>(null);

    const theme = createTheme({
        typography: {
            fontFamily: 'Open Sans',
        },
    });

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (!token) {
                    throw new Error("Authentication token not found in localStorage");
                }
                const response = await fetch(
                    "https://localhost:7163/api/Profile/GetProfile",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setUserProfile(data);
            } catch (error) {
                console.error("Unknown error occurred:", error);
            }
        };
        fetchUserProfile();
        console.log(userProfile?.name);
    }, []);
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
                                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 100%)',
                                }}
                            ></Box>
                            <CardMedia
                                component="img"
                                src="images/airplane2.jpg"
                                alt="Picture"
                                sx={{
                                    width: '100%',
                                    borderRadius: '12px',
                                    mt: 0,
                                    mx: 'auto',
                                }}
                            />
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{
                                    position: 'absolute',
                                    top: '35%',
                                    left: '22.8%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'black',
                                    fontSize: '67px',
                                    fontWeight: '900',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                    textAlign: 'center',
                                }}
                            >
                                Find Your Ideal
                            </Typography>
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{
                                    position: 'absolute',
                                    top: '45%',
                                    left: '30%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'black',
                                    fontSize: '67px',
                                    fontWeight: '900',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                    textAlign: 'center',
                                }}
                            >
                                Work&Travel Agency
                            </Typography>
                            {userProfile ? (
                                <Box sx = {{ ml: 55}}> 
                                <Typography sx={{
                                    position: 'absolute',
                                    top: '57%',
                                    left: '32%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'black',
                                    fontSize: '28px',
                                    fontWeight: '900',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                    textAlign: 'center',
                                }}>
                                    Hello <span style={{ color: "#F41515" }}>{userProfile.name}</span>! Welcome to our community!
                                </Typography>
                                </Box>
                            ) : (
                                <Button
                                    variant="contained"
                                    sx={{
                                        position: 'absolute',
                                        top: '57%',
                                        left: '10%',
                                        height: "50px",
                                        width: "130px",
                                        borderTopLeftRadius: '50px',
                                        borderTopRightRadius: '50px',
                                        borderBottomLeftRadius: '50px',
                                        borderBottomRightRadius: '50px',
                                        transform: 'translate(-50%, -50%)',
                                        color: 'white',
                                        fontWeight: "600",
                                        fontSize: "18px",
                                        textTransform: 'capitalize',
                                        backgroundColor: "#F45151",
                                        textAlign: 'center',
                                        borderColor: 'black',
                                        borderTopWidth: '1px',
                                        borderLeftWidth: '1px',
                                        borderRightWidth: '2px',
                                        borderBottomWidth: '3px',
                                        '&:hover': {
                                            backgroundColor: "#F45151"
                                        },
                                    }}
                                > <Link
                                    href="/login"
                                    sx={{
                                        color: "white",
                                        textDecoration: 'none',
                                        '&:hover': {
                                            color: "white"
                                        },
                                    }}>
                                        Log in </Link>
                                </Button>)}
                        </Box>
                    </Container>
                </Box>
                <Footer />
            </ThemeProvider>
        </>
    )
}