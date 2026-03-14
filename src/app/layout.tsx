import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' })
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })

export const metadata = {
  title: 'Test Barbershop - Premium Cuts for the Modern Gentleman',
  description: 'Premium barbershop in Scottsdale, AZ. Expert cuts, fades, shaves, and beard trims by master barber Mike.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-background text-text">
        <nav className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-secondary z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-heading text-2xl font-bold text-accent">Test Barbershop</div>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="hover:text-accent transition-all duration-300">Home</a>
                <a href="#services" className="hover:text-accent transition-all duration-300">Services</a>
                <a href="#about" className="hover:text-accent transition-all duration-300">About</a>
                <a href="#contact" className="hover:text-accent transition-all duration-300">Contact</a>
              </div>
              <button className="md:hidden">
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
                <p className="text-gray-300">Premium barbering services in the heart of Scottsdale</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Location</h4>
                <p className="text-gray-300">123 Main St<br/>Scottsdale, AZ 85260</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Hours</h4>
                <div className="text-gray-300 space-y-1">
                  <p>Mon-Sat: 10am - 7pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-secondary text-center text-gray-400">
              <p>&copy; 2024 Test Barbershop. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}