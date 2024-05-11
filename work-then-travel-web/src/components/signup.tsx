import { Box, Button, Card, Container, Link, Stack, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import HeaderComponent from "./appbar";
import Footer from "./footer";

export default function Signup() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Open Sans',
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
            <Box sx={{ mt: 52, mb: 7 }}>
                <HeaderComponent />
            </Box>
            <Box sx={{ ml: 40, mb: 5 }}>
                <Typography sx={{
                    fontWeight: "900",
                    fontSize: "45px",
                    color: "black",
                }}
                >
                    Sign up</Typography>
            </Box>
            <Box sx={{ textAlign: "center", mb: 12 }}>
                <Container maxWidth="md" >
                    <Card variant="outlined"
                        sx={{
                            borderColor: 'black',
                            borderTopWidth: '2px',
                            borderLeftWidth: '1.8px',
                            borderRightWidth: '4px',
                            borderBottomWidth: '4px',
                            height: "600px"
                        }}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                            sx={{ mt: 6 }}
                        >
                            <Stack direction="column" alignItems="flex-start" spacing={1.5}
                            >
                                <Typography sx={{
                                    pl: 1.7
                                }}>
                                    <span style={{ color: "black", fontWeight: "600" }}>Name</span>
                                    <span style={{ color: "#F45151", fontWeight: "600" }}>*</span>
                                </Typography>
                                <TextField sx={{
                                    width: "765px",
                                    pl: 2,
                                }} />
                            </Stack>
                            <Stack direction="column" alignItems="flex-start" spacing={1.5} >
                                <Typography sx={{
                                    pl: 1.7
                                }}>
                                    <span style={{ color: "black", fontWeight: "600" }}>Email Address</span>
                                    <span style={{ color: "#F45151", fontWeight: "600" }}>*</span>
                                </Typography>
                                <TextField sx={{
                                    width: "765px",
                                    pl: 2,
                                }} />
                            </Stack>
                            <Stack direction="column" alignItems="flex-start" spacing={1.5} >
                                <Typography sx={{
                                    pl: 1.7
                                }}>
                                    <span style={{ color: "black", fontWeight: "600" }}>Password</span>
                                    <span style={{ color: "#F45151", fontWeight: "600" }}>*</span>
                                </Typography>
                                <TextField sx={{
                                    width: "765px",
                                    pl: 2,
                                }} />
                            </Stack>
                            <Stack direction="column" alignItems="flex-start" spacing={1.5} >
                                <Typography sx={{
                                    pl: 1.7
                                }}>
                                    <span style={{ color: "black", fontWeight: "600" }}>Confirm Password</span>
                                    <span style={{ color: "#F45151", fontWeight: "600" }}>*</span>
                                </Typography>
                                <TextField sx={{
                                    width: "765px",
                                    pl: 2,
                                }} />
                            </Stack>
                        </Stack>
                        <Stack direction="row" spacing={2.5} sx={{
                            mt: 5,
                            ml: 8
                        }}>
                            <Button variant="outlined" sx={{
                                width: "100px",
                                height: "50px",
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
                            }}
                            >Sign up</Button>
                            <Typography sx={{
                                pt: 2,
                                fontWeight: "600",
                            }}

                            >If you already have an account, click <Link href="/login" sx={{ color: "#F45151", }}>here</Link> to log in.</Typography>
                        </Stack>
                    </Card>
                </Container>
            </Box>
            <Footer />
            </ThemeProvider>
        </>
    )
} 