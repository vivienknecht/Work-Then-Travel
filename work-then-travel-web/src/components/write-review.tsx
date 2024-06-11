import { Box, Button, Card, Rating, Stack, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import styled from "@emotion/styled";
import StarsIcon from '@mui/icons-material/Stars';
import { ReviewInput } from "../models/reviewInput-model";
import React, { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import { Agency } from "../models/agency-model";


export default function WriteReview() {
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

    const [agency, setAgency] = useState<Agency | null>(null);
    const location = useLocation();
    const name = location.state?.name;

    const [rating, setRating] = useState<number | null>(0); 
    const [reviews, setReviews] = useState<string>('');
    const [dateTime, setDateTime] = React.useState<Dayjs | null>(dayjs());
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (!token) {
                    throw new Error("Authentication token not found in localStorage");
                }
                const response = await fetch(
                    `https://localhost:7163/api/Agency/GetAgencyByName/${name}`,
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
                setAgency(data);
            } catch (error) {
                console.error("Unknown error occurred:", error);
            }
        };
        fetchData();
    }, [name]);

    const token = localStorage.getItem("authToken");
    
    const addReview = async () =>{
    
        const reviewData : ReviewInput ={
            dateTime : dateTime?.toDate() || new Date(),
            rating: rating || 0,
            reviews: reviews,
            agencyName: agency?.name || '',
        };
      
       try {
        await fetch("https://localhost:7163/api/Reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(reviewData), 
        });
        setRedirect(true);
        window.location.reload();
      } catch(error) {
        console.error("Failed to submit review:", error);
    }
    };

    return (
        <>
        <ThemeProvider theme={theme}>
            <Card variant="outlined"
                sx={{
                    borderColor: 'black', 
                    borderTopWidth: '2px',
                    borderLeftWidth: '1.8px',
                    borderRightWidth: '4px',
                    borderBottomWidth: '4px',
                    borderRadius: "20px",
                    height: "400px",
                    width: "850px",
                    display: 'flex',
                    flexDirection: 'column',
                    pl: '20px',
                    pr: "20px",
                    ml: 15,
                    mt: 5, 
                    mb: 7
                }}>
             <Typography sx = {{
                 mt: 4,
                 ml: 3,
                 fontSize: "20px",
                 fontWeight: "600",
             }}>
                Write your review here:</Typography>
                <TextField  variant="standard"  multiline maxRows={10} placeholder="Review......." 
                value={reviews}
                onChange={(e) => setReviews(e.target.value)}
                sx = {{
                    width: "600px",
                    height: "300px",
                    ml: 5,
                    mt: 2
                }}/>
                <Stack direction="row" spacing={2} sx = {{ ml: 5, mt: -4 }}>
                    <Typography sx = {{  fontWeight: "600" }} >Leave your rating:</Typography>
                <StyledRating
                                name="customized-color"
                                defaultValue={2}
                                value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                                getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={1}
                                icon={<StarsIcon fontSize="inherit" />}
                                emptyIcon={<StarsIcon fontSize="inherit" />}
                                size="large"
                            />
                            </Stack>
                            <Box sx = {{display: 'flex', justifyContent: 'flex-end', mt: -4, mr: 5 }}>
                            <Button variant="outlined" onClick={addReview}
                            sx={{
                                width: "200px",
                                height: "40px",
                                borderTopLeftRadius: '50px',
                                borderTopRightRadius: '50px',
                                borderBottomLeftRadius: '50px',
                                borderBottomRightRadius: '50px',
                                color: 'white',
                                fontWeight: "600",
                                fontSize: "17px",
                                textTransform: 'capitalize',
                                backgroundColor: "#F45151",
                                borderColor: 'black', 
                                borderTopWidth: '1px',
                                borderLeftWidth: '1px',
                                borderRightWidth: '2px',
                                borderBottomWidth: '3px',
                                '&:hover': {
                                    backgroundColor: "#F45151"
                                },
                            }}>
                                Submit review
                                </Button>
                            </Box>
            </Card>
            </ThemeProvider>
        </>
    )
}