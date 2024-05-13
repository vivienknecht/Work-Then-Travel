import { Box, Button, Card, Container, Grid, IconButton, InputAdornment, Link, Stack, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { LogInModel } from "../models/login-model";
import HeaderComponent from "./appbar";
import Footer from "./footer";
import { useState } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const schema = Yup.object().shape({
    email: Yup.string()
        .email("Email should be valid! Example: bob.golden@gmail.com")
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
    const [showPassword, setShowPassword] = useState(false);

    const theme = createTheme({
        typography: {
            fontFamily: 'Open Sans',
        },
    });

    const formik = useFormik<LogInModel>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {

            localStorage.setItem('email', values.email);
            localStorage.setItem('password', values.password);

            // Submit the form to an API or perform other actions here (future implementation)
            // For now, just simulate submission
            console.log('Form submitted:', values);
        },
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);
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
                        Log in</Typography>
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
                                    borderColor: 'black', // Black border color
                                    borderTopWidth: '2px',
                                    borderLeftWidth: '1.8px',
                                    borderRightWidth: '4px',
                                    borderBottomWidth: '4px',
                                    height: "420px"
                                }}>
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}
                                    sx={{ mt: 6 }}
                                >
                                    <Stack direction="column" alignItems="flex-start" spacing={1.5}
                                    >
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
                                            error={
                                                formik.touched.password && Boolean(formik.errors.password)
                                            }
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
                                            }} />
                                    </Stack>
                                </Stack>
                                <Stack direction="column" alignItems="flex-start" >
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
                                                borderColor: 'black', // Black border color
                                                borderTopWidth: '1px',
                                                borderLeftWidth: '1px',
                                                borderRightWidth: '2px',
                                                borderBottomWidth: '3px',
                                                '&:hover': {
                                                    backgroundColor: "#F45151"
                                                },
                                            }}
                                        >Log in</Button>
                                        <Typography sx={{
                                            pt: 2,
                                            fontWeight: "600",
                                        }}

                                        >If you don't have an account, create one <Link href="/signup" sx={{ color: "#F45151", }}>here.</Link></Typography>
                                    </Stack>
                                    <Typography sx={{
                                        pl: 8,
                                        pt: 1.3,
                                        fontSize: "15px",
                                        color: "#F45151",
                                        fontWeight: "600",
                                    }}
                                    >forgot password?</Typography>
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

