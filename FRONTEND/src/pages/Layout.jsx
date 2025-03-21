import Navbar from '@/components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './HeroContent/Footer'

function Layout() {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet /> {/* This will render the Gallery component */}
        </main>
        <footer className="w-full">
          <div id="footer">
            <Footer />
          </div>
        </footer>
      </div>
    );
  }

export default Layout
