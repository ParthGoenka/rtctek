import React from 'react'
import { CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/HeroDiv';
import Footer from './components/footer';

function Home() {
  return (
    <div>
    <CssBaseline />
    <Navbar />
    <Hero />
    <Footer />
  </div>
  )
}

export default Home