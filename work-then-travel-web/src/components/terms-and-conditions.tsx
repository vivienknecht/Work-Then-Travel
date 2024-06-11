import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import Footer from "./footer";
import HeaderComponent from "./appbar";

export default function TermsAndConditions() {
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
          Terms and Conditions</Typography>
        <Box sx={{ textAlign: 'flex-start', mt: 7, ml: 25, mr: 25, mb: 7}}>
          <Typography>
            1. Introduction
            Welcome to Work&Travel Guide. By accessing or using our services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            <br />
            2. Use of the Service
            Eligibility: You must be at least 18 years old to use our services.
            Acceptable Use: You agree to use our services only for lawful purposes and in accordance with these Terms and Conditions. You agree not to use our services in any way that could harm us or any third party.
            <br /> 3. User Accounts
            Account Responsibility: You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.
            Account Information: You agree to provide accurate, current, and complete information about yourself as prompted by our registration form. You agree to update your information to keep it accurate, current, and complete.
            <br /> 4. Intellectual Property
            Ownership: All content on our site, including text, graphics, logos, and software, is the property of Work&Travel Guide or its content suppliers and is protected by intellectual property laws.
            Usage Rights: You may not reproduce, distribute, or create derivative works from any of the content without our express written consent.
            <br />  5. Limitation of Liability
            Disclaimer of Warranties: Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied.
            Limitation: Work&Travel Guide will not be liable for any damages of any kind arising from the use of our services, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.
            <br />   6. Changes to the Terms
            Modification: We may update these Terms and Conditions from time to time. Your continued use of our services indicates acceptance of any changes.
            <br />  7. Contact Us
            If you have any questions about these Terms and Conditions, please contact us at contactwtguide@gmail.com.
          </Typography>
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  )
}