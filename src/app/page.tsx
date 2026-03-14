"use client";

import { FadeInUp } from "@/components/fade-in-up";
import { ShineBorder } from "@/components/shine-border";
import { AnimatedGrid } from "@/components/animated-grid";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const services = [
    {
      name: "Classic Cuts",
      price: "$30",
      description: "Timeless styles executed with precision and attention to detail"
    },
    {
      name: "Fades",
      price: "$35",
      description: "Clean, sharp fades that complement your personal style"
    },
    {
      name: "Hot Towel Shave",
      price: "$25",
      description: "Traditional hot towel shave for the ultimate grooming experience"
    },
    {
      name: "Beard Trim",
      price: "$15",
      description: "Professional beard shaping and trimming to perfect your look"
    }
  ];

  const experienceSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "We start with understanding your style, lifestyle, and preferences to craft the perfect cut."
    },
    {
      number: "02",
      title: "Precision Cutting",
      description: "Using professional techniques honed over 5 years, we execute your cut with meticulous attention to detail."
    },
    {
      number: "03",
      title: "Styling & Finish",
      description: "The final touches that make all the difference - styling and grooming for that perfect finish."
    }
  ];

  const testimonials = [
    {
      stars: 5,
      text: "Mike is incredibly skilled and professional. Best cut I've had in years. The attention to detail is unmatched.",
      author: "James Rodriguez"
    },
    {
      stars: 5,
      text: "Consistent quality every single time. The atmosphere is great and Mike really knows his craft. Highly recommended.",
      author: "David Chen"
    },
    {
      stars: 5,
      text: "Been coming here for 2 years now. Never disappointed. Clean, professional, and always exactly what I ask for.",
      author: "Michael Thompson"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div 
          className="hero-bg" 
          style={{
            background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2d2d2d 100%)"
          }}
        ></div>
        <div className="hero-content">
          <FadeInUp delay={0}>
            <p className="hero-subtitle">Scottsdale's Premier Barbershop</p>
            <h1 className="hero-title">Premium Cuts for the Modern Gentleman</h1>
            <p className="hero-desc">
              Experience exceptional barbering at Test Barbershop in Scottsdale. 5 years of expertise, over 2000 satisfied clients, and a 5-star Google rating.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Book Your Appointment</a>
              <a href="#services" className="btn-outline">View Services</a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stats-inner">
          <FadeInUp delay={0}>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </FadeInUp>
          <FadeInUp delay={150}>
            <div className="stat-item">
              <div className="stat-number">2000+</div>
              <div className="stat-label">Satisfied Clients</div>
            </div>
          </FadeInUp>
          <FadeInUp delay={300}>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Star Rating</div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="section-inner">
          <FadeInUp delay={0}>
            <div className="section-header">
              <p className="section-label">Our Services</p>
              <h2 className="section-title">Expert Barbering Services</h2>
              <p className="section-desc">
                From classic cuts to modern fades, we deliver precision styling tailored to your lifestyle
              </p>
            </div>
          </FadeInUp>
          <div className="services-grid">
            {services.map((service, index) => (
              <FadeInUp key={service.name} delay={index * 150}>
                <div className="service-card">
                  <h3>{service.name}</h3>
                  <div className="price">{service.price}</div>
                  <p>{service.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" className="section section-alt" style={{ position: "relative" }}>
        <AnimatedGrid 
          numSquares={100}
          maxOpacity={0.3}
          duration={3000}
          color="#d4af37"
          className="absolute inset-0 z-0"
        />
        <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
          <FadeInUp delay={0}>
            <div className="section-header">
              <p className="section-label">The Experience</p>
              <h2 className="section-title">Craftsmanship in Every Cut</h2>
              <p className="section-desc">
                Mike brings 5 years of dedicated barbering experience to every cut. Having served over 2000 clients, Test Barbershop has earned its reputation as Scottsdale's premier destination for men's grooming. Our 5-star Google rating reflects our commitment to precision, style, and exceptional service.
              </p>
            </div>
          </FadeInUp>
          <div className="experience-grid">
            {experienceSteps.map((step, index) => (
              <FadeInUp key={step.number} delay={index * 150}>
                <div className="experience-step">
                  <div className="experience-number">{step.number}</div>
                  <h3 className="experience-title">{step.title}</h3>
                  <p className="experience-desc">{step.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section">
        <div className="section-inner">
          <FadeInUp delay={0}>
            <div className="section-header">
              <p className="section-label">Client Reviews</p>
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-desc">
                Don't just take our word for it - hear from our satisfied clients who trust us with their style
              </p>
            </div>
          </FadeInUp>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <FadeInUp key={index} delay={index * 150}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <blockquote className="testimonial-text">
                    {testimonial.text}
                  </blockquote>
                  <cite className="testimonial-author">— {testimonial.author}</cite>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-inner">
          <FadeInUp delay={0}>
            <ShineBorder
              borderRadius={16}
              borderWidth={2}
              duration={3000}
              color={["#1a1a1a", "#d4af37"]}
              className="p-12 text-center"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Ready for Your Best Cut Yet?</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Experience the difference that 5 years of expertise and over 2000 satisfied clients makes. Book your appointment today.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn-primary">Book Your Appointment</a>
                <a href="tel:+1234567890" className="btn-outline">Call Now</a>
              </div>
            </ShineBorder>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-inner">
          <FadeInUp delay={0}>
            <div className="section-header">
              <p className="section-label">Get In Touch</p>
              <h2 className="section-title">Visit Test Barbershop</h2>
              <p className="section-desc">
                Located in the heart of Scottsdale, we're ready to deliver your best cut yet
              </p>
            </div>
          </FadeInUp>
          <div className="contact-section">
            <FadeInUp delay={150}>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-label">Address</div>
                  <p>123 Main St<br />Scottsdale AZ 85260</p>
                </div>
                <div className="contact-item">
                  <div className="contact-label">Hours</div>
                  <p>
                    Monday - Saturday: 10am-7pm<br />
                    Sunday: Closed
                  </p>
                </div>
                <div className="contact-item">
                  <div className="contact-label">Contact</div>
                  <p>
                    Ready for your next cut? Contact us to schedule your appointment and experience the difference that 5 years of expertise makes.
                  </p>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={300}>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Message (optional)" rows={4}></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}