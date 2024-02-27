import { Box, Button, Checkbox, Dialog, DialogContent, DialogTitle, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { SignupModel } from "../Models/SignupModel";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from "react-router";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const schema = Yup.object().shape({
  Name: Yup.string()
    .required("Required"),
  email: Yup.string()
    .email("Email shuld be valid! Example: bob.golden@gmail.com")
    .required("Required"),
  phoneNumber: Yup.string()
    .max(10)
    .required("Required"),
  password: Yup.string()
    .min(8)
    .matches(passwordRegex, {
      message:
        " Please create a stronger password! At least 1 upper case letter, 1 lower case letter, 1 numeric digit",
    })
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match!")
    .required("Required"),
});

export default function Signup() {
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const [tokenInfo, setTokenInfo] = useState<{ value: string; expiry: Date | null }>({
    value: "",
    expiry: null,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const formik = useFormik<SignupModel>({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const addedProfile = {
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
      };
      try {
      const response = await fetch(`https://localhost:7182/api/Security/Signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addedProfile),
      });
      const responseData = await response.json();
      const { value, expiry } = responseData;
      localStorage.setItem("authToken", value);
      localStorage.setItem("authTokenExpiry", new Date(expiry).toISOString());
      setTokenInfo({ value: value, expiry: new Date(expiry) });
      setRedirect(true);
    }
    catch{
      setRedirect(false);
    }
    },
  });
  useEffect(() => {
    if (redirect) {
      navigate("/student-main-page");
    }
  }, [redirect, navigate]);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const [isAgency, setIsAgency] = React.useState<string | null>(null);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setIsAgency((prevValue) => (prevValue === value ? null : value));
  };



  return (
    <>
      <Button 
      variant="contained" 
      onClick={handleClickOpen} 
      color="primary" 
      sx={{ 
        width: 200, 
        height: 50, 
        fontSize: 20,
          fontWeight: '600',
          backgroundColor: "#FAA0A0",
          "&:hover": {
            backgroundColor: "#FF7F7F",
          },
          fontFamily: 'Cormorant, sans-serif',
        }}>
        Signup
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle 
        sx={{ 
          fontWeight: '800', 
          fontSize: "35px",
          color: "#C0C0C0",
          fontFamily: 'Cormorant, sans-serif'
        }}>
          Register
          </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onChange={formik.handleChange}
            onSubmit={formik.handleSubmit}
            onBlur={formik.handleBlur}
            sx={{ mt: 1 }}
          >
            <Grid container direction="column" justifyContent="center" alignItems="center"
              spacing={2} sx={{}}>
              <Grid item sm={6} xs={12} sx={{ mt: 2 }}>
                <TextField required sx={{ width: 300 }} label={
                    <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Cormorant, sans-serif'
                    }}
                  >
                    Name
                  </Typography>
                  } 
                  value={formik.values.name}
                  id="name"
                  name="name"
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item sm={6} xs={12} >
                <TextField required sx={{ width: 300 }} label={
                    <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Cormorant, sans-serif'
                    }}
                  >
                    Email
                  </Typography>
                  } 
                  value={formik.values.email}
                  id="email"
                  name="email"
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField required sx={{ width: 300 }} label={
                    <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Cormorant, sans-serif'
                    }}
                  >
                    Phone Number
                  </Typography>
                  } 
                  value={formik.values.phoneNumber}
                  id="phoneNumber"
                  name="phoneNumber"
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField label={
                    <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Cormorant, sans-serif'
                    }}
                  >
                    Password
                  </Typography>
                  } 
                  required
                  sx={{ width: 300 }}
                  name="password"
                  id="password"
                  value={formik.values.password}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField label={
                    <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Cormorant, sans-serif'
                    }}
                  >
                    Confirm password
                  </Typography>
                  } 
                  required
                  sx={{ width: 300 }}
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formik.values.confirmPassword}
                  error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              {/* <Grid item sm={6} xs={12}>
                <FormControlLabel
                  value="agency"
                  control={<Checkbox />}
                  label={
                    <Typography
                    variant="h5"
                    sx={{
                      fontFamily: 'Cormorant, sans-serif'
                    }}
                  >
                    Agency
                  </Typography>
                  } 
                  checked={isAgency === 'agency'}
                  onChange={(event) => handleChange(event as React.ChangeEvent<HTMLInputElement>)}
                />
              </Grid> */}
              <Button 
              type="submit" 
              variant="contained" 
              sx={{
                 mt: 2, 
                 backgroundColor: "#FAA0A0",
                 fontFamily: 'Cormorant, sans-serif',
                 fontWeight: '600',
                 fontSize: '20px',
                 "&:hover": {
                  backgroundColor: "#FF7F7F",
                },
                 }}>
                 Signup
                 </Button>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}; 