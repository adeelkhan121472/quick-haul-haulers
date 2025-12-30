import Link from 'next/link';
import { pageSEO, haulerSizes } from '@/lib/seo-config';
import { getAllServicesSchema, getFAQSchema } from '@/lib/schema-markup';

export const metadata = {
  title: pageSEO.services.title,
  description: pageSEO.services.description,
  keywords: pageSEO.services.keywords,
  openGraph: {
    title: pageSEO.services.title,
    description: pageSEO.services.description,
    url: '/services',
    images: [{ url: pageSEO.services.ogImage, width: 1200, height: 630 }],
  },
  alternates: {
    canonical: '/services',
  },
};

const faqs = [
  {
    question: 'What size hauler do I need for my project?',
    answer: '10-yard haulers are perfect for small cleanouts, 15-yard for medium projects, 20-yard for home remodels and roof replacements, and 30-yard for large renovations and construction sites.'
  },
  {
    question: 'Do you offer same-day delivery?',
    answer: 'Yes! We offer same-day and next-day delivery in most service areas. Call (555) 123-4567 to check availability in your location.'
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No hidden fees! Our pricing is transparent and includes delivery, pickup, and disposal. The price you see is the price you pay.'
  },
  {
    question: 'How long can I keep the hauler?',
    answer: 'Our standard rental period is 7 days. Need it longer? We offer flexible extended rental options at competitive rates.'
  }
];

export default function Services() {
  const servicesSchema = getAllServicesSchema();
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="services">
        <section className="page-header">
          <h1>Hauler Rental Sizes & Pricing [2025]</h1>
          <p>Professional hauler rental solutions for every construction and renovation project</p>
        </section>

        <section className="services-content">
          <div className="container">
            <div className="service-category">
              <h2>Roll-Off Hauler Sizes - Starting at $495</h2>
              <div className="services-grid">
                {haulerSizes.map((hauler, index) => (
                  <div key={index} className={`service-card ${hauler.popular ? 'featured' : ''}`}>
                    {hauler.popular && <div className="popular-badge">Most Popular</div>}
                    <div className={`price-tag ${hauler.popular ? 'price-tag-featured' : ''}`}>
                      ${hauler.price}
                    </div>
                    <h3>{hauler.name}</h3>
                    <p className="service-dimension">{hauler.dimensions}</p>
                    <p>{hauler.description}</p>
                    <ul>
                      {hauler.uses.map((use, i) => (
                        <li key={i}>{use}</li>
                      ))}
                    </ul>
                    <a href="tel:5551234567" className="order-button">
                      📞 Order Now - Call (555) 123-4567
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="rental-process">
              <h2>Simple Hauler Rental Process</h2>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Choose Your Size</h3>
                  <p>Select the hauler size that fits your construction project needs</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Schedule Delivery</h3>
                  <p>Pick a convenient delivery date - same-day available</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Fill It Up</h3>
                  <p>Take your time filling the hauler with construction debris</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h3>We Haul It Away</h3>
                  <p>Call when ready and we'll pick it up promptly</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
              <h2>Frequently Asked Questions About Hauler Rentals</h2>
              <div className="faq-grid">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
