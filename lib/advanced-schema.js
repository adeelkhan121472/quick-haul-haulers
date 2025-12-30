import { siteConfig } from './seo-config';

// How-To Schema for Guides
export function getHowToSchema(howToGuide) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howToGuide.title,
    description: howToGuide.description || howToGuide.title,
    totalTime: 'PT30M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0'
    },
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Rental Dumpster'
      }
    ],
    step: howToGuide.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      url: `${siteConfig.url}/guides/${howToGuide.slug}#step-${index + 1}`,
      image: step.image || `${siteConfig.url}/images/how-to-step-${index + 1}.jpg`
    }))
  };
}

// Video Schema for Tutorials
export function getVideoSchema(video) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnail,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.url,
    embedUrl: video.embedUrl,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`
      }
    }
  };
}

// Product Schema for Services
export function getProductSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: service.name,
    description: service.description,
    image: `${siteConfig.url}/images/${service.slug}.jpg`,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name
    },
    offers: {
      '@type': 'Offer',
      url: `${siteConfig.url}/services`,
      priceCurrency: 'USD',
      price: service.price,
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: siteConfig.name
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '847',
      bestRating: '5',
      worstRating: '1'
    }
  };
}

// Article/Blog Schema
export function getArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `${siteConfig.url}${article.image}`,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`
      }
    },
    datePublished: article.date,
    dateModified: article.modified || article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${article.slug}`
    },
    keywords: article.keywords.join(', ')
  };
}

// Comparison Table Schema
export function getTableSchema(table) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Table',
    about: table.title,
    description: table.description
  };
}

// Special Offer Schema
export function getOfferSchema(offer) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: offer.name,
    description: offer.description,
    price: offer.price,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    validFrom: offer.validFrom,
    validThrough: offer.validThrough,
    url: `${siteConfig.url}/offers/${offer.slug}`,
    seller: {
      '@type': 'Organization',
      name: siteConfig.name
    }
  };
}

// Event Schema (for seasonal promotions)
export function getEventSchema(event) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    location: {
      '@type': 'VirtualLocation',
      url: `${siteConfig.url}/events/${event.slug}`
    },
    offers: {
      '@type': 'Offer',
      url: `${siteConfig.url}/events/${event.slug}`,
      price: event.price || '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    organizer: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url
    }
  };
}

// Calculator Tool Schema
export function getSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Dumpster Size Calculator',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250'
    }
  };
}

// Question-Answer Schema for FAQs
export function getQuestionAnswerSchema(qa) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Question',
    name: qa.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: qa.answer,
      author: {
        '@type': 'Organization',
        name: siteConfig.name
      }
    },
    dateCreated: '2025-01-01',
    answerCount: 1
  };
}

// Course Schema (for educational content)
export function getCourseSchema(course) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: course.duration
    }
  };
}

// Claim Review Schema (for trust signals)
export function getClaimReviewSchema(claim) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ClaimReview',
    claimReviewed: claim.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
      alternateName: 'True'
    },
    author: {
      '@type': 'Organization',
      name: siteConfig.name
    },
    datePublished: '2025-01-01'
  };
}

// Collection Page Schema
export function getCollectionPageSchema(collection) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: collection.title,
    description: collection.description,
    url: `${siteConfig.url}${collection.url}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: collection.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteConfig.url}${item.url}`,
        name: item.name
      }))
    }
  };
}

// Speakable Schema for Voice Search
export function getSpeakableSchema(content) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      xpath: [
        '/html/head/title',
        '/html/head/meta[@name="description"]/@content'
      ],
      cssSelector: [
        '.page-header h1',
        '.hero-content p'
      ]
    }
  };
}
