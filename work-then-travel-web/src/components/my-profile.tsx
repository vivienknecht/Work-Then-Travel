import { ThemeProvider } from "@emotion/react";
import { Box, Typography, Container, Card, Stack, TextField, Button, createTheme, Avatar } from "@mui/material";
import HeaderComponent from "./appbar";
import Footer from "./footer";
import UploadFileIcon from '@mui/icons-material/UploadFile';

export default function MyProfile() {

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
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    ml: 40,
                    mb: 5,
                    mr: 40
                }}>
                    <Typography sx={{
                        fontWeight: "900",
                        fontSize: "45px",
                        color: "black",
                    }}>
                        My Account
                    </Typography>
                    <Button sx={{
                        backgroundColor: "black",
                        width: "100px",
                        height: "35px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 8px",
                        borderRadius: "12px",
                        textTransform: "capitalize",
                        fontSize: "17px",
                        color: "white",
                        '&:hover': {
                            backgroundColor: "black"
                        },
                    }}>
                        Log out
                    </Button>
                </Box>
                <Box sx={{ textAlign: "center", mb: 12 }}>
                    <Container maxWidth="md" >
                        <Box component="form"
                        >
                            <Card variant="outlined"
                                sx={{
                                    borderColor: 'black', // Black border color
                                    borderTopWidth: '2px',
                                    borderLeftWidth: '1.8px',
                                    borderRightWidth: '4px',
                                    borderBottomWidth: '4px',
                                    height: "610px"
                                }}>
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}
                                    sx={{ mt: 5 }}
                                >
                                    <Stack direction="column" alignItems="flex-start" spacing={1.5}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "25px",
                                                pt: -1,
                                                pb: 1,
                                                pl: 1.5,
                                                color: "black",
                                                fontWeight: "600"
                                            }}>
                                            Account Details</Typography>
                                        <Typography sx={{
                                            pl: 1.7,
                                            color: "black",
                                            fontWeight: "600"
                                        }}>
                                            Name
                                        </Typography>
                                        <TextField
                                            sx={{
                                                width: "765px",
                                                pl: 2,
                                                borderRadius: "40px"
                                            }} />
                                    </Stack>
                                    <Stack direction="column" alignItems="flex-start" spacing={1.5} >
                                        <Typography sx={{
                                            pl: 1.7,
                                            color: "black",
                                            fontWeight: "600"
                                        }}>
                                            Email Address
                                        </Typography>
                                        <TextField
                                            id="password"
                                            name="password"
                                            sx={{
                                                width: "765px",
                                                pl: 2,
                                            }} />
                                    </Stack>
                                </Stack>
                                <Stack direction="column" alignItems="flex-start" >
                                    <Typography sx={{
                                        ml: 6.5,
                                        mt: 1.5,
                                        color: "black",
                                        fontWeight: "600",
                                        fontSize: "18px"
                                    }}>
                                        Avatar
                                    </Typography>
                                    <Avatar
                                        alt="V"
                                        src="/static/images/avatar/1.jpg"
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            ml: 7,
                                            mt: 2
                                        }}
                                    />
                                    <Button sx={{
                                        backgroundColor: "black",
                                        width: "170px",
                                        height: "32px",
                                        mt: 2,
                                        ml: 6.5,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        padding: "0 8px",
                                        borderRadius: "12px",
                                        textTransform: "capitalize",
                                        '&:hover': {
                                            backgroundColor: "black"
                                        },

                                    }}>
                                        <UploadFileIcon sx={{ color: "white" }} />
                                        <Typography sx={{
                                            color: "white",
                                            ml: 1
                                        }}>
                                            Change Avatar
                                        </Typography>
                                    </Button>

                                    <Stack direction="row" spacing={2.5} sx={{
                                        mt: 4.5,
                                        ml: 6.5
                                    }}>
                                        <Button variant="outlined"
                                            type="submit"
                                            sx={{
                                                width: "150px",
                                                height: "50px",
                                                borderTopLeftRadius: '50px',
                                                borderTopRightRadius: '50px',
                                                borderBottomLeftRadius: '50px',
                                                borderBottomRightRadius: '50px',
                                                color: 'white',
                                                fontWeight: "600",
                                                fontSize: "17px",
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
                                        >Save Changes</Button>
                                    </Stack>
                                </Stack>
                            </Card>
                        </Box>
                    </Container>
                </Box>
                <Footer />
            </ThemeProvider>
        </>
    )
}