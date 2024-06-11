import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import Footer from "./footer";
import HeaderComponent from "./appbar";

export default function PrivacyAndPolicy() {
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
                    Privacy and Policy</Typography>
                <Box sx={{ textAlign: 'flex-start', mt: 7, ml: 25, mr: 25, mb: 7 }}>
                    <Typography>
                        1. Introduction
                        We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.
                     <br />   2. Information We Collect
                        Personal Information: This includes your name, email address, phone number, and any other information you provide us.
                        Usage Data: This includes information about how you use our services, such as your IP address, browser type, pages visited, and the time and date of your visits.
                        <br />      3. How We Use Your Information
                        Service Delivery: To provide and maintain our services.
                        Communication: To notify you about changes to our services, respond to your inquiries, and provide customer support.
                        Improvement: To gather analysis or valuable information so that we can improve our services.
                        Security: To monitor the usage of our services and detect, prevent, and address technical issues.
                        <br />       4. Sharing Your Information
                        Third Parties: We do not share your personal information with third parties except to comply with the law, enforce our Terms and Conditions, or protect our rights.
                        <br />       5. Security of Your Information
                        Protection Measures: We implement security measures to protect your personal data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee its absolute security.
                        <br />       6. Your Data Protection Rights
                        Access and Control: You have the right to access, correct, or delete your personal data. You also have the right to object to or restrict certain types of processing of your personal data.
                        Complaints: If you have any concerns about our use of your personal data, you have the right to file a complaint with your local data protection authority.
                        <br />       7. Changes to This Privacy Policy
                        Updates: We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                        <br />      8. Contact Us
                        If you have any questions about this Privacy Policy, please contact us at contactwtgiude@gmail.com.
                    </Typography>
                </Box>
                <Footer />
            </ThemeProvider>
        </>
    )
}