import { Box, Button, TextField, Typography } from "@mui/material";
export default function YourStory() {

    return (
        <>
            <Box
                sx={{
                    mt: 10,
                    mb: 15,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    sx={{
                        ml: -20.3,
                        mb: 3,
                        mt: -2,
                        color: "#697074",
                        fontSize: "28px",
                        fontFamily: 'Cormorant, sans-serif'
                    }}
                >
                    Share your american adeventures here:
                </Typography>
                <TextField multiline rows={15}
                    variant="outlined"
                    label={
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: 'Cormorant, sans-serif'
                            }}
                        >
                            Your story
                        </Typography>
                    }
                    sx={{
                        width: "90%",
                        backgroundColor: "white",
                    }} />
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    sx={{
                        mt: 3,
                        mb: 2,
                        width: "90%",
                        height: "50px",
                        color: "white",
                        backgroundColor: "#FAA0A0",
                        textTransform: "none",
                        fontSize: "25px",
                        fontWeight: "600",
                        fontFamily: 'Cormorant, sans-serif',
                        "&:hover": {
                            backgroundColor: "#FF7F7F",
                        },
                    }}
                    type="submit"
                >
                    Submit
                </Button>
            </Box>
        </>
    )
}