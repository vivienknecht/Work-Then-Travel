import { AppBar, Avatar, Box, IconButton, MenuItem, Modal, Stack, Toolbar, Tooltip, Typography, TextField, Button } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Profile } from "../Models/ProfileModel";
import backgroundImage from "../assets/flag3.png";
import Menu from "@mui/material/Menu";
import PublicIcon from '@mui/icons-material/Public';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Settings from "./settings";

export default function Appbar() {

  const flagStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.15,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  const styleSettings = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 600,
    bgcolor: "background.paper",
    boxShadow: 5,
    borderRadius: 1,
    p: 3,
  };

  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState<Profile | null>(null);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("not found!");
        }
        const response = await fetch("https://localhost:7182/api/Profiles/GetProfile", {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        const data = await response.json();
        setUserProfile(data);
      } catch (error) {
        console.error("Unknown error occured: ", error);
      }
    };
    fetchUserProfile();
  }, []);

  const Logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authTokenExpiry");
    localStorage.clear();
    navigate("/");
  }

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = ["My Profile", "Settings", "Logout"];

  const [openSettings, setOpenSettingsModal] = React.useState(false);
  const handleOpenSettingsModal = () => {
    setOpenSettingsModal(true);
  };
  const handleCloseSettingsModal = () => {
    setOpenSettingsModal(false);
  };

  const [openMyProfile, setOpenMyProfile] = React.useState(false);
  const handleOpenMyProfile = () => {
    setOpenMyProfile(true);
  };
  const handleCloseMyProfile = () => {
    setOpenMyProfile(false);
  };

  function MyProfile() {
    const [name, setName] = useState(userProfile?.name || '');
    const [emailAddress, setEmailAddress] = useState(userProfile?.emailAddress || '');
    const [phoneNumber, setPhoneNumber] = useState(userProfile?.phoneNumber || '')
  
    const editProfile = async () => {
      const editedProfile = {
        name,
        emailAddress,
        phoneNumber
      }
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("Invalid token");
        }
        const response = await fetch(`https://localhost:7182/api/Profiles/PutProfile`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(editedProfile),
        });
        if (response.ok) {
          window.location.reload();
        }
        else {
          throw new Error("Network response was not ok");
        }
      }
      catch (error) {
        console.error("Unknown error occurred:", error);
      }
    }
  
    return (
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
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="V"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 100, height: 100, mt: 15, mb: 15 }}
        />
      </Stack>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          p: 2,
          mt: 5,
        }}
      >
        <TextField
          label="Name"
          id="outlined-size-normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{
            style: { width: "40ch" },
          }}
          InputLabelProps={{
            style: { marginBottom: -2, fontFamily: 'Cormorant, sans-serif', fontSize: "20px" },
            shrink: true,
          }}
          sx={{ mb: 2.5 }}
        />
        <TextField
          label="E-mail"
          value={userProfile?.emailAddress}
          variant="outlined"
          disabled
          InputProps={{
            style: { width: "40ch" },
          }}
          InputLabelProps={{
            style: { marginBottom: -2, fontFamily: 'Cormorant, sans-serif', fontSize: "20px" },
            shrink: true,
          }}
          sx={{ mb: 2.5 }}
        />
     <TextField
          label="Phone number"
          id="outlined-size-normal"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          InputProps={{
            style: { width: "40ch" },
          }}
          InputLabelProps={{
            style: { marginBottom: -2, fontFamily: 'Cormorant, sans-serif', fontSize: "20px" },
            shrink: true,
          }}
          sx={{ mb: 2.5 }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "40ch",
            mb: 2,
            mt: 2.5,
            mx: "auto"
          }}
        >
          <Button
            variant="contained"
            size="large"
            color="secondary"
            sx={{
              width: "40ch",
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
            onClick={editProfile}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
    )}

  return (
    <>
      <div style={flagStyle} />
      <AppBar position="fixed" sx={{ backgroundColor: "#FAA0A0" }}>
        <Toolbar disableGutters>
          <PublicIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontSize: 40,
              marginLeft: 5,
            }}
          />{" "}
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: 'Cormorant, sans-serif',
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "none",
                color: "inherit",
              },
            }}
          >
            Work Then Travel
          </Typography>
          <PublicIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, fontSize: 40 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: 'Cormorant, sans-serif',
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "none",
                color: "inherit",
              },
            }}
          >
            Work Then Travel
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
          ></Box>
          <Box sx={{ flexGrow: 0, marginRight: 10 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Tooltip title={
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Cormorant, sans-serif',
                    fontSize: "15px"
                  }}
                >
                  Open settings
                </Typography>}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <MoreVertIcon
                    sx={{ fontSize: 30, color: "white" }}
                  ></MoreVertIcon>
                </IconButton>
              </Tooltip>
            </Stack>
          </Box>
          <Modal
            open={openSettings}
            onClose={handleCloseSettingsModal}
            aria-labelledby="modal-modal-title"
          >
            <Box sx={styleSettings}>
              <AppBar position="fixed" sx={{ width: "100%", backgroundColor: "#FAA0A0" }}>
                <Toolbar disableGutters>
                  <SettingsIcon
                    sx={{
                      display: { xs: "none", md: "flex" },
                      mr: 1,
                      fontSize: 30,
                      marginLeft: 2,
                    }}
                  />{" "}
                  <Typography component="div" sx={{ fontFamily: 'Cormorant, sans-serif', fontWeight: "600", fontSize: "30px" }}>
                    Settings
                  </Typography>
                  <IconButton
                    sx={{ marginLeft: 44 }}
                    onClick={handleCloseSettingsModal}
                  >
                    <CloseIcon sx={{ color: "white" }} />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <Settings />
            </Box>
          </Modal>
          <Modal
            open={openMyProfile}
            aria-labelledby="modal-modal-title"
          >
            <Box sx={styleSettings}>
              <AppBar position="fixed" sx={{ width: "100%", backgroundColor: "#FAA0A0" }}>
                <Toolbar disableGutters>
                  <PersonOutlineIcon
                    sx={{
                      display: { xs: "none", md: "flex" },
                      mr: 1,
                      fontSize: 40,
                      marginLeft: 3,
                    }}
                  />{" "}
                  <Typography variant="h6" component="div" sx={{ fontFamily: 'Cormorant, sans-serif', fontWeight: "600", fontSize: "25px" }}>
                    My Profile
                  </Typography>
                  <IconButton
                    sx={{ marginLeft: 39 }}
                    onClick={handleCloseMyProfile}
                  >
                    <CloseIcon sx={{ color: "white" }} />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <MyProfile />
            </Box>
          </Modal>
          <Avatar
            alt="User Name"
            // src={`data:image/png;base64,${userProfile?.avatar}`}
            sx={{ marginLeft: -9, marginRight: -1 }}
          />
          <Typography
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "#FFFFFF",
              textDecoration: "none",
              marginLeft: 2,
              marginTop: 0,
              padding: 1,
              fontSize: "30px",
              fontFamily: 'Cormorant, sans-serif',
              fontWeight: "600"
            }}
          >
            {userProfile?.name}
          </Typography>

          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem sx={{ fontFamily: 'Cormorant, sans-serif' }}
                key={setting}
                onClick={
                  setting === "Settings"
                    ? handleOpenSettingsModal
                    : setting === "Logout"
                      ? Logout
                      : setting === "My Profile"
                        ? handleOpenMyProfile
                        : handleCloseUserMenu
                }
              >
                {/* <Typography textAlign="center">{setting}</Typography> */}
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily:
                      setting === "Settings"
                        ? 'Cormorant, sans-serif'
                        : setting === "My Profile"
                          ? 'Cormorant, sans-serif'
                          : setting === "Logout"
                            ? 'Cormorant, sans-serif'
                            : 'inherit', // Use the default font if none of the conditions match
                  }}
                >
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  )
}


  