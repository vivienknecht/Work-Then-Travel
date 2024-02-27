import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { LogInModel } from "../Models/LogInModel";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Email shuld be valid! Example: bob.golden@gmail.com")
    .required("Required"),
  password: Yup.string()
    .min(8)
    .matches(passwordRegex, {
      message:
        " Please create a stronger password! At least 1 upper case letter, 1 lower case letter, 1 numeric digit",
    })
    .required("Required"),
});

export default function Login() {
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

  const handleSubmit = () => {
    alert("Submitted");
  }

  const formik = useFormik<LogInModel>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log("Submitting form:", values);
      const validateProfile = {
        email: values.email,
        password: values.password,
      };
      try {
        const response = await fetch(`https://localhost:7182/api/Security/Login`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validateProfile),
        });
        const responseData = await response.json();
        const { value, expiry } = responseData;
        localStorage.setItem("authToken", value);
        localStorage.setItem("authTokenExpiry", new Date(expiry).toISOString());
        setTokenInfo({ value: value, expiry: new Date(expiry) });
        setRedirect(true);
      }
      catch {
        setRedirect(false);
        alert("Email or password incorrect!")
      }
    },
  });
  useEffect(() => {
    if (redirect) {
      navigate("/student-main-page")
    }
  }, [redirect, navigate]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle 
        sx={{ 
          fontWeight: '800', 
          fontSize: "35px",
          color: "#C0C0C0",
          fontFamily: 'Cormorant, sans-serif'
        }}>
          Login
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
              spacing={2}  >
              <Grid item sm={6} xs={12} sx={{ mt: 2 }}>
                <TextField required sx={{ width: 300 }}
                  label={
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
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  fontFamily: 'Cormorant, sans-serif',
                  fontWeight: '600',
                  fontSize: '20px',
                  backgroundColor: "#FAA0A0",
                  "&:hover": {
                    backgroundColor: "#FF7F7F",
                  },
                }}
              >
                Login
              </Button>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
};