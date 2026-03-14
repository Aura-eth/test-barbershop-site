import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_Pro } from 'next/font/google'
import './globals.css'
import { useState } from 'react'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' })
const sourceSans = Source_Sans_Pro({ subsets: ['latin'], weight: ['300', '400', '600'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Test Barbershop - Precision Cuts. Timeless Style.',
  description: 'Experience the art of traditional barbering at Test Barbershop, where every cut is crafted with skill and attention to detail. Located in Scottsdale, AZ.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="bg-background text-text font-body">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-heading font-bold text-accent">Test Barbershop</div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="text-text hover:text-accent transition-all duration-300">Home</a>
            <a href="#services" className="text-text hover:text-accent transition-all duration-300">Services</a>
            <a href="#about" className="text-text hover:text-accent transition-all duration-300">About</a>
            <a href="#contact" className="text-text hover:text-accent transition-all duration-300">Contact</a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-text hover:text-accent">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-secondary">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#hero" className="block px-3 py-2 text-text hover:text-accent transition-all duration-300" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#services" className="block px-3 py-2 text-text hover:text-accent transition-all duration-300" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#about" className="block px-3 py-2 text-text hover:text-accent transition-all duration-300" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" className="block px-3 py-2 text-text hover:text-accent transition-all duration-300" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-primary border-t border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold text-accent mb-4">Test Barbershop</h3>
            <p className="text-text-muted">Precision cuts and timeless style in the heart of Scottsdale.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Location</h4>
            <p className="text-text-muted">123 Main St<br/>Scottsdale, AZ 85260</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Hours</h4>
            <div className="text-text-muted space-y-1">
              <div className="flex justify-between"><span>Mon-Sat:</span><span>10am-7pm</span></div>
              <div className="flex justify-between"><span>Sunday:</span><span>Closed</span></div>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary mt-8 pt-8 text-center text-text-muted">
          <p>&copy; 2024 Test Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}