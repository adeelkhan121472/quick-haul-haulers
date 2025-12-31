import Link from 'next/link';
import Image from 'next/image';
import { pageSEO, haulerSizes } from '@/lib/seo-config';
import { getReviewSchema } from '@/lib/schema-markup';

export const metadata = {
  title: pageSEO.home.title,
  description: pageSEO.home.description,
  keywords: pageSEO.home.keywords,
  openGraph: {
    title: pageSEO.home.title,
    description: pageSEO.home.description,
    url: '/',
    images: [{ url: pageSEO.home.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    title: pageSEO.home.title,
    description: pageSEO.home.description,
    images: [pageSEO.home.ogImage],
  },
  alternates: {
    canonical: '/',
  },
};

const reviews = [
  {
    author: 'Sarah Johnson',
    rating: 5,
    text: 'Outstanding service! They delivered exactly when promised and the pricing was very fair. Highly recommend for any home project.',
    date: '2024-12-15',
    location: 'Denver'
  },
  {
    author: 'Mike Rodriguez',
    rating: 5,
    text: 'We use Quick Haul for all our construction sites. Reliable, professional, and always on time. A true partner for our business.',
    date: '2024-12-10',
    location: 'Dallas'
  },
  {
    author: 'Emily Chen',
    rating: 5,
    text: 'Best hauler rental experience ever! Easy ordering, fast delivery, and great customer service. Will definitely use again.',
    date: '2024-12-05',
    location: 'Los Angeles'
  }
];

export default function Home() {
  const reviewSchema = getReviewSchema(reviews);

  return (
    <>
      {/* Review Schema */}
      {reviewSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="home">
        {/* Hero Section with SEO-optimized headings */}
        <section className="hero">
          <div className="hero-background">
            <div className="hero-pattern"></div>
          </div>
          <div className="hero-content">
            <span className="hero-badge">America's #1 Hauler Rental Service</span>
            <h1>Premium Hauler Rentals Made Simple</h1>
            <p>Professional waste management solutions for homes, businesses, and construction sites nationwide</p>
            <div className="hero-buttons">
              <Link href="/contact" className="cta-button-primary">Get Free Quote</Link>
              <Link href="/services" className="cta-button-outline">View Hauler Sizes</Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Customer Support</span>
              </div>
              <div className="stat">
                <span className="stat-number">12</span>
                <span className="stat-label">Major Cities</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="trust-badges">
          <div className="container">
            <div className="badges-grid">
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <span>Same-Day Delivery</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <span>No Hidden Fees</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <span>Eco-Friendly Disposal</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with keyword-rich content */}
        <section className="features">
          <div className="container">
            <div className="section-header">
              <h2>Why Thousands Choose Quick Haul for Hauler Rental</h2>
              <p>Experience the difference with our premium hauler rental service across America. We've been helping homeowners, contractors, and businesses manage their waste efficiently for over 15 years. Our commitment to exceptional service, competitive pricing, and environmental responsibility sets us apart in the waste management industry.</p>
              <p className="extended-paragraph">
                Whether you're tackling a small bathroom renovation, cleaning out your garage, or managing a large commercial construction project, Quick Haul Haulers has the perfect solution for you. Our fleet of well-maintained roll-off haulers ranges from 10 to 30 yards, ensuring we can accommodate projects of any size. With same-day delivery available in most areas and transparent pricing with no hidden fees, we make waste removal simple and stress-free.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>Lightning-Fast Same-Day Delivery</h3>
                <p>Need a hauler today? We offer same-day delivery in most areas. Your construction or renovation project timeline is our priority.</p>
                <span className="feature-link">Learn more →</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💎</div>
                <h3>Premium Quality Roll-Off Haulers</h3>
                <p>Clean, well-maintained waste containers that won't damage your property. Professional hauler service, every time.</p>
                <span className="feature-link">Learn more →</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Transparent Pricing - No Hidden Fees</h3>
                <p>What you see is what you pay. No surprise charges, no hidden fees. Get your instant dumpster rental quote online.</p>
                <span className="feature-link">Learn more →</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3>Eco-Conscious Waste Management</h3>
                <p>We recycle up to 80% of collected materials. Your construction debris, handled responsibly for a better planet.</p>
                <span className="feature-link">Learn more →</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview with SEO-rich content */}
        <section className="services-preview">
          <div className="container">
            <div className="services-content">
              <div className="services-text">
                <h2>Perfect Hauler Size for Every Construction Project</h2>
                <p>From small home cleanouts to massive construction projects, we have the right roll-off hauler rental for you. Choosing the correct hauler size is crucial for both efficiency and cost-effectiveness. Our experienced team can help you determine the ideal size based on your specific project needs, ensuring you don't pay for more capacity than you need while avoiding the hassle of multiple pickups.</p>
                <p className="extended-paragraph">
                  Each of our haulers is carefully maintained and cleaned between rentals to ensure you receive a professional-quality container every time. We understand that your property's appearance matters, which is why our delivery process is designed to minimize any impact on your lawn or driveway. Our expert drivers have years of experience placing haulers in tight spaces and challenging locations.
                </p>
                <ul className="services-list">
                  <li><strong>10 Yard Hauler - $495</strong> - Small cleanouts & bathroom renovations</li>
                  <li><strong>15 Yard Hauler - $550</strong> - Medium cleanouts & kitchen remodels</li>
                  <li><strong>20 Yard Hauler - $595</strong> - Home remodels & roof replacements</li>
                  <li><strong>30 Yard Hauler - $695</strong> - Large renovations & new construction</li>
                </ul>
                <Link href="/services" className="cta-button-secondary">Explore All Hauler Sizes</Link>
              </div>
              <div className="services-image">
                <Image
                  src="/images/dum-pic.png"
                  alt="Professional Haulers"
                  width={600}
                  height={400}
                  className="hauler-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What You Can Dispose Section */}
        <section className="disposal-info">
          <div className="container">
            <div className="info-content">
              <h2>What Can You Put in Our Haulers?</h2>
              <p className="intro-text">
                Our haulers accept a wide variety of materials commonly generated during home renovations, construction projects, and cleanouts. We're committed to responsible waste management, which means we carefully sort and recycle up to 80% of the materials we collect. This not only helps the environment but also keeps our prices competitive by reducing landfill fees.
              </p>
              <div className="disposal-grid">
                <div className="disposal-column">
                  <h3>✓ Accepted Materials</h3>
                  <ul className="disposal-list">
                    <li>Construction debris (wood, drywall, metal)</li>
                    <li>Roofing shingles and materials</li>
                    <li>Furniture and appliances (most types)</li>
                    <li>Yard waste and green waste</li>
                    <li>Concrete, brick, and asphalt</li>
                    <li>Carpet and flooring materials</li>
                    <li>General household junk</li>
                    <li>Clean soil and dirt</li>
                  </ul>
                </div>
                <div className="disposal-column">
                  <h3>✗ Prohibited Items</h3>
                  <ul className="disposal-list">
                    <li>Hazardous chemicals and paint</li>
                    <li>Automotive fluids and batteries</li>
                    <li>Asbestos-containing materials</li>
                    <li>Medical waste and biohazards</li>
                    <li>Propane tanks and gas cylinders</li>
                    <li>Electronics (we can arrange special pickup)</li>
                    <li>Tires (separate disposal required)</li>
                    <li>Food waste and perishables</li>
                  </ul>
                </div>
              </div>
              <p className="note-text">
                Not sure if your material is acceptable? Give us a call at (555) 123-4567. Our knowledgeable staff can answer any questions about what can and cannot be placed in your hauler. We can also provide guidance on proper disposal methods for prohibited items and connect you with appropriate recycling facilities in your area.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <div className="container">
            <div className="section-header">
              <h2>How Our Hauler Rental Service Works</h2>
              <p>Get your hauler delivered in 4 simple steps - it's easier than you think!</p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Choose Your Size</h3>
                <p>Select the perfect hauler size for your project. From 10 to 30 yards, we have options for every need.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Schedule Delivery</h3>
                <p>Pick your delivery date and time. Same-day delivery available in most areas - we work around your schedule.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Fill It Up</h3>
                <p>Take your time loading the hauler. We provide up to 7 days rental period, with flexible extensions available.</p>
              </div>
              <div className="step-card">
                <div className="step-number">4</div>
                <h3>We Haul It Away</h3>
                <p>Call us when you're ready. We'll pick up the hauler and handle all disposal responsibly and eco-friendly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="service-areas">
          <div className="container">
            <div className="section-header">
              <h2>Serving 12 Major Cities Nationwide</h2>
              <p>Professional hauler rental services in your area. We're proud to serve millions of customers across the United States with our reliable, affordable hauler rental services. Each location is staffed with experienced professionals who understand the unique waste management needs and regulations of their local area. From bustling metropolitan areas to growing suburban communities, Quick Haul Haulers is your trusted partner for waste removal.</p>
            </div>
            <div className="cities-grid">
              <Link href="/locations/new-york" className="city-card">
                <span className="city-icon">📍</span>
                <h3>New York</h3>
                <p>All 5 boroughs</p>
              </Link>
              <Link href="/locations/los-angeles" className="city-card">
                <span className="city-icon">📍</span>
                <h3>Los Angeles</h3>
                <p>Greater LA area</p>
              </Link>
              <Link href="/locations/chicago" className="city-card">
                <span className="city-icon">📍</span>
                <h3>Chicago</h3>
                <p>Metro Chicago</p>
              </Link>
              <Link href="/locations/houston" className="city-card">
                <span className="city-icon">📍</span>
                <h3>Houston</h3>
                <p>Harris County</p>
              </Link>
              <Link href="/locations/phoenix" className="city-card">
                <span className="city-icon">📍</span>
                <h3>Phoenix</h3>
                <p>Valley area</p>
              </Link>
              <Link href="/locations/philadelphia" className="city-card">
                <span className="city-icon">📍</span>
                <h3>Philadelphia</h3>
                <p>Philly metro</p>
              </Link>
              <Link href="/locations/san-antonio" className="city-card">
                <span className="city-icon">📍</span>
                <h3>San Antonio</h3>
                <p>Bexar County</p>
              </Link>
              <Link href="/locations/san-diego" className="city-card">
                <span className="city-icon">📍</span>
                <h3>San Diego</h3>
                <p>San Diego County</p>
              </Link>
              <Link href="/locations/dallas" className="city-card">
                <span className="city-icon">📍</span>
                <h3>Dallas</h3>
                <p>DFW metroplex</p>
              </Link>
              <Link href="/locations/san-jose" className="city-card">
                <span className="city-icon">📍</span>
                <h3>San Jose</h3>
                <p>Silicon Valley</p>
              </Link>
              <Link href="/locations/austin" className="city-card">
                <span className="city-icon">📍</span>
                <h3>Austin</h3>
                <p>Travis County</p>
              </Link>
              <Link href="/locations/jacksonville" className="city-card">
                <span className="city-icon">📍</span>
                <h3>Jacksonville</h3>
                <p>Duval County</p>
              </Link>
            </div>
            <div className="cta-center">
              <Link href="/locations" className="cta-button-secondary">View All Locations</Link>
            </div>
          </div>
        </section>

        {/* Testimonials with structured data */}
        <section className="testimonials">
          <div className="container">
            <h2>What Our Hauler Rental Customers Say</h2>
            <div className="testimonials-grid">
              {reviews.map((review, index) => (
                <div key={index} className="testimonial-card">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <p>&quot;{review.text}&quot;</p>
                  <div className="testimonial-author">
                    <strong>{review.author}</strong>
                    <span>{review.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Rent a Hauler for Your Project?</h2>
              <p>Get your free hauler rental quote in under 60 seconds. No credit card required.</p>
              <div className="cta-buttons-group">
                <Link href="/contact" className="cta-button-large">Get Free Quote Now</Link>
                <a href="tel:5551234567" className="cta-button-phone">
                  <span className="phone-icon">📞</span>
                  <span>(555) 123-4567</span>
                </a>
              </div>
              <p className="cta-guarantee">✓ 100% Satisfaction Guaranteed</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
