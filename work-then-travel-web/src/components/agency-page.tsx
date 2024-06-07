import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import { Avatar, Box, Button, createTheme, Divider, Rating, Stack, ThemeProvider, Typography } from "@mui/material";
import HeaderComponent from "./appbar";
import Footer from "./footer";
import WriteReview from './write-review';
import AgencyInfo from './agency-info';
import { Review } from '../models/review-model';
import { useLocation, useNavigate, } from 'react-router-dom';

export default function AgencyPage() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Open Sans',
        },
    });

    const SEGMENTS_PER_PAGE = 4;
    const [currentPage, setCurrentPage] = useState(0);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const [review, setReview] = useState<Review[] | null>(null);
    const location = useLocation();
    const name = location.state?.name;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (!token) {
                    throw new Error("Authentication token not found in localStorage");
                }
                const response = await fetch(
                    `https://localhost:7163/api/Reviews/${name}`,
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
                console.log(name)
                const data = await response.json();
                setReview(data);

            } catch (error) {
                console.error("Unknown error occurred:", error);
            }
        };
        fetchData();
    }, [name]);

    const paginatedReviews = review ? review.slice(currentPage * SEGMENTS_PER_PAGE, (currentPage + 1) * SEGMENTS_PER_PAGE) : [];
    
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ mt: 48, mb: 7, ml: 20 }}>
                    <HeaderComponent />
                </Box>
                <AgencyInfo />
                <div>
                {review?.length === 0 ? (
                        <Typography variant="h6" color="textSecondary" sx={{ mt: 20 }}>
                            There are no reviews yet.
                        </Typography>
                    ) : (
                        paginatedReviews?.map((review: Review) => (
                            <React.Fragment key={review.reviewID} >
                            <Box sx={{ ml: 17, mr: 85, mt: 3, mb: 3 }}>
                                <Stack direction="row" spacing={3.5}>
                                    <Avatar sx={{ height: "78px", width: "78px" }} />
                                    <Stack direction="column" spacing={1} sx={{ pt: 1 }}>
                                        <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
                                            {review.username}
                                        </Typography>
                                        <Typography sx={{ lineHeight: 1 }}>
                                            {review.reviews}
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
                    )))}
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
                            disabled={!review || (currentPage + 1) * SEGMENTS_PER_PAGE >= review.length}
                        >
                            Next
                        </Button>
                    </Box>
                </div>
                <WriteReview />
                <Footer />
            </ThemeProvider>
        </>
    )
}

