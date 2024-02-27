import { AppBar, Box, Button, Divider, IconButton, Modal, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import Appbar from "./appbar"
import YourStory from "./share-your-story";

export default function StudentMainPage() {
  const [openReservation, setOpenReservation] = React.useState(false);
  const handleOpenReservation = () => {
    setOpenReservation(true);
  };
  const handleCloseReservation = () => {
    setOpenReservation(false);
  };
  return (
    <>
      <Appbar />
      <Box
        margin={1}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="flex-end"
        sx={{
          top: 100,
          right: "60%",
          marginRight: -100,
          position: "absolute",
        }}
      >
        <Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{
            height: "60px",
            width: "220px",
            color: "white",
            backgroundColor: "#FAA0A0",
            textTransform: "none",
            marginBottom: 2,
            marginTop: 2,
            fontSize: "22px",
            fontWeight: "600",
            fontFamily: 'Cormorant, sans-serif',
            "&:hover": {
              backgroundColor: "#FF7F7F",
            },
          }}
          onClick={handleOpenReservation}
        >
          What's your story?
        </Button>

        <Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{
            height: "60px",
            width: "220px",
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
        >
          Agencies
        </Button>
        </Box>
        <Modal
          open={openReservation}
          aria-labelledby="modal-modal-title">
          <Box 
          sx = {{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 650,
            height: 600,
            bgcolor: "background.paper",
            boxShadow: 5,
            borderRadius: 1,
            p: 3,
          }}
          >
            <AppBar position="fixed" sx={{ width: "100%", backgroundColor: "#FAA0A0" }}>
              <Toolbar disableGutters>
                <FlightOutlinedIcon
                  sx={{
                    display: { xs: "none", md: "flex" },
                    mr: 1,
                    fontSize: 28,
                    marginLeft: 3,
                  }}
                />{" "}
                <Typography component="div" 
                sx={{
                  fontFamily: 'Cormorant, sans-serif',
                  fontSize: "25px",
                  fontWeight: "600",
                  }}>
                  Work Then Travel
                </Typography>
                <IconButton
                  sx={{ marginLeft: 50 }}
                  onClick={handleCloseReservation}
                >
                  <CloseIcon sx={{ color: "white" }} />
                </IconButton>
              </Toolbar>
            </AppBar>
            <YourStory/>
          </Box>
        </Modal>
        <Box
        sx={{
          flexGrow: 1,
          marginTop: -38,
          marginLeft: 8,
          marginRight: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <React.Fragment>
          <Box marginTop={6}>
            <Stack
              direction="column"
              spacing={5}
              divider={<Divider orientation="vertical" flexItem />}
              sx={{
                backgroundColor: "rgba(229, 228, 226, 0.7)",
                padding: "10px",
                borderRadius: "4px",
                width: "1000px",
                height: "auto"
              }}
            >
              <Stack direction="column" alignItems="center" spacing={2}>

                <Stack direction="column">
                  <Typography
                    variant="h6"
                    marginRight={110}
                    alignItems="center"
                    color={"#697074"}
                    sx={{
                      fontFamily: 'Cormorant, sans-serif',
                    }}
                  >
                    Name
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </React.Fragment>
      </Box>
    </>
  )
}