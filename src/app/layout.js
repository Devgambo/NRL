import { Space_Grotesk, Orbitron } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/HeroContent/Footer'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata = {
  title: 'NRL - NITK Rocket League',
  description: 'NITK Rocket League - we make things fly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="w-full">
            <div id="footer">
              <Footer />
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
