import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_Pro } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' })
const sourceSans = Source_Sans_Pro({ subsets: ['latin'], weight: ['300', '400', '600', '700'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Test Barbershop | Premium Cuts & Traditional Barbering in Scottsdale',
  description: 'Experience premium barbering with Mike at Test Barbershop in Scottsdale. Classic techniques, modern precision, and timeless style.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-body bg-background text-text antialiased">
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-heading text-xl font-bold text-accent">Test Barbershop</div>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="hover:text-accent transition-colors duration-300">Home</a>
                <a href="#services" className="hover:text-accent transition-colors duration-300">Services</a>
                <a href="#about" className="hover:text-accent transition-colors duration-300">About</a>
                <a href="#contact" className="hover:text-accent transition-colors duration-300">Contact</a>
              </div>
              <button className="md:hidden p-2 hover:text-accent transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-primary border-t border-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-accent mb-4">Test Barbershop</h3>
                <p className="text-text/80">Premium barbering with traditional craftsmanship and modern precision in Scottsdale.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Hours</h4>
                <div className="space-y-2 text-text/80">
                  <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 8:00 AM - 6:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-text/80">
                  <p>123 Main Street</p>
                  <p>Scottsdale, AZ 85251</p>
                  <p>(480) 555-0123</p>
                </div>
              </div>
            </div>
            <div className="border-t border-secondary mt-8 pt-8 text-center text-text/60">
              <p>&copy; 2024 Test Barbershop. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}