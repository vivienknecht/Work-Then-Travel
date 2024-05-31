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
import AgencyInfo from './agency-info';

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
                <Box sx={{ mt: 48, mb: 7, ml: 20 }}>
                    <HeaderComponent />
                </Box>
                <AgencyInfo />
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