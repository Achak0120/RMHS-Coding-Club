import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import OurWork from '@/components/OurWork';
import OurTeam from '@/components/OurTeam';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>RMHS Coding Club - Web Design for Local Businesses</title>
        <meta name="description" content="The Rolling Meadows High School Coding Club designs and develops professional websites for small businesses in Cook County and District 214." />
      </Helmet>
      
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <OurWork />
          <OurTeam />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;