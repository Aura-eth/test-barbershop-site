export default function Home() {
  return (
    <main>
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-primary to-secondary">
        <div className="absolute inset-0 bg-[url('/barbershop-hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-text mb-6 leading-tight">Premium Cuts. <span className="text-accent">Timeless Tradition.</span></h1>
            <p className="text-xl text-text/80 mb-8 leading-relaxed">Where craftsmanship meets style in the heart of Scottsdale. Mike delivers the finest barbering experience with classic techniques and modern precision.</p>
            <button className="bg-accent text-primary px-8 py-4 font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">Book Your Cut</button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text mb-6">Master Barbering Services</h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto">Each service delivered with precision, care, and decades of expertise</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 hover:bg-secondary/80 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-text mb-4">Classic Cuts</h3>
              <p className="text-text/70 mb-6">Timeless styles executed with modern precision. From executive cuts to traditional looks that never go out of style.</p>
              <div className="text-accent font-semibold text-lg">$45</div>
            </div>
            <div className="bg-secondary p-8 hover:bg-secondary/80 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-text mb-4">Fades</h3>
              <p className="text-text/70 mb-6">Perfect blending and seamless transitions. High, mid, or low fades tailored to complement your features.</p>
              <div className="text-accent font-semibold text-lg">$55</div>
            </div>
            <div className="bg-secondary p-8 hover:bg-secondary/80 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-text mb-4">Hot Towel Shave</h3>
              <p className="text-text/70 mb-6">The ultimate gentleman's experience. Traditional hot towel treatment with expert straight razor technique.</p>
              <div className="text-accent font-semibold text-lg">$65</div>
            </div>
            <div className="bg-secondary p-8 hover:bg-secondary/80 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-text mb-4">Beard Trim</h3>
              <p className="text-text/70 mb-6">Sculpt and refine your facial hair with professional trimming and shaping techniques.</p>
              <div className="text-accent font-semibold text-lg">$35</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text mb-8">Craftsmanship & <span className="text-accent">Tradition</span></h2>
              <p className="text-lg text-text/80 leading-relaxed mb-8">Test Barbershop represents the finest in traditional barbering. Under Mike's expert hands, every client receives personalized attention and master-level craftsmanship. We believe a great haircut is more than just trimming hair—it's about confidence, tradition, and the art of looking your absolute best.</p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-text/70">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">5000+</div>
                  <div className="text-text/70">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-text/70">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center">
                  <svg className="w-24 h-24 text-accent/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text mb-6">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-text/80 mb-6 italic">"Mike is a true artist. Best haircut I've ever had. The attention to detail is incredible."</p>
              <div className="text-accent font-semibold">- James R.</div>
            </div>
            <div className="bg-secondary p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-text/80 mb-6 italic">"Professional, skilled, and always delivers exactly what I want. Wouldn't go anywhere else."</p>
              <div className="text-accent font-semibold">- David M.</div>
            </div>
            <div className="bg-secondary p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-text/80 mb-6 italic">"The hot towel shave is an experience every man should have. Pure luxury and skill."</p>
              <div className="text-accent font-semibold">- Michael T.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text mb-6">Visit Test Barbershop</h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto">Located in the heart of Scottsdale. Walk-ins welcome or book ahead to guarantee your time.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-text mb-4">Location</h3>
                  <p className="text-text/80 mb-4">Conveniently located on Main Street in Scottsdale, Test Barbershop is your destination for premium grooming services.</p>
                  <div className="space-y-2 text-text/80">
                    <p>123 Main Street</p>
                    <p>Scottsdale, AZ 85251</p>
                    <p>(480) 555-0123</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-text mb-4">Hours</h3>
                  <p className="text-text/80 mb-4">We're here when you need us most</p>
                  <div className="space-y-2 text-text/80">
                    <div className="flex justify-between"><span>Monday - Friday</span><span>9:00 AM - 7:00 PM</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span>8:00 AM - 6:00 PM</span></div>
                    <div className="flex justify-between"><span>Sunday</span><span>10:00 AM - 4:00 PM</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-primary p-8">
                <h3 className="font-heading text-2xl font-semibold text-text mb-6">Book Your Appointment</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-text/80 mb-2">Name</label>
                    <input type="text" className="w-full bg-secondary border border-secondary/50 px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <label className="block text-text/80 mb-2">Phone</label>
                    <input type="tel" className="w-full bg-secondary border border-secondary/50 px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <label className="block text-text/80 mb-2">Service</label>
                    <select className="w-full bg-secondary border border-secondary/50 px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors duration-300">
                      <option>Classic Cut</option>
                      <option>Fade</option>
                      <option>Hot Towel Shave</option>
                      <option>Beard Trim</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-text/80 mb-2">Preferred Date & Time</label>
                    <input type="datetime-local" className="w-full bg-secondary border border-secondary/50 px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <label className="block text-text/80 mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-secondary border border-secondary/50 px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors duration-300 resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-accent text-primary py-4 font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">Book Appointment</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}