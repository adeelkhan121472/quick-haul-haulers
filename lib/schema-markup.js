import { siteConfig, haulerSizes } from './seo-config';

// Organization Schema
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/images/company-photo.jpg`,
    priceRange: '$495-$695',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128',
      longitude: '-74.0060'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00'
      }
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.twitter,
      siteConfig.social.instagram
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2847',
      bestRating: '5',
      worstRating: '1'
    },
    areaServed: [
      { '@type': 'City', name: 'New York', '@id': 'https://www.wikidata.org/wiki/Q60' },
      { '@type': 'City', name: 'Los Angeles', '@id': 'https://www.wikidata.org/wiki/Q65' },
      { '@type': 'City', name: 'Chicago', '@id': 'https://www.wikidata.org/wiki/Q1297' },
      { '@type': 'City', name: 'Houston', '@id': 'https://www.wikidata.org/wiki/Q16555' },
      { '@type': 'City', name: 'Phoenix', '@id': 'https://www.wikidata.org/wiki/Q16556' },
      { '@type': 'City', name: 'Philadelphia', '@id': 'https://www.wikidata.org/wiki/Q1345' },
      { '@type': 'City', name: 'San Antonio', '@id': 'https://www.wikidata.org/wiki/Q975' },
      { '@type': 'City', name: 'San Diego', '@id': 'https://www.wikidata.org/wiki/Q16552' },
      { '@type': 'City', name: 'Dallas', '@id': 'https://www.wikidata.org/wiki/Q16557' },
      { '@type': 'City', name: 'San Jose', '@id': 'https://www.wikidata.org/wiki/Q16553' },
      { '@type': 'City', name: 'Austin', '@id': 'https://www.wikidata.org/wiki/Q16559' },
      { '@type': 'City', name: 'Jacksonville', '@id': 'https://www.wikidata.org/wiki/Q16568' }
    ]
  };
}

// Service Schema
export function getServiceSchema(hauler) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/services#${hauler.name.toLowerCase().replace(/\s+/g, '-')}`,
    serviceType: hauler.name,
    provider: {
      '@id': `${siteConfig.url}/#organization`
    },
    description: hauler.description,
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: hauler.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2025-01-01',
      priceValidUntil: '2025-12-31',
      itemOffered: {
        '@type': 'Product',
        name: hauler.name,
        description: hauler.description,
        sku: `HAULER-${hauler.capacity.replace(/\s+/g, '')}`,
        category: 'Waste Management Equipment'
      }
    }
  };
}

// All Services Schema
export function getAllServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: haulerSizes.map((hauler, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: hauler.name,
        description: hauler.description,
        offers: {
          '@type': 'Offer',
          price: hauler.price,
          priceCurrency: 'USD'
        }
      }
    }))
  };
}

// Location-specific Schema
export function getLocationSchema(location) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${siteConfig.name} - ${location.name}`,
    description: `Professional hauler rental services in ${location.name}, ${location.state}. Same-day delivery, competitive pricing, and eco-friendly waste management.`,
    url: `${siteConfig.url}/locations/${location.slug}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '$495-$695',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: location.state,
      addressCountry: 'US'
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
      '@id': `https://www.wikidata.org/wiki/${location.wikidataId || 'Q60'}`
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hauler Rental Services',
      itemListElement: haulerSizes.map(hauler => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: hauler.name,
          description: hauler.description
        },
        price: hauler.price,
        priceCurrency: 'USD'
      }))
    }
  };
}

// Breadcrumb Schema
export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`
    }))
  };
}

// FAQ Schema
export function getFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// Review Schema
export function getReviewSchema(reviews) {
  return reviews.map(review => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: '5',
      worstRating: '1'
    },
    reviewBody: review.text,
    datePublished: review.date,
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: siteConfig.name
    }
  }));
}

// Website Schema
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}
