import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import Footer from "./footer";
import HeaderComponent from "./appbar";

export default function GDPR() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Open Sans',
        },
    });
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ mt: 48, mb: 7 }}>
                    <HeaderComponent />
                </Box>
                <Typography variant="h2" sx={{
                    ml: 25,
                    fontWeight: "600",
                    color: "black"
                }}>
                    GDPR</Typography>
                <Box sx={{ textAlign: 'flex-start', mt: 7, ml: 25, mr: 25, mb: 7 }}>
                    <Typography>
                        1. Introduction
                        We are committed to complying with the General Data Protection Regulation (GDPR) and protecting your personal data.
                        <br />       2. Data Controller
                        Controller Information: Work&Travel Guide is the data controller responsible for your personal data.
                        <br />       3. Data We Collect
                        Personal Data: This includes your name, email address, phone number, and any other information you provide us.
                        Usage Data: This includes information about how you use our services, such as your IP address, browser type, pages visited, and the time and date of your visits.
                        <br />      4. Lawful Basis for Processing
                        Consent: We process your personal data based on your consent, which you can withdraw at any time.
                        Contract: Processing is necessary for the performance of a contract with you.
                        Legitimate Interests: Processing is necessary for our legitimate interests, such as improving our services, provided that these interests are not overridden by your rights and interests.
                        <br />       5. Your Rights Under GDPR
                        Right to Access: You can request access to the personal data we hold about you.
                        Right to Rectification: You can request that we correct any inaccuracies in your personal data.
                        Right to Erasure: You can request that we delete your personal data under certain conditions.
                        Right to Restrict Processing: You can request that we restrict the processing of your personal data under certain conditions.
                        Right to Data Portability: You can request to receive your personal data in a structured, commonly used, and machine-readable format.
                        Right to Object: You can object to the processing of your personal data under certain conditions.
                        <br />      6. Data Security
                        Protection Measures: We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.
                        <br />     7. Data Breaches
                        Notification: In the event of a data breach, we will notify the relevant supervisory authority and affected individuals as required by law.
                        <br />     8. Data Retention
                        Duration: We retain personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by law.
                        <br />       9. Contact Us
                        If you have any questions about this GDPR Compliance statement or how we handle your personal data, please contact us at contactwtguide@gmail.com.
                    </Typography>
                </Box>
                <Footer />
            </ThemeProvider>
        </>
    )
}