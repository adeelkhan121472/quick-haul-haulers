import Link from 'next/link';
import { Suspense } from 'react';
import { pageSEO, haulerSizes } from '@/lib/seo-config';
import { blogPosts, faqs, comparisonTable, trustSignals } from '@/lib/enhanced-content';
import { getReviewSchema, getFAQSchema } from '@/lib/schema-markup';
import { getHowToSchema, getArticleSchema, getSpeakableSchema } from '@/lib/advanced-schema';

// Enhanced metadata with latest SEO features
export const metadata = {
  title: pageSEO.home.title,
  description: pageSEO.home.description,
  keywords: pageSEO.home.keywords,

  // Open Graph - Enhanced
  openGraph: {
    title: pageSEO.home.title,
    description: pageSEO.home.description,
    url: '/',
    siteName: 'Quick Haul Haulers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Quick Haul Haulers - Premium Dumpster Rental Service',
      },
      {
        url: '/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'Quick Haul Haulers Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter - Enhanced
  twitter: {
    card: 'summary_large_image',
    title: pageSEO.home.title,
    description: pageSEO.home.description,
    images: ['/twitter-card.jpg'],
    creator: '@quickhaulhaulers',
    site: '@quickhaulhaulers',
  },

  // Additional metadata
  category: 'Waste Management',
  classification: 'Business Service',

  // Geo-targeting
  other: {
    'geo.region': 'US',
    'geo.placename': 'United States',
    'geo.position': '40.7128;-74.0060',
    'ICBM': '40.7128, -74.0060',
  },

  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'es-US': '/es',
    },
  },

  // App links for future mobile app
  appLinks: {
    web: {
      url: 'https://quickhaulhaulers.com',
      should_fallback: true,
    },
  },
};

// Review data
const reviews = [
  {
    author: 'Sarah Johnson',
    rating: 5,
    text: 'Outstanding service! Delivered exactly when promised. The 20-yard dumpster was perfect for our kitchen remodel. Pricing was very fair with absolutely no hidden fees. Highly recommend for any home project.',
    date: '2024-12-15',
    location: 'Denver, CO',
    projectType: 'Kitchen Remodel',
    verified: true
  },
  {
    author: 'Mike Rodriguez',
    rating: 5,
    text: 'We use Quick Haul for all our construction sites across Dallas. Always reliable, professional, and on time. Their same-day delivery saved our project twice. A true partner for our business.',
    date: '2024-12-10',
    location: 'Dallas, TX',
    projectType: 'Commercial Construction',
    verified: true
  },
  {
    author: 'Emily Chen',
    rating: 5,
    text: 'Best hauler rental experience ever! The online ordering was simple, delivery was within 2 hours, and customer service was excellent. The 15-yard dumpster handled our entire basement cleanout. Will definitely use again.',
    date: '2024-12-05',
    location: 'Los Angeles, CA',
    projectType: 'Basement Cleanout',
    verified: true
  },
  {
    author: 'Robert Martinez',
    rating: 5,
    text: 'Needed a 30-yard dumpster for our demolition project. Quick Haul delivered on time, the dumpster was clean and well-maintained. Pickup was just as smooth. Great company, great service!',
    date: '2024-11-28',
    location: 'Phoenix, AZ',
    projectType: 'Demolition',
    verified: true
  }
];

// Latest blog posts for homepage
const featuredPosts = blogPosts.slice(0, 3);

export default function Home() {
  const reviewSchema = getReviewSchema(reviews);
  const faqSchema = getFAQSchema(faqs.flatMap(cat => cat.questions));
  const speakableSchema = getSpeakableSchema();
  const articlesSchema = featuredPosts.map(post => getArticleSchema(post));

  return (
    <>
      {/* Enhanced Schema Markup */}
      {reviewSchema.map((schema, index) => (
        <script
          key={`review-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      {articlesSchema.map((schema, index) => (
        <script
          key={`article-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="home">
        {/* Hero Section - Enhanced with Trust Signals */}
        <section className="hero" itemScope itemType="https://schema.org/Service">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <span className="hero-badge" itemProp="award">🏆 America's #1 Hauler Rental Service</span>
            <h1 itemProp="name">Premium Dumpster Rentals Made Simple - Same-Day Delivery Available</h1>
            <p itemProp="description">
              Professional waste management solutions for homes, businesses, and construction sites nationwide.
              Serving 12 major cities with eco-friendly disposal and transparent pricing.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="hero-buttons">
              <Link href="/contact" className="cta-button-primary" aria-label="Get instant free quote">
                <span className="cta-icon">💬</span>
                Get Free Quote - 60 Seconds
              </Link>
              <a href="tel:5551234567" className="cta-button-phone" aria-label="Call for immediate assistance">
                <span className="cta-icon">📞</span>
                (555) 123-4567 - Call Now
              </a>
            </div>

            {/* Trust Stats */}
            <div className="hero-stats">
              {trustSignals.stats.slice(0, 4).map((stat, index) => (
                <div key={index} className="stat" itemProp="rating" itemScope itemType="https://schema.org/AggregateRating">
                  <span className="stat-icon">{stat.icon}</span>
                  <span className="stat-number" itemProp="ratingValue">{stat.number}</span>
                  <span className="stat-label" itemProp="ratingCount">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Live Availability Indicator */}
            <div className="availability-badge">
              <span className="pulse-dot"></span>
              <span>✓ Same-Day Delivery Available - Order Within 3 Hours</span>
            </div>
          </div>
        </section>

        {/* Trust Badges - Enhanced */}
        <section className="trust-badges" aria-label="Trust and credibility indicators">
          <div className="container">
            <div className="badges-grid">
              {trustSignals.certifications.map((cert, index) => (
                <div key={index} className="badge-item">
                  <span className="badge-icon-large">{cert.icon}</span>
                  <div className="badge-content">
                    <strong>{cert.name}</strong>
                    <p>{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dumpster Size Comparison Table - NEW */}
        <section className="comparison-section">
          <div className="container">
            <h2>Compare Hauler Sizes - Find Your Perfect Match</h2>
            <p className="section-subtitle">
              Quick reference guide to choose the right dumpster size for your construction or renovation project
            </p>

            <div className="comparison-table-wrapper">
              <table className="comparison-table" itemScope itemType="https://schema.org/Table">
                <thead>
                  <tr>
                    {comparisonTable.columns.map((col, index) => (
                      <th key={index} className={index > 0 ? 'size-column' : ''}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className={cellIndex > 0 ? 'size-data' : 'feature-name'}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-cta">
              <p>Still not sure which size you need?</p>
              <Link href="/calculator" className="cta-button-secondary">
                Use Our Free Size Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section - Enhanced with Icons */}
        <section className="features" aria-labelledby="features-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="features-heading">Why 50,000+ Customers Choose Quick Haul for Dumpster Rental</h2>
              <p>Experience the difference with our premium hauler rental service across America</p>
            </div>
            <div className="features-grid">
              <article className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>Lightning-Fast Same-Day Delivery</h3>
                <p>
                  Need a hauler today? We offer <strong>same-day delivery</strong> in most areas when you order before noon.
                  Your construction or renovation project timeline is our priority. <strong>Next-day delivery guaranteed.</strong>
                </p>
                <ul className="feature-benefits">
                  <li>✓ Order by noon, delivery by 5pm</li>
                  <li>✓ Real-time tracking available</li>
                  <li>✓ 2-hour delivery windows</li>
                </ul>
                <Link href="/delivery" className="feature-link">Learn about delivery →</Link>
              </article>

              <article className="feature-card">
                <div className="feature-icon">💎</div>
                <h3>Premium Quality Roll-Off Haulers</h3>
                <p>
                  Clean, well-maintained <strong>waste containers</strong> that won't damage your property.
                  All dumpsters sanitized before delivery. Professional hauler service with experienced drivers.
                </p>
                <ul className="feature-benefits">
                  <li>✓ Sanitized before each rental</li>
                  <li>✓ Protective rubber wheels</li>
                  <li>✓ Easy walk-in doors available</li>
                </ul>
                <Link href="/equipment" className="feature-link">See our equipment →</Link>
              </article>

              <article className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Transparent Pricing - Zero Hidden Fees</h3>
                <p>
                  What you see is what you pay. <strong>No surprise charges</strong>, no hidden fees, no fine print.
                  Get your instant <strong>dumpster rental quote</strong> online in 60 seconds.
                </p>
                <ul className="feature-benefits">
                  <li>✓ All-inclusive pricing shown upfront</li>
                  <li>✓ Price match guarantee</li>
                  <li>✓ No credit card required for quotes</li>
                </ul>
                <Link href="/pricing" className="feature-link">View pricing →</Link>
              </article>

              <article className="feature-card featured-highlight">
                <div className="feature-badge">Most Popular</div>
                <div className="feature-icon">🌍</div>
                <h3>Eco-Conscious Waste Management</h3>
                <p>
                  We recycle up to <strong>80% of collected materials</strong>. Your construction debris handled responsibly
                  for a better planet. Certified EPA waste handler.
                </p>
                <ul className="feature-benefits">
                  <li>✓ 80% materials recycled</li>
                  <li>✓ EPA certified processes</li>
                  <li>✓ Green waste composting</li>
                </ul>
                <Link href="/sustainability" className="feature-link">Our green practices →</Link>
              </article>
            </div>
          </div>
        </section>

        {/* Services Preview - Enhanced with Pricing */}
        <section className="services-preview" aria-labelledby="services-heading">
          <div className="container">
            <div className="services-content">
              <div className="services-text">
                <h2 id="services-heading">Perfect Hauler Size for Every Construction & Renovation Project</h2>
                <p>
                  From small home cleanouts to massive commercial construction projects, we have the right
                  <strong> roll-off dumpster rental</strong> for you. All sizes available for <strong>same-day delivery</strong>.
                </p>

                {/* Enhanced Services List with Details */}
                <div className="services-detailed-list">
                  {haulerSizes.map((hauler, index) => (
                    <div key={index} className={`service-item ${hauler.popular ? 'popular-service' : ''}`}>
                      {hauler.popular && <span className="popular-tag">⭐ Most Popular</span>}
                      <div className="service-header">
                        <strong>{hauler.name}</strong>
                        <span className="service-price">${hauler.price}</span>
                      </div>
                      <p className="service-desc">{hauler.description}</p>
                      <div className="service-specs">
                        <span>📏 {hauler.dimensions}</span>
                        <span>⚖️ {hauler.capacity}</span>
                      </div>
                      <div className="service-uses">
                        <strong>Best for:</strong> {hauler.uses.slice(0, 2).join(', ')}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="services-cta-group">
                  <Link href="/services" className="cta-button-secondary">
                    Compare All Sizes & Pricing
                  </Link>
                  <Link href="/calculator" className="cta-button-outline">
                    Use Size Calculator
                  </Link>
                </div>
              </div>
              <div className="services-image">
                <div className="image-placeholder">
                  <span className="placeholder-icon">🚛</span>
                  <h3>Professional Haulers</h3>
                  <p>Clean, Safe, Reliable</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews - Enhanced with Details */}
        <section className="testimonials" aria-labelledby="testimonials-heading">
          <div className="container">
            <h2 id="testimonials-heading">What Our Hauler Rental Customers Say - 4.9/5 Stars</h2>
            <p className="section-subtitle">
              Over 50,000 satisfied customers across 12 major US cities. Read real reviews from verified projects.
            </p>

            <div className="testimonials-grid">
              {reviews.map((review, index) => (
                <article key={index} className="testimonial-card" itemScope itemType="https://schema.org/Review">
                  <div className="review-header">
                    <div className="stars" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <span itemProp="ratingValue" content="5">⭐⭐⭐⭐⭐</span>
                      {review.verified && <span className="verified-badge">✓ Verified Purchase</span>}
                    </div>
                    <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
                  </div>

                  <p itemProp="reviewBody" className="review-text">&quot;{review.text}&quot;</p>

                  <div className="review-meta">
                    <div className="project-type">
                      <strong>Project:</strong> {review.projectType}
                    </div>
                  </div>

                  <div className="testimonial-author" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <div className="author-info">
                      <strong itemProp="name">{review.author}</strong>
                      <span className="author-location">{review.location}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="reviews-cta">
              <p>Join thousands of satisfied customers</p>
              <Link href="/reviews" className="cta-button-outline">
                Read All 2,847 Reviews
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section - Enhanced with Categories */}
        <section className="faq-section" aria-labelledby="faq-heading">
          <div className="container">
            <h2 id="faq-heading">Frequently Asked Questions About Dumpster Rentals</h2>
            <p className="section-subtitle">
              Get instant answers to common questions about hauler rental pricing, delivery, and services
            </p>

            <div className="faq-categories">
              {faqs.slice(0, 2).map((category, catIndex) => (
                <div key={catIndex} className="faq-category">
                  <h3 className="faq-category-title">{category.category}</h3>
                  <div className="faq-list">
                    {category.questions.slice(0, 3).map((faq, faqIndex) => (
                      <details key={faqIndex} className="faq-item" itemScope itemType="https://schema.org/Question">
                        <summary itemProp="name">{faq.question}</summary>
                        <div className="faq-answer" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                          <p itemProp="text">{faq.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="faq-cta">
              <Link href="/faq" className="cta-button-secondary">
                View All FAQs ({faqs.reduce((acc, cat) => acc + cat.questions.length, 0)} Questions)
              </Link>
            </div>
          </div>
        </section>

        {/* Blog/Resources Section - NEW */}
        <section className="blog-preview" aria-labelledby="blog-heading">
          <div className="container">
            <h2 id="blog-heading">Expert Guides & Dumpster Rental Resources</h2>
            <p className="section-subtitle">
              Learn from our waste management experts. Tips, guides, and best practices for your project.
            </p>

            <div className="blog-grid">
              {featuredPosts.map((post, index) => (
                <article key={index} className="blog-card">
                  <div className="blog-image">
                    <div className="blog-category">{post.category}</div>
                  </div>
                  <div className="blog-content">
                    <h3>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-meta">
                      <span>📅 {new Date(post.date).toLocaleDateString()}</span>
                      <span>⏱️ {post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="blog-link">
                      Read Full Guide →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="blog-cta">
              <Link href="/blog" className="cta-button-outline">
                View All Guides & Resources
              </Link>
            </div>
          </div>
        </section>

        {/* Guarantees Section - NEW */}
        <section className="guarantees-section">
          <div className="container">
            <h2>Our Customer Satisfaction Guarantees</h2>
            <div className="guarantees-grid">
              {trustSignals.guarantees.map((guarantee, index) => (
                <div key={index} className="guarantee-card">
                  <div className="guarantee-icon">✓</div>
                  <h3>{guarantee.title}</h3>
                  <p>{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section - Enhanced */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Rent a Dumpster for Your Project?</h2>
              <p className="cta-subtitle">
                Get your free hauler rental quote in under 60 seconds. No credit card required.
                Same-day delivery available.
              </p>

              <div className="cta-buttons-group">
                <Link href="/contact" className="cta-button-large">
                  <span className="cta-icon">💬</span>
                  Get Free Instant Quote
                </Link>
                <a href="tel:5551234567" className="cta-button-phone">
                  <span className="phone-icon">📞</span>
                  <div className="phone-details">
                    <span className="phone-number">(555) 123-4567</span>
                    <span className="phone-subtext">24/7 Customer Support</span>
                  </div>
                </a>
              </div>

              <div className="cta-features">
                <span>✓ 100% Satisfaction Guaranteed</span>
                <span>✓ Same-Day Delivery Available</span>
                <span>✓ No Hidden Fees</span>
                <span>✓ Licensed & Insured</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
