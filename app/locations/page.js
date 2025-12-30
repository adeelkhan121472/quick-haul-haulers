import Link from 'next/link';

export const metadata = {
  title: 'Service Locations - Quick Haul Haulers | 12 Major Cities Nationwide',
  description: 'Quick Haul Haulers serves 12 major cities across America. Find hauler rental services in New York, Los Angeles, Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, San Jose, Austin, and Jacksonville.',
  keywords: 'hauler rental locations, dumpster rental near me, waste removal service areas, roll-off container cities',
};

export default function LocationsPage() {
  const locations = [
    {
      city: 'New York',
      state: 'NY',
      slug: 'new-york',
      coverage: 'All 5 Boroughs',
      icon: '🗽',
      description: 'Serving Manhattan, Brooklyn, Queens, Bronx, and Staten Island with reliable hauler rental services for construction, renovation, and cleanout projects.',
      phone: '(555) 101-2000',
      features: ['Same-day delivery', '24/7 service', 'All boroughs covered']
    },
    {
      city: 'Los Angeles',
      state: 'CA',
      slug: 'los-angeles',
      coverage: 'Greater LA Area',
      icon: '🌴',
      description: 'Comprehensive hauler rental coverage throughout Los Angeles County, including Hollywood, Santa Monica, Pasadena, Long Beach, and surrounding communities.',
      phone: '(555) 102-2000',
      features: ['Hollywood to Beach Cities', 'Fast delivery', 'Flexible scheduling']
    },
    {
      city: 'Chicago',
      state: 'IL',
      slug: 'chicago',
      coverage: 'Metro Chicago',
      icon: '🌆',
      description: 'Serving Chicago and surrounding Cook County areas with professional waste removal services for residential and commercial projects.',
      phone: '(555) 103-2000',
      features: ['City & suburbs', 'Winter service', 'Commercial available']
    },
    {
      city: 'Houston',
      state: 'TX',
      slug: 'houston',
      coverage: 'Harris County',
      icon: '🤠',
      description: 'Complete hauler rental service throughout Houston and Harris County, from Energy Corridor to Clear Lake and everywhere in between.',
      phone: '(555) 104-2000',
      features: ['All Harris County', 'Oil & gas projects', 'Large capacity']
    },
    {
      city: 'Phoenix',
      state: 'AZ',
      slug: 'phoenix',
      coverage: 'Valley Area',
      icon: '🌵',
      description: 'Serving Phoenix, Scottsdale, Tempe, Mesa, Glendale, and all Valley cities with dependable hauler rental solutions.',
      phone: '(555) 105-2000',
      features: ['All Valley cities', 'Desert landscaping', 'Heat-resistant service']
    },
    {
      city: 'Philadelphia',
      state: 'PA',
      slug: 'philadelphia',
      coverage: 'Philly Metro',
      icon: '🔔',
      description: 'Professional hauler rental services across Philadelphia and the greater metropolitan area including suburbs and surrounding counties.',
      phone: '(555) 106-2000',
      features: ['City & counties', 'Historic district care', 'Permit assistance']
    },
    {
      city: 'San Antonio',
      state: 'TX',
      slug: 'san-antonio',
      coverage: 'Bexar County',
      icon: '⭐',
      description: 'Serving San Antonio and all of Bexar County with reliable roll-off hauler rentals for construction, remodeling, and cleanup projects.',
      phone: '(555) 107-2000',
      features: ['Bexar County wide', 'Military-friendly', 'Bilingual service']
    },
    {
      city: 'San Diego',
      state: 'CA',
      slug: 'san-diego',
      coverage: 'San Diego County',
      icon: '🏖️',
      description: 'Complete coverage of San Diego County from downtown to North County, East County, and South Bay communities.',
      phone: '(555) 108-2000',
      features: ['County-wide service', 'Beach access', 'Eco-friendly']
    },
    {
      city: 'Dallas',
      state: 'TX',
      slug: 'dallas',
      coverage: 'DFW Metroplex',
      icon: '🏙️',
      description: 'Comprehensive hauler rental service throughout Dallas, Fort Worth, and the entire DFW Metroplex including Plano, Irving, and Arlington.',
      phone: '(555) 109-2000',
      features: ['Full DFW coverage', 'Corporate accounts', 'Next-day delivery']
    },
    {
      city: 'San Jose',
      state: 'CA',
      slug: 'san-jose',
      coverage: 'Silicon Valley',
      icon: '💻',
      description: 'Serving San Jose and the entire Silicon Valley region with professional waste management solutions for tech campuses and residential projects.',
      phone: '(555) 110-2000',
      features: ['Tech-friendly', 'E-waste handling', 'Startup discounts']
    },
    {
      city: 'Austin',
      state: 'TX',
      slug: 'austin',
      coverage: 'Travis County',
      icon: '🎸',
      description: 'Professional hauler rental services throughout Austin and Travis County, supporting the city\'s rapid growth and development.',
      phone: '(555) 111-2000',
      features: ['Keep Austin Green', 'Festival cleanup', 'Rapid growth support']
    },
    {
      city: 'Jacksonville',
      state: 'FL',
      slug: 'jacksonville',
      coverage: 'Duval County',
      icon: '🌊',
      description: 'Serving Jacksonville and Duval County with reliable hauler rental services for coastal construction and interior renovation projects.',
      phone: '(555) 112-2000',
      features: ['Coastal service', 'Hurricane cleanup', 'Beach communities']
    }
  ];

  return (
    <>
      <div className="locations-page">
        {/* Hero Section */}
        <section className="locations-hero">
          <div className="container">
            <h1>Our Service Locations</h1>
            <p className="hero-subtitle">
              Quick Haul Haulers proudly serves 12 major metropolitan areas across the United States.
              With local teams in each city, we provide fast, reliable hauler rental services tailored to your community's needs.
            </p>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="locations-grid-section">
          <div className="container">
            <div className="locations-grid">
              {locations.map((location, index) => (
                <div key={index} className="location-card">
                  <div className="location-icon">{location.icon}</div>
                  <h2>{location.city}, {location.state}</h2>
                  <p className="coverage-area">{location.coverage}</p>
                  <p className="location-description">{location.description}</p>

                  <div className="location-features">
                    {location.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">✓ {feature}</span>
                    ))}
                  </div>

                  <div className="location-contact">
                    <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} className="location-phone">
                      📞 {location.phone}
                    </a>
                    <Link href={`/locations/${location.slug}`} className="location-cta">
                      View {location.city}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Map Section */}
        <section className="coverage-section">
          <div className="container">
            <h2>Nationwide Coverage, Local Service</h2>
            <p className="coverage-intro">
              Our strategically located service centers across America ensure you receive prompt,
              professional hauler rental service no matter where your project is located. Each location
              is staffed with experienced professionals who understand local regulations, disposal requirements,
              and the unique needs of your community.
            </p>

            <div className="coverage-stats">
              <div className="stat-card">
                <div className="stat-number">12</div>
                <div className="stat-label">Major Cities</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Counties Served</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Service Available</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Details */}
        <section className="service-details">
          <div className="container">
            <h2>What We Serve in Your Area</h2>
            <div className="service-types-grid">
              <div className="service-type">
                <h3>🏗️ Construction Sites</h3>
                <p>Professional waste management for commercial and residential construction projects of any size.</p>
              </div>
              <div className="service-type">
                <h3>🏠 Home Renovations</h3>
                <p>Perfect for kitchen remodels, bathroom updates, and whole-home renovation projects.</p>
              </div>
              <div className="service-type">
                <h3>🏢 Commercial Projects</h3>
                <p>Scalable solutions for office cleanouts, retail renovations, and facility maintenance.</p>
              </div>
              <div className="service-type">
                <h3>🌳 Landscaping Work</h3>
                <p>Efficient removal of yard waste, green waste, soil, and landscaping materials.</p>
              </div>
              <div className="service-type">
                <h3>🏚️ Demolition Sites</h3>
                <p>Heavy-duty haulers for demolition debris, concrete, brick, and structural materials.</p>
              </div>
              <div className="service-type">
                <h3>🧹 Estate Cleanouts</h3>
                <p>Compassionate service for estate sales, downsizing, and property cleanout projects.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="locations-cta">
          <div className="container">
            <h2>Don't See Your City?</h2>
            <p>
              We're constantly expanding our service areas. Contact us to check if we serve your location
              or to inquire about upcoming expansion plans.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="cta-button-primary">Contact Us</Link>
              <a href="tel:5551234567" className="cta-button-secondary">
                📞 Call (555) 123-4567
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
