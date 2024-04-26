import { Button, Card, CardMedia, IconButton, Stack } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function HeaderComponent() {
 
  return (
    <>
    <Stack direction="row" spacing={35} sx={{ml: 15, mr: 10, mt: -47}}>
      <Card>
        <CardMedia
        component="img"
        height="85"
        image="images/logo normal.png"
        alt="Logo"
        sx = {{ 
          borderRadius: "18px",
          overflow: 'hidden',
        }}
        />
      </Card>
      <Stack direction="row" spacing={2.5} sx={{pt: 4}}>
        <Button
        sx={{
          color: "black",
          fontWeight: "600",
          '&:focus': {
            outline: 'none', // Remove outline on focus
          },
        }}
        >Home</Button>
        <Button
        sx={{
          color: "black",
          fontWeight: "600",
          '&:focus': {
            outline: 'none', // Remove outline on focus
          },
        }}
        > 
        About Us</Button>
        <Button
        sx={{
          color: "black",
          fontWeight: "600",
          '&:focus': {
            outline: 'none', // Remove outline on focus
          },
        }}
        >  
        Agencies</Button>
        <Button
        sx={{
        color: 'black',
        fontWeight: 600,
      //  textTransform: 'capitalize',
        '&:focus': {
          outline: 'none', 
          backgroundColor: 'white'
        },
        '&:active': {
          backgroundColor: 'white', // Set background color to white when pressed
        },
        }}
        >
          Contact</Button>
      </Stack>
      <Stack direction="row" spacing={5} sx={{pt:4.5}}>
        <Button
        sx={{
          color: "black",
          borderRadius: "100%",
          fontWeight: "600",
          border: '1px solid',
          boxShadow: '3px 3px 0px 0px rgba(0,0,0,0.5)',
          '&:focus': {
            backgroundColor: "white"
          },
        }}
        >
          Add Agency</Button>
        <IconButton sx = {{
          '&:focus': {
            outline: 'none', 
          },
        }}>
        <AccountCircleIcon
        sx = {{ 
          width: 45,
          height: 45,
        }}
        />
        </IconButton>
      </Stack>
    </Stack>
    </>
  );
}

