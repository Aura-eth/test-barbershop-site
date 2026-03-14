'use client'
import { useState } from 'react'

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ServicesDetailedSection />
      <ProcessSection />
      <LocationSection />
      <HoursSection />
      <ContactSection />
    </main>
  )
}

function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-background via-primary to-secondary flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-text mb-6">
            Precision Cuts. <span className="text-accent">Timeless Style.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            Experience the art of traditional barbering at Test Barbershop, where every cut is crafted with skill and attention to detail.
          </p>
          <button className="bg-accent text-primary px-8 py-4 text-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    { name: "Classic Cuts", price: "$30", description: "Timeless styling with precision and attention to detail" },
    { name: "Fades", price: "$35", description: "Modern fade techniques for a clean, sharp look" },
    { name: "Hot Towel Shave", price: "$25", description: "Traditional straight razor shave with hot towel treatment" },
    { name: "Beard Trim", price: "$15", description: "Professional beard shaping and grooming" }
  ]

  return (
    <section id="services" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-text mb-4">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary p-8 hover:bg-secondary/80 transition-all duration-300 transform hover:scale-105 border border-accent/20">
              <h3 className="text-2xl font-heading font-bold text-accent mb-2">{service.name}</h3>
              <p className="text-3xl font-bold text-text mb-4">{service.price}</p>
              <p className="text-text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-text mb-6">Meet Mike</h2>
            <p className="text-xl text-text-muted leading-relaxed mb-8">
              At Test Barbershop, owner Mike brings passion and expertise to every service. We blend classic barbering techniques with modern style to deliver exceptional grooming experiences for the discerning gentleman.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-1 bg-accent"></div>
              <span className="text-accent font-semibold">Since 2015</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-secondary to-primary p-12 text-center">
            <div className="w-32 h-32 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-heading font-bold text-accent">M</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-text mb-2">Mike</h3>
            <p className="text-accent">Master Barber & Owner</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesDetailedSection() {
  return (
    <section id="services-detailed" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-text mb-4">Complete Menu</h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            From classic cuts to hot towel shaves, we offer premium barbering services tailored to your style.
          </p>
        </div>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-heading font-bold text-accent mb-4">Classic Cuts - $30</h3>
              <p className="text-text-muted mb-4">Timeless styling with precision and attention to detail</p>
              <ul className="text-text-muted space-y-2">
                <li>• Consultation and style advice</li>
                <li>• Precision cutting and styling</li>
                <li>• Hot towel finish</li>
              </ul>
            </div>
            <div className="bg-primary p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-heading font-bold text-accent mb-4">Fades - $35</h3>
              <p className="text-text-muted mb-4">Modern fade techniques for a clean, sharp look</p>
              <ul className="text-text-muted space-y-2">
                <li>• High, mid, or low fade options</li>
                <li>• Skin fade specialists</li>
                <li>• Beard line-up included</li>
              </ul>
            </div>
            <div className="bg-primary p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-heading font-bold text-accent mb-4">Hot Towel Shave - $25</h3>
              <p className="text-text-muted mb-4">Traditional straight razor shave with hot towel treatment</p>
              <ul className="text-text-muted space-y-2">
                <li>• Pre-shave hot towel treatment</li>
                <li>• Straight razor technique</li>
                <li>• Aftershave and moisturizer</li>
              </ul>
            </div>
            <div className="bg-primary p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-heading font-bold text-accent mb-4">Beard Trim - $15</h3>
              <p className="text-text-muted mb-4">Professional beard shaping and grooming</p>
              <ul className="text-text-muted space-y-2">
                <li>• Precision trimming and shaping</li>
                <li>• Mustache grooming</li>
                <li>• Beard oil application</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-text mb-6">The Test Barbershop Experience</h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Every service begins with a consultation to understand your style preferences. We use premium tools and products to ensure exceptional results that leave you looking and feeling your best.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-accent">1</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-text mb-4">Consultation</h3>
            <p className="text-text-muted">We discuss your style preferences and face shape to recommend the perfect cut.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-accent">2</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-text mb-4">Precision Cut</h3>
            <p className="text-text-muted">Using premium tools and techniques, we craft your haircut with meticulous attention to detail.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-accent">3</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-text mb-4">Finishing Touch</h3>
            <p className="text-text-muted">Hot towel treatment and styling products complete your fresh, polished look.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section id="location" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-text mb-4">Our Location</h2>
          <p className="text-xl text-text-muted">Find us in the heart of Scottsdale</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-secondary p-8">
            <h3 className="text-2xl font-heading font-bold text-accent mb-6">Visit Us</h3>
            <div className="space-y-4 text-text-muted">
              <div className="flex items-start space-x-3">
                <span className="text-accent mt-1">📍</span>
                <div>
                  <p className="font-semibold text-text">Address</p>
                  <p>123 Main St<br/>Scottsdale, AZ 85260</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent mt-1">🚗</span>
                <div>
                  <p className="font-semibold text-text">Parking</p>
                  <p>Street parking and nearby garage available</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent mt-1">🚇</span>
                <div>
                  <p className="font-semibold text-text">Transit</p>
                  <p>2 blocks from Main St station</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-secondary to-background p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">✂️</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-accent mb-2">Test Barbershop</h3>
              <p className="text-text-muted">Premium barbering in Scottsdale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HoursSection() {
  return (
    <section id="hours" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-text mb-4">Hours of Operation</h2>
        </div>
        <div className="max-w-md mx-auto bg-primary p-8 border border-accent/20">
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-secondary">
              <span className="text-text font-semibold">Monday</span>
              <span className="text-accent">10am - 7pm</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-secondary">
              <span className="text-text font-semibold">Tuesday</span>
              <span className="text-accent">10am - 7pm</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-secondary">
              <span className="text-text font-semibold">Wednesday</span>
              <span className="text-accent">10am - 7pm</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-secondary">
              <span className="text-text font-semibold">Thursday</span>
              <span className="text-accent">10am - 7pm</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-secondary">
              <span className="text-text font-semibold">Friday</span>
              <span className="text-accent">10am - 7pm</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-secondary">
              <span className="text-text font-semibold">Saturday</span>
              <span className="text-accent">10am - 7pm</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-text font-semibold">Sunday</span>
              <span className="text-text-muted">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }
  
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-text mb-4">Schedule Your Appointment</h2>
          <p className="text-xl text-text-muted">Ready for your next cut? Get in touch with us today.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text font-semibold mb-2">Name</label>
                  <input type="text" className="w-full p-4 bg-secondary border border-secondary focus:border-accent focus:outline-none text-text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                </div>
                <div>
                  <label className="block text-text font-semibold mb-2">Email</label>
                  <input type="email" className="w-full p-4 bg-secondary border border-secondary focus:border-accent focus:outline-none text-text" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text font-semibold mb-2">Phone</label>
                  <input type="tel" className="w-full p-4 bg-secondary border border-secondary focus:border-accent focus:outline-none text-text" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div>
                  <label className="block text-text font-semibold mb-2">Service</label>
                  <select className="w-full p-4 bg-secondary border border-secondary focus:border-accent focus:outline-none text-text" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
                    <option value="">Select a service</option>
                    <option value="Classic Cuts">Classic Cuts - $30</option>
                    <option value="Fades">Fades - $35</option>
                    <option value="Hot Towel Shave">Hot Towel Shave - $25</option>
                    <option value="Beard Trim">Beard Trim - $15</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-text font-semibold mb-2">Message</label>
                <textarea rows={4} className="w-full p-4 bg-secondary border border-secondary focus:border-accent focus:outline-none text-text resize-none" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Tell us about your preferred date/time..."></textarea>
              </div>
              <button type="submit" className="w-full bg-accent text-primary py-4 font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-primary p-8">
              <h3 className="text-2xl font-heading font-bold text-accent mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-accent text-xl">📍</span>
                  <div>
                    <p className="font-semibold text-text">Address</p>
                    <p className="text-text-muted">123 Main St, Scottsdale AZ 85260</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-accent text-xl">⏰</span>
                  <div>
                    <p className="font-semibold text-text">Hours</p>
                    <p className="text-text-muted">Mon-Sat: 10am-7pm<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-secondary to-primary p-8">
              <h3 className="text-xl font-heading font-bold text-accent mb-4">Walk-ins Welcome</h3>
              <p className="text-text-muted mb-4">While appointments are recommended, we accept walk-ins based on availability.</p>
              <div className="flex space-x-4">
                <button className="bg-accent text-primary px-6 py-2 font-semibold hover:bg-accent/90 transition-all duration-300">Call Now</button>
                <button className="border border-accent text-accent px-6 py-2 font-semibold hover:bg-accent hover:text-primary transition-all duration-300">Book Online</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}