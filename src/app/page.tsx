export default function HomePage() {
  return (
    <main>
      <section id="home" className="min-h-screen bg-gradient-to-br from-background via-primary to-secondary flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-text to-accent bg-clip-text text-transparent">Premium Cuts for the Modern Gentleman</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">At Test Barbershop, we combine traditional barbering techniques with contemporary style to deliver the perfect cut every time.</p>
            <a href="#contact" className="inline-block bg-accent text-background px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">Book Your Appointment</a>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-accent">Master Craftsmanship in Every Cut</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">From classic cuts to modern fades, we deliver precision styling tailored to your unique look.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-lg hover:bg-secondary/80 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="font-heading text-2xl font-bold text-accent mb-4">Classic Cuts</h3>
              <p className="text-gray-300 mb-4">Timeless styles executed with precision and attention to detail</p>
              <p className="text-3xl font-bold text-accent">$30</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg hover:bg-secondary/80 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="font-heading text-2xl font-bold text-accent mb-4">Fades</h3>
              <p className="text-gray-300 mb-4">Contemporary fades that blend seamlessly for a sharp, clean look</p>
              <p className="text-3xl font-bold text-accent">$35</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg hover:bg-secondary/80 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="font-heading text-2xl font-bold text-accent mb-4">Hot Towel Shave</h3>
              <p className="text-gray-300 mb-4">Traditional hot towel treatment for the ultimate shaving experience</p>
              <p className="text-3xl font-bold text-accent">$25</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg hover:bg-secondary/80 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="font-heading text-2xl font-bold text-accent mb-4">Beard Trim</h3>
              <p className="text-gray-300 mb-4">Expert sculpting and grooming to keep your beard looking its best</p>
              <p className="text-3xl font-bold text-accent">$15</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-accent">Craftsmanship Meets Style</h2>
              <p className="text-lg text-gray-300 leading-relaxed">Welcome to Test Barbershop, where craftsmanship meets style. Under Mike's expert guidance, we've created Scottsdale's premier destination for discerning gentlemen who demand excellence. Our commitment to precision, attention to detail, and personalized service ensures you leave looking and feeling your absolute best.</p>
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-accent mb-4">Meet Mike</h3>
              <p className="text-gray-300">Master barber with over a decade of experience, Mike brings passion and precision to every cut. His dedication to the craft and commitment to customer satisfaction has made Test Barbershop the go-to destination for Scottsdale's most discerning clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold mb-8 text-accent">Hours of Operation</h2>
            <div className="bg-secondary p-8 rounded-lg max-w-md mx-auto">
              <div className="space-y-3">
                <div className="flex justify-between"><span>Monday</span><span className="text-accent">10am - 7pm</span></div>
                <div className="flex justify-between"><span>Tuesday</span><span className="text-accent">10am - 7pm</span></div>
                <div className="flex justify-between"><span>Wednesday</span><span className="text-accent">10am - 7pm</span></div>
                <div className="flex justify-between"><span>Thursday</span><span className="text-accent">10am - 7pm</span></div>
                <div className="flex justify-between"><span>Friday</span><span className="text-accent">10am - 7pm</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="text-accent">10am - 7pm</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-accent">Closed</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-accent">Visit Test Barbershop</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Experience the difference at Scottsdale's premier barbershop</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-primary p-8 rounded-lg mb-8">
                <h3 className="font-heading text-2xl font-bold text-accent mb-4">Location</h3>
                <p className="text-gray-300 mb-4">Conveniently located in the heart of Scottsdale, Test Barbershop is your destination for premium grooming services.</p>
                <p className="text-lg">123 Main St<br/>Scottsdale, AZ 85260</p>
              </div>
              <div className="bg-primary p-8 rounded-lg">
                <h3 className="font-heading text-2xl font-bold text-accent mb-4">Ready to Book?</h3>
                <p className="text-gray-300 mb-4">Ready to experience the Test Barbershop difference? Contact us today to schedule your appointment with Mike and discover why we're Scottsdale's choice for premium men's grooming.</p>
              </div>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-accent mb-6">Book Your Appointment</h3>
              <form className="space-y-6">
                <input type="text" placeholder="Your Name" className="w-full p-4 bg-primary border border-gray-600 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300" />
                <input type="email" placeholder="Email Address" className="w-full p-4 bg-primary border border-gray-600 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300" />
                <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-primary border border-gray-600 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300" />
                <select className="w-full p-4 bg-primary border border-gray-600 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300">
                  <option>Select Service</option>
                  <option>Classic Cut - $30</option>
                  <option>Fade - $35</option>
                  <option>Hot Towel Shave - $25</option>
                  <option>Beard Trim - $15</option>
                </select>
                <textarea placeholder="Preferred date/time or special requests" rows={4} className="w-full p-4 bg-primary border border-gray-600 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300 resize-none"></textarea>
                <button type="submit" className="w-full bg-accent text-background py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}