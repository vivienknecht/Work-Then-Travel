import styled from "@emotion/styled";
import { Box, Button, Card, Divider, Grid, Link, Rating, Stack, Typography } from "@mui/material";
import StarsIcon from '@mui/icons-material/Stars';
import PlaceIcon from '@mui/icons-material/Place';
import PeopleIcon from '@mui/icons-material/People';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import DoneIcon from '@mui/icons-material/Done';
import { BarChart } from '@mui/x-charts/BarChart';
import { useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Agency } from "../models/agency-model";
import { AgencyRatings } from "../models/agencyRatings-model";

export default function AgencyInfo() {

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
    const [ratings, setRatings] = useState<AgencyRatings[]>([]);
    const [averageRating, setAverageRating] = useState<number>(0);
    const [ratingCounts, setRatingCounts] = useState<number[]>([]);
    const navigate = useNavigate();

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
                const data = await response.json();
                setAgency(data);

            } catch (error) {
                console.error("Unknown error occurred:", error);
            }
        };
        fetchData();
    }, [name]);

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (!token) {
                    throw new Error("Authentication token not found in localStorage");
                }
                const response = await fetch(
                    `https://localhost:7163/api/Reviews/GetAgencyRatings/${name}`,
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
                setRatings(data);
    
                const totalRating = data.reduce((sum: any, review: { rating: any; }) => sum + (review.rating || 0), 0);
                const average = totalRating / data.length;
                setAverageRating(average);
                const counts = new Array(5).fill(0); 
        ratings.forEach((review) => {
            if (review.rating) {
                counts[review.rating - 1]++; 
            }
        });
        setRatingCounts(counts);
            } catch (error) {
                console.error("Unknown error occurred:", error);
            }
        };
        fetchRatings();
    }, [ratings]);
    return (
        <>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start', ml: 15 }}>
                <Stack direction="column" spacing={1} sx={{}} >
                    <Typography variant="h2"
                        sx={{ fontWeight: "600", color: "black" }}> {agency?.name} </Typography>
                    <Stack direction="row" spacing={1.5} >
                        <StyledRating
                            name="customized-color"
                            value={averageRating}
                            getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                            precision={0.5}
                            icon={<StarsIcon fontSize="inherit" />}
                            emptyIcon={<StarsIcon fontSize="inherit" />}
                            size="large"
                        />
                        <Typography sx={{ fontSize: "18px" }}>
                        {ratings.length} reviews
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
            <Grid container spacing={10} sx={{ mb: -8 }}>
                <Grid item xs={6} sx={{ ml: 25 }}>
                    <Card variant="outlined"
                        sx={{
                            borderColor: 'black',
                            borderTopWidth: '2px',
                            borderLeftWidth: '1.8px',
                            borderRightWidth: '4px',
                            borderBottomWidth: '4px',
                            borderRadius: "20px",
                            height: "180px",
                            width: "750px",
                            display: 'flex',
                            flexDirection: 'column',
                            pl: '20px', 
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
                                        <Typography sx={{ fontSize: "20px", fontWeight: "600", pt: -5, pl: -10 }} > {agency?.numberOfLocations} </Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                            <Divider orientation="vertical" flexItem sx={{ mt: 3, mb: 3, backgroundColor: "black", borderRightWidth: 3 }} />
                            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Stack direction="column" spacing={1.5}>
                                    <Typography sx={{ fontSize: "30px", fontWeight: "400", pt: -5, pl: -10 }}>Students</Typography>
                                    <Stack direction="row" spacing={0.5}>
                                        <PeopleIcon sx={{ height: "35px" }} />
                                        <Typography sx={{ fontSize: "20px", fontWeight: "600", pt: -5, pl: -10 }} > {agency?.numberOfStudents} </Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                            <Divider orientation="vertical" flexItem sx={{ mt: 3, mb: 3, backgroundColor: "black", borderRightWidth: 3 }} />
                            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Stack direction="column" spacing={1.5} sx={{ pl: 3 }} >
                                    <Typography sx={{ fontSize: "30px", fontWeight: "400", pt: -5, pl: -10 }}> Years of activity</Typography>
                                    <Stack direction="row" spacing={0.5} sx={{ pl: 0.5 }}>
                                        <DoneIcon sx={{ height: "35px" }} />
                                        <Typography sx={{ fontSize: "20px", fontWeight: "600", pt: -5, pl: -10 }} > {agency?.yearOfFundation} </Typography>
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
                            borderColor: 'black', 
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
                                    value={averageRating}
                                    getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    icon={<StarsIcon fontSize="inherit" />}
                                    emptyIcon={<StarsIcon fontSize="inherit" />}
                                    size="large"
                                />
                                <Typography>
                                {ratings.length} reviews
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                        <BarChart
                    xAxis={[
                        {
                            id: 'stars',
                            data: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'], 
                            scaleType: 'band',
                        },
                    ]}
                    series={[
                        {
                            data: ratingCounts, 
                            color: '#F45151',
                        },
                    ]}
                    yAxis={[
                        {
                            id: 'counts',
                            scaleType: 'linear', 
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
                            borderColor: 'black', 
                            borderTopWidth: '2px',
                            borderLeftWidth: '1.8px',
                            borderRightWidth: '4px',
                            borderBottomWidth: '4px',
                            borderRadius: "20px",
                            height: "700px",
                            width: "500px",
                            display: 'flex',
                            flexDirection: 'column',
                            pl: '20px', 
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
                                {agency?.description}
                            </Typography>
                            <Typography sx={{ fontSize: "35px", fontWeight: "600", pt: 5 }}>
                                Contact
                            </Typography>
                            <Stack direction="row" spacing={0.5}>
                                <EmailIcon />
                                <Typography> {agency?.emailAddress} </Typography>
                            </Stack>
                            <Stack direction="row" spacing={0.5}>
                                <PhoneInTalkIcon />
                                <Typography> {agency?.phoneNumber} </Typography>
                            </Stack>
                            <Stack direction="row" spacing={0.5} sx={{ pb: 3 }}>
                                <PlaceIcon />
                                <Typography> {agency?.address} </Typography>
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
                                    borderColor: 'black', 
                                    borderTopWidth: '1px',
                                    borderLeftWidth: '1px',
                                    borderRightWidth: '2px',
                                    borderBottomWidth: '3px',
                                    '&:hover': {
                                        backgroundColor: "#F45151"
                                    },
                                }}>
                                <Link href={agency?.websiteLink}
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
        </>
    )
}