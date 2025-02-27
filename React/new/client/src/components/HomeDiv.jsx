import _default from "@emotion/styled";
import {Box, Typography, Container } from '@mui/material';


const HomeDiv = () => {
    return (
        <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Welcome to the Employee Portal
        </Typography>

        <Box
          sx={{
            maxHeight: '70vh', 
            overflowY: 'auto', 
            padding: 2,  
            borderRadius: 2, 
          }}
        >
          <Typography
            variant="body1"
            align="left"
            paragraph
            sx={{
              lineHeight: 1.8, 
              color: 'text.primary', 
            }}
          >
            The Employee Portal app is a comprehensive solution for managing employee records,
            accessing work-related information, and improving overall workflow within the organization.
            This platform is designed to streamline HR processes, enhance collaboration, and foster
            productivity by providing employees with easy access to important resources and tools.
            </Typography>
            <Typography
            variant="body1"
            align="left"
            paragraph
            sx={{
              lineHeight: 1.8, 
              color: 'text.primary', 
            }}
          >
            It allows employees to easily manage their profile, track tasks, and communicate effectively
            with teams. Enjoy a seamless and organized work experience with our intuitive interface.
            Whether you're onboarding, managing performance reviews, or simply tracking your daily tasks,
            this app will help you stay on top of everything. It also supports integrations with other
            enterprise tools and provides detailed reports for both employees and managers.
            </Typography>
            <Typography
            variant="body1"
            align="left"
            paragraph
            sx={{
              lineHeight: 1.8, 
              color: 'text.primary', 
            }}
          >
            The Employee Portal is built to be secure, user-friendly, and scalable to meet the growing
            needs of your workforce. You can access it from any device, anywhere, at any time. It's the
            one-stop solution for managing your professional life with ease.
            </Typography>
            <Typography
            variant="body1"
            align="left"
            paragraph
            sx={{
              lineHeight: 1.8, 
              color: 'text.primary', 
            }}
          >
            We value the importance of data privacy and security, so your information is kept safe with
            top-notch encryption and protection mechanisms. We are constantly improving our system to
            meet the latest security standards and to provide you with the best user experience possible.
            </Typography>
            <Typography
            variant="body1"
            align="left"
            paragraph
            sx={{
              lineHeight: 1.8, 
              color: 'text.primary', 
            }}
          >
            So, get started today, explore the Employee Portal, and take control of your professional journey.
          </Typography>
        </Box>
      </Container>
      
    )
}
    



export default HomeDiv;