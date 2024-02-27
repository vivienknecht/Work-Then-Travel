import {
    Box,
    Button,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
    FormControlLabel,
    Switch,
    FormGroup,
    Typography
  } from "@mui/material";
  import { createTheme, ThemeProvider } from "@mui/material/styles";
  import React from "react";
  
  const theme = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            // Controls default (unchecked) color for the thumb
            color: "#D3D3D3"
          },
          colorPrimary: {
            "&.Mui-checked": {
              // Controls checked color for the thumb
              color: "#FAA0A0"
            }
          },
          track: {
            // Controls default (unchecked) color for the track
            opacity: 0.7,
            backgroundColor: "#E5E4E2",
            ".Mui-checked.Mui-checked + &": {
              // Controls checked color for the track
              opacity: 0.75,
              backgroundColor: "#FAA0A0"
            }
          }
        }
      }
    },
    typography: {
      fontSize: 17,
    },
  });
  
  function Settings() {
    const [language, setLanguage] = React.useState("");
    const handleLanguageChange = (event: {
      target: { value: React.SetStateAction<string> };
    }) => {
      setLanguage(event.target.value);
    };
  
    const [emailNotifications, setEmailNotifications] =
      React.useState<boolean>(false);
  
    const handleEmailNotificationsToggle = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setEmailNotifications(event.target.checked);
    };
  
    const [phoneNotifications, setPhoneNotifications] =
      React.useState<boolean>(false);
  
    const handlePhoneNotificationsToggle = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setPhoneNotifications(event.target.checked);
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
  
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
              p: 2,
              mb: 2,
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
                mt: 4,
                p: 2,
              }}
            ></Box>
  
            <Box sx={{ justifyContent: "flex-start", mt: 40, marginBottom: -90 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  height: "50px",
                  color: "white",
                  backgroundColor: "#FAA0A0",
                  textTransform: "none",
                  fontFamily: 'Cormorant, sans-serif',
                  fontWeight: "600",
                  fontSize: "25px",
                  "&:hover": {
                    backgroundColor: "#FF7F7F",
                  },
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            mt: 2,
          }}
        >
          <FormControl sx={{ width: "40ch", mb: 6, mt: -5 }}>
            <InputLabel id="select-language" sx={{
              color: "#697074", 
              fontFamily: 'Cormorant, sans-serif',
              fontWeight: "550",
              fontSize: "25px"
              }}>
                Language
                </InputLabel>
            <Select
              labelId="select-language"
              id="select-language"
              value={language}
              label="Language"
              onChange={handleLanguageChange}
            >
              <MenuItem value={10} sx={{ 
              color: "#697074",  
              fontFamily: 'Cormorant, sans-serif',
              fontWeight: "550",
              fontSize: "25px"
              }}>
                English
                </MenuItem>
              <MenuItem value={20} sx={{ 
              color: "#697074",  
              fontFamily: 'Cormorant, sans-serif',
              fontWeight: "550",
              fontSize: "25px"
              }}>
                French
                </MenuItem>
              <MenuItem value={30}sx={{ 
              color: "#697074",  
              fontFamily: 'Cormorant, sans-serif',
              fontWeight: "550",
              fontSize: "25px"
              }}>
                German
                </MenuItem>
            </Select>
          </FormControl>
  
          <FormGroup sx={{ mr: 80, ml: 0, width: "40ch", gap: 4 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={emailNotifications}
                  onChange={handleEmailNotificationsToggle}
                  sx={{
                    '&.Mui-checked': {
                      color: '#FAA0A0',
                      '& .MuiSwitch-thumb': {
                        color: '#FAA0A0',
                      },
                    },
                  }}
                />
              }
              label={
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Cormorant, sans-serif'
                  }}
                >
                  E-mail notifications
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Switch
                  checked={phoneNotifications}
                  onChange={handlePhoneNotificationsToggle}
                />
              }
              label={
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Cormorant, sans-serif'
                  }}
                >
                  Phone notifications
                </Typography>
              }
            />
          </FormGroup>
        </Box>
      </ThemeProvider>
    );
  }
  export default Settings;
  