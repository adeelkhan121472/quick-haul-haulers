'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    projectType: '',
    haulerSize: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get Your Free Quote</h1>
          <p className="contact-subtitle">
            Ready to rent a hauler? Contact us today for fast, reliable service and transparent pricing.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>Speak with our team</p>
              <a href="tel:5551234567" className="info-link">(555) 123-4567</a>
              <span className="info-hours">24/7 Available</span>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">✉️</div>
              <h3>Email Us</h3>
              <p>Get a response within 2 hours</p>
              <a href="mailto:info@quickhaulhaulers.com" className="info-link">
                info@quickhaulhaulers.com
              </a>
              <span className="info-hours">Mon-Sun: 6AM-10PM</span>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Chat with us online</p>
              <button className="info-link chat-button">Start Chat</button>
              <span className="info-hours">Available Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-content-wrapper">
            {/* Left Side - Form */}
            <div className="form-container">
              <h2>Request a Free Quote</h2>
              <p className="form-intro">
                Fill out the form below and we'll get back to you within 2 hours with a customized quote.
              </p>

              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>We've received your request and will contact you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="submit-another-btn"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="city">City/Location *</label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your city</option>
                        <option value="new-york">New York, NY</option>
                        <option value="los-angeles">Los Angeles, CA</option>
                        <option value="chicago">Chicago, IL</option>
                        <option value="houston">Houston, TX</option>
                        <option value="phoenix">Phoenix, AZ</option>
                        <option value="philadelphia">Philadelphia, PA</option>
                        <option value="san-antonio">San Antonio, TX</option>
                        <option value="san-diego">San Diego, CA</option>
                        <option value="dallas">Dallas, TX</option>
                        <option value="san-jose">San Jose, CA</option>
                        <option value="austin">Austin, TX</option>
                        <option value="jacksonville">Jacksonville, FL</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="projectType">Project Type *</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select project type</option>
                        <option value="home-renovation">Home Renovation</option>
                        <option value="construction">Construction</option>
                        <option value="demolition">Demolition</option>
                        <option value="landscaping">Landscaping</option>
                        <option value="cleanout">Cleanout/Junk Removal</option>
                        <option value="roofing">Roofing</option>
                        <option value="commercial">Commercial Project</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="haulerSize">Hauler Size</label>
                      <select
                        id="haulerSize"
                        name="haulerSize"
                        value={formData.haulerSize}
                        onChange={handleChange}
                      >
                        <option value="">Not sure yet</option>
                        <option value="10-yard">10 Yard Hauler</option>
                        <option value="15-yard">15 Yard Hauler</option>
                        <option value="20-yard">20 Yard Hauler</option>
                        <option value="30-yard">30 Yard Hauler</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Get Free Quote
                  </button>
                </form>
              )}
            </div>

            {/* Right Side - Benefits */}
            <div className="benefits-container">
              <h3>Why Choose Quick Haul?</h3>

              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div className="benefit-content">
                  <h4>Fast Response</h4>
                  <p>Get your quote within 2 hours and same-day delivery available</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <div className="benefit-content">
                  <h4>Transparent Pricing</h4>
                  <p>No hidden fees. What you see is what you pay</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">🏆</div>
                <div className="benefit-content">
                  <h4>Expert Service</h4>
                  <p>15+ years of experience with 100,000+ satisfied customers</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">♻️</div>
                <div className="benefit-content">
                  <h4>Eco-Friendly</h4>
                  <p>We recycle up to 80% of all collected materials</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">📞</div>
                <div className="benefit-content">
                  <h4>24/7 Support</h4>
                  <p>Our team is always available to assist you</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div className="benefit-content">
                  <h4>Licensed & Insured</h4>
                  <p>Fully licensed, bonded, and insured for your peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas-section">
        <div className="container">
          <h2>We Serve 12 Major Cities</h2>
          <p className="areas-intro">Quick Haul Haulers operates in major metropolitan areas across the United States</p>

          <div className="cities-list">
            <Link href="/locations/new-york" className="city-chip">🗽 New York</Link>
            <Link href="/locations/los-angeles" className="city-chip">🌴 Los Angeles</Link>
            <Link href="/locations/chicago" className="city-chip">🌆 Chicago</Link>
            <Link href="/locations/houston" className="city-chip">🤠 Houston</Link>
            <Link href="/locations/phoenix" className="city-chip">🌵 Phoenix</Link>
            <Link href="/locations/philadelphia" className="city-chip">🔔 Philadelphia</Link>
            <Link href="/locations/san-antonio" className="city-chip">⭐ San Antonio</Link>
            <Link href="/locations/san-diego" className="city-chip">🏖️ San Diego</Link>
            <Link href="/locations/dallas" className="city-chip">🏙️ Dallas</Link>
            <Link href="/locations/san-jose" className="city-chip">💻 San Jose</Link>
            <Link href="/locations/austin" className="city-chip">🎸 Austin</Link>
            <Link href="/locations/jacksonville" className="city-chip">🌊 Jacksonville</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>How quickly can you deliver?</h4>
              <p>We offer same-day delivery in most areas. Call us before noon for same-day service.</p>
            </div>

            <div className="faq-item">
              <h4>What are your rental periods?</h4>
              <p>Standard rental is 7 days. Extended rentals available at $10/day after initial period.</p>
            </div>

            <div className="faq-item">
              <h4>Do you require a deposit?</h4>
              <p>No deposit required! Pay after delivery with cash, credit card, or check.</p>
            </div>

            <div className="faq-item">
              <h4>What can I put in the hauler?</h4>
              <p>Most construction debris, household junk, and renovation waste. No hazardous materials.</p>
            </div>

            <div className="faq-item">
              <h4>Do I need a permit?</h4>
              <p>Permits may be required for street placement. We can help you obtain necessary permits.</p>
            </div>

            <div className="faq-item">
              <h4>Can I change my hauler size?</h4>
              <p>Yes! Contact us and we can swap it out for a different size if needed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
