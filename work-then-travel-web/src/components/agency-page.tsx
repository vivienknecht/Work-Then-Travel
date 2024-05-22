import React, { useState } from 'react';
import styled from "@emotion/styled";
import { Avatar, Box, Button, Card, createTheme, Divider, Grid, Link, Rating, Stack, ThemeProvider, Typography } from "@mui/material";
import HeaderComponent from "./appbar";
import Footer from "./footer";
import StarsIcon from '@mui/icons-material/Stars';
import PlaceIcon from '@mui/icons-material/Place';
import PeopleIcon from '@mui/icons-material/People';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import DoneIcon from '@mui/icons-material/Done';
import { BarChart } from '@mui/x-charts/BarChart';
import WriteReview from './write-review';

export default function AgencyPage() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Open Sans',
        },
    });
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#F45151',
        },
        '& .MuiRating-iconHover': {
            color: '#F45151',
        },
    });

    const segmentsData = [
        // Add your data objects here
        { name: 'Name1', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,  totam rem aperiam, eaque ipsa quae ab ill     inventore veritatis et quasi architecto beatae vitae   dicta sunt explicabo. Nemo enim ipsam voluptatem' },
        { name: 'Name2', description: 'Description2' },
        { name: 'Name3', description: 'Description3' },
        { name: 'Name4', description: 'Description4' },
        { name: 'Name5', description: 'Description5' },
        { name: 'Name6', description: 'Description6' },
        { name: 'Name7', description: 'Description7' },
        { name: 'Name8', description: 'Description8' },
        { name: 'Name5', description: 'Description5' },
        { name: 'Name6', description: 'Description6' },
        { name: 'Name7', description: 'Description7' },
        { name: 'Name8', description: 'Description8' },
        // ... add more segments if needed
    ];

    const SEGMENTS_PER_PAGE = 4;


    const [currentPage, setCurrentPage] = useState(0);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const currentSegments = segmentsData.slice(
        currentPage * SEGMENTS_PER_PAGE,
        (currentPage + 1) * SEGMENTS_PER_PAGE
    );


    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ mt: 48, mb: 7 }}>
                    <HeaderComponent />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start', ml: 15 }}>
                    <Stack direction="column" spacing={1} sx={{}} >
                        <Typography variant="h2"
                            sx={{ fontWeight: "600", color: "black" }}> See US Work&Travel </Typography>
                        <Stack direction="row" spacing={1.5} >
                            <StyledRating
                                name="customized-color"
                                defaultValue={2}
                                getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
                                icon={<StarsIcon fontSize="inherit" />}
                                emptyIcon={<StarsIcon fontSize="inherit" />}
                                size="large"
                            />
                            <Typography sx={{ fontSize: "18px" }}>
                                20 reviews
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
                <Grid container spacing={10} sx={{ mb: -8 }}>
                    <Grid item xs={6} sx={{ ml: 25 }}>
                        <Card variant="outlined"
                            sx={{
                                borderColor: 'black', // Black border color
                                borderTopWidth: '2px',
                                borderLeftWidth: '1.8px',
                                borderRightWidth: '4px',
                                borderBottomWidth: '4px',
                                borderRadius: "20px",
                                height: "180px",
                                width: "750px",
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
                                    <Stack direction="column" spacing={1.5}>
                                        <Typography sx={{ fontSize: "30px", fontWeight: "400", pt: -5, pl: -10 }}>Locations</Typography>
                                        <Stack direction="row" spacing={0.5}>
                                            <PlaceIcon />
                                            <Typography sx={{ fontSize: "20px", fontWeight: "600", pt: -5, pl: -10 }} >more than 50</Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                                <Divider orientation="vertical" flexItem sx={{ mt: 3, mb: 3, backgroundColor: "black", borderRightWidth: 3 }} />
                                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="column" spacing={1.5}>
                                        <Typography sx={{ fontSize: "30px", fontWeight: "400", pt: -5, pl: -10 }}>Students</Typography>
                                        <Stack direction="row" spacing={0.5}>
                                            <PeopleIcon sx={{ height: "35px" }} />
                                            <Typography sx={{ fontSize: "20px", fontWeight: "600", pt: -5, pl: -10 }} >more than 200</Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                                <Divider orientation="vertical" flexItem sx={{ mt: 3, mb: 3, backgroundColor: "black", borderRightWidth: 3 }} />
                                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="column" spacing={1.5} sx={{ pl: 3 }} >
                                        <Typography sx={{ fontSize: "30px", fontWeight: "400", pt: -5, pl: -10 }}> Years of activity</Typography>
                                        <Stack direction="row" spacing={0.5} sx={{ pl: 0.5 }}>
                                            <DoneIcon sx={{ height: "35px" }} />
                                            <Typography sx={{ fontSize: "20px", fontWeight: "600", pt: -5, pl: -10 }} >more than 5</Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Box>
                        </Card>
                        <Button variant="outlined"
                            sx={{
                                mt: 4,
                                ml: -10,
                                width: "250px",
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
                            }}>
                            <StarBorderIcon sx={{ color: "white", mr: 2, fontSize: "30px" }} />
                            Write a review
                        </Button>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography sx={{
                                    fontSize: "30px",
                                    fontWeight: "600",
                                    mt: 3,
                                    ml: -8
                                }}
                                >Reviews</Typography>
                                <Stack direction="column" spacing={1.5} sx={{ mt: 5 }}>
                                    <Typography sx={{
                                        fontSize: "22px",
                                        fontWeight: "600",
                                    }}>
                                        Overall rating</Typography>
                                    <StyledRating
                                        name="customized-color"
                                        defaultValue={2}
                                        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.5}
                                        icon={<StarsIcon fontSize="inherit" />}
                                        emptyIcon={<StarsIcon fontSize="inherit" />}
                                        size="large"
                                    />
                                    <Typography>
                                        20 reviews
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <BarChart
                                    xAxis={[
                                        {
                                            id: 'barCategories',
                                            data: ['bar A', 'bar B', 'bar C'],
                                            scaleType: 'band',
                                        },
                                    ]}
                                    series={[
                                        {
                                            data: [2, 5, 3],
                                            color: '#F45151',
                                        },
                                    ]}
                                    width={500}
                                    height={300}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined"
                            sx={{
                                borderColor: 'black', // Black border color
                                borderTopWidth: '2px',
                                borderLeftWidth: '1.8px',
                                borderRightWidth: '4px',
                                borderBottomWidth: '4px',
                                borderRadius: "20px",
                                height: "700px",
                                width: "500px",
                                display: 'flex',
                                flexDirection: 'column',
                                pl: '20px', // Add padding for inner content
                                pr: "20px",
                                ml: -10,
                                mt: 5
                            }}>
                            <Stack direction="column" spacing={2} sx={{ mt: 5, ml: 2 }}>
                                <Typography sx={{ fontSize: "35px", fontWeight: "600" }}>
                                    Details
                                </Typography>
                                <Typography sx={{
                                    fontSize: "16px",
                                    mt: 2,
                                    textAlign: 'left',
                                    lineHeight: 1.3,
                                }}>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo
                                    inventore veritatis et quasi architecto beatae vitae
                                    dicta sunt explicabo. Nemo enim ipsam voluptatem
                                    quia voluptas sit aspernatur aut odit aut fugit, sed
                                    quia consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt. Neque porro quisquam
                                    est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit, sed quia non numquam
                                    eius modi tempora incidunt ut labor
                                </Typography>
                                <Typography sx={{ fontSize: "35px", fontWeight: "600", pt: 5 }}>
                                    Contact
                                </Typography>
                                <Stack direction="row" spacing={0.5}>
                                    <EmailIcon />
                                    <Typography>contactseeus@gmail.com</Typography>
                                </Stack>
                                <Stack direction="row" spacing={0.5}>
                                    <PhoneInTalkIcon />
                                    <Typography>0733222333</Typography>
                                </Stack>
                                <Stack direction="row" spacing={0.5} sx={{ pb: 3 }}>
                                    <PlaceIcon />
                                    <Typography> Cluj-Napoca, Strada Victor Babes 14</Typography>
                                </Stack>
                                <Button variant="outlined"
                                    sx={{
                                        width: "250px",
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
                                    }}>
                                    <Link href="https://seeusworkandtravel.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: 'white',
                                            textDecoration: "none",
                                            fontSize: "18px",
                                            fontWeight: "400",
                                            '&:hover': {
                                                color: 'white',
                                                backgroundColor: '#f45151',
                                            },
                                            '&:active': {
                                                color: 'white',
                                                backgroundColor: '#f45151',
                                            },
                                        }} >
                                        Check out our website</Link>
                                </Button>
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
                <div>
                    {currentSegments.map((segment, index) => (
                        <React.Fragment key={index}>
                            <Box sx={{ ml: 17, mr: 85, mt: 3, mb: 3 }}>
                                <Stack direction="row" spacing={3.5}>
                                    <Avatar sx={{ height: "78px", width: "78px" }} />
                                    <Stack direction="column" spacing={1} sx={{ pt: 1 }}>
                                        <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
                                            {segment.name}
                                        </Typography>
                                        <Typography sx={{ lineHeight: 1 }}>
                                            {segment.description}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                            <Divider
                                orientation="horizontal"
                                flexItem
                                sx={{
                                    mt: 5,
                                    ml: 17,
                                    width: "860px",
                                    backgroundColor: "black",
                                    borderRightWidth: 5,
                                }}
                            />
                        </React.Fragment>
                    ))}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 4, ml: 63 }}>
                        <Button onClick={handlePreviousPage} disabled={currentPage === 0} sx={{
                            color: "#F45151",
                            textTransform: "capitalize",
                            '&:focus': {
                                outline: "none"
                             },
                        }}>
                            Previous
                        </Button>
                        <Button 
                            sx={{
                                color: "#F45151",
                                textTransform: "capitalize",
                                '&:focus': {
                                   outline: "none"
                                },
                            }}
                            onClick={handleNextPage}
                            disabled={(currentPage + 1) * SEGMENTS_PER_PAGE >= segmentsData.length}
                        >
                            Next
                        </Button>
                    </Box>
                </div>
                );
                <WriteReview />
                <Footer />
            </ThemeProvider>
        </>
    )
}