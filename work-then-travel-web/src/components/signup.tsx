import { Box, Button, Card, Container, IconButton, InputAdornment, Link, Stack, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { SignUpModel } from "../models/signup-model";
import HeaderComponent from "./appbar";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const schema = Yup.object().shape({
  name: Yup.string().required("Required"),
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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match!")
    .required("Required"),
});

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const [tokenInfo, setTokenInfo] = useState<{ value: string; expiry: Date | null }>({
    value: "",
    expiry: null,
  });

  const theme = createTheme({
    typography: {
      fontFamily: 'Open Sans',
    },
  });

  const formik = useFormik<SignUpModel>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const addedProfile = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      try {
        const response = await fetch(`https://localhost:7163/api/Security/Register`, {
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
      catch {
        setRedirect(false);
      }
    },
  });
  useEffect(() => {
    if (redirect) {
      navigate("/about-us");
    }
  }, [redirect, navigate]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ mt: 52, mb: 7 }}>
          <HeaderComponent />
        </Box>
        <Box sx={{ ml: 40, mb: 5 }}>
          <Typography sx={{
            fontWeight: "900",
            fontSize: "45px",
            color: "black",
          }}
          >
            Sign up</Typography>
        </Box>
        <Box sx={{ textAlign: "center", mb: 12 }}>
          <Container maxWidth="md" >
            <Box component="form"
              onChange={formik.handleChange}
              onSubmit={formik.handleSubmit}
              onBlur={formik.handleBlur}
            >
              <Card variant="outlined"
                sx={{
                  borderColor: 'black',
                  borderTopWidth: '2px',
                  borderLeftWidth: '1.8px',
                  borderRightWidth: '4px',
                  borderBottomWidth: '4px',
                  height: "630px"
                }}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  sx={{ mt: 6, ml: -1 }}
                >
                  <Stack direction="column" alignItems="flex-start" spacing={1.5}
                  >
                    <Typography sx={{
                      pl: 1.7
                    }}>
                      <span style={{ color: "black", fontWeight: "600" }}>Name</span>
                      <span style={{ color: "#F45151", fontWeight: "600" }}>*</span>
                    </Typography>
                    <TextField
                      id="name"
                      name="name"
                      type="name"
                      value={formik.values.name}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      sx={{
                        width: "765px",
                        pl: 2,
                      }} />
                  </Stack>
                  <Stack direction="column" alignItems="flex-start" spacing={1.5} >
                    <Typography sx={{
                      pl: 1.7
                    }}>
                      <span style={{ color: "black", fontWeight: "600" }}>Email Address</span>
                      <span style={{ color: "#F45151", fontWeight: "600" }}>*</span>
                    </Typography>
                    <TextField
                      id="email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                      sx={{
                        width: "765px",
                        pl: 2,
                      }} />
                  </Stack>
                  <Stack direction="column" alignItems="flex-start" spacing={1.5} >
                    <Typography sx={{
                      pl: 1.7
                    }}>
                      <span style={{ color: "black", fontWeight: "600" }}>Password</span>
                      <span style={{ color: "#F45151", fontWeight: "600" }}>*</span>
                    </Typography>
                    <TextField
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formik.values.password}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
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
                        ),
                      }}
                      sx={{
                        width: "765px",
                        pl: 2,
                      }}
                    />
                  </Stack>
                  <Stack direction="column" alignItems="flex-start" spacing={1.5} >
                    <Typography sx={{
                      pl: 1.7
                    }}>
                      <span style={{ color: "black", fontWeight: "600" }}>Confirm Password</span>
                      <span style={{ color: "#F45151", fontWeight: "600" }}>*</span>
                    </Typography>
                    <TextField
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formik.values.confirmPassword}
                      error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                      helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        width: "765px",
                        pl: 2,
                      }} />
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={2.5} sx={{
                  mt: 5,
                  ml: 8
                }}>
                  <Button variant="outlined"
                    type="submit"
                    sx={{
                      width: "100px",
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
                    }}
                  >Sign up</Button>
                  <Typography sx={{
                    pt: 2,
                    fontWeight: "600",
                  }}

                  >If you already have an account, click <Link href="/login" sx={{ color: "#F45151", }}>here</Link> to log in.</Typography>
                </Stack>
              </Card>
            </Box>
          </Container>
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  )
} 