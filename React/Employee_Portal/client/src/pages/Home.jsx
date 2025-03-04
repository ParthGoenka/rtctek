import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeDiv from "../components/HomeDiv";
import { Container } from '@mui/material';

const Home = () => {
    return (
        <div>
            <Navbar />
            
            <Container sx={{ paddingTop: 4, paddingBottom: 4, height: '100vh',
      backgroundImage: 'url(/back1.jfif)',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',}}  >
                <HomeDiv />
            </Container>

            <Footer />
        </div>
    );
}

export default Home;






