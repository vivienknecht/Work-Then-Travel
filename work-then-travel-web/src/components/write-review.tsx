import { Box, Button, Card, Rating, Stack, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import styled from "@emotion/styled";
import StarsIcon from '@mui/icons-material/Stars';

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

    return (
        <>
        <ThemeProvider theme={theme}>
            <Card variant="outlined"
                sx={{
                    borderColor: 'black', // Black border color
                    borderTopWidth: '2px',
                    borderLeftWidth: '1.8px',
                    borderRightWidth: '4px',
                    borderBottomWidth: '4px',
                    borderRadius: "20px",
                    height: "400px",
                    width: "850px",
                    display: 'flex',
                    flexDirection: 'column',
                    pl: '20px', // Add padding for inner content
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
                <TextField  variant="standard"  multiline maxRows={10} placeholder="Review......." sx = {{
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
                                getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
                                icon={<StarsIcon fontSize="inherit" />}
                                emptyIcon={<StarsIcon fontSize="inherit" />}
                                size="large"
                            />
                            </Stack>
                            <Box sx = {{display: 'flex', justifyContent: 'flex-end', mt: -4, mr: 5 }}>
                            <Button variant="outlined"
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
                                borderColor: 'black', // Black border color
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