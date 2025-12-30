// SEO Configuration for Quick Haul Haulers

export const siteConfig = {
  name: 'Quick Haul Haulers',
  description: 'America\'s #1 Hauler Rental Service - Professional waste management solutions for homes, businesses, and construction sites nationwide. Same-day delivery available.',
  url: 'https://quickhaulhaulers.com',
  phone: '(555) 123-4567',
  email: 'info@quickhaulhaulers.com',
  businessHours: 'Monday-Saturday: 7AM-6PM',
  address: {
    streetAddress: '123 Main Street',
    addressLocality: 'Your City',
    addressRegion: 'ST',
    postalCode: '12345',
    addressCountry: 'US'
  },
  social: {
    facebook: 'https://facebook.com/quickhaulhaulers',
    twitter: 'https://twitter.com/quickhaulhaulers',
    instagram: 'https://instagram.com/quickhaulhaulers'
  }
};

export const haulerSizes = [
  {
    name: '10 Yard Hauler',
    price: 495,
    description: 'Perfect for small cleanouts, minor renovations, or garage cleaning projects.',
    dimensions: '12\' L x 8\' W x 3.5\' H',
    uses: ['Small bathroom remodels', 'Garage cleanouts', 'Small landscaping projects'],
    capacity: '10 cubic yards'
  },
  {
    name: '15 Yard Hauler',
    price: 550,
    description: 'Great for medium cleanouts and moderate renovation projects.',
    dimensions: '16\' L x 8\' W x 4\' H',
    uses: ['Medium bathroom remodels', 'Basement cleanouts', 'Deck removal', 'Carpet removal'],
    capacity: '15 cubic yards'
  },
  {
    name: '20 Yard Hauler',
    price: 595,
    description: 'Ideal for medium-sized projects, home renovations, and roof replacements.',
    dimensions: '22\' L x 8\' W x 4.5\' H',
    uses: ['Kitchen remodels', 'Roof replacements', 'Deck removals', 'Flooring removal'],
    capacity: '20 cubic yards',
    popular: true
  },
  {
    name: '30 Yard Hauler',
    price: 695,
    description: 'Great for large home renovations, new construction, and commercial projects.',
    dimensions: '22\' L x 8\' W x 6\' H',
    uses: ['Home additions', 'Major renovations', 'Large demolition projects'],
    capacity: '30 cubic yards'
  }
];

export const serviceLocations = [
  { name: 'New York', state: 'NY', slug: 'new-york', population: '8.3 million' },
  { name: 'Los Angeles', state: 'CA', slug: 'los-angeles', population: '3.9 million' },
  { name: 'Chicago', state: 'IL', slug: 'chicago', population: '2.7 million' },
  { name: 'Houston', state: 'TX', slug: 'houston', population: '2.3 million' },
  { name: 'Phoenix', state: 'AZ', slug: 'phoenix', population: '1.7 million' },
  { name: 'Philadelphia', state: 'PA', slug: 'philadelphia', population: '1.6 million' },
  { name: 'San Antonio', state: 'TX', slug: 'san-antonio', population: '1.5 million' },
  { name: 'San Diego', state: 'CA', slug: 'san-diego', population: '1.4 million' },
  { name: 'Dallas', state: 'TX', slug: 'dallas', population: '1.3 million' },
  { name: 'San Jose', state: 'CA', slug: 'san-jose', population: '1.0 million' },
  { name: 'Austin', state: 'TX', slug: 'austin', population: '1.0 million' },
  { name: 'Jacksonville', state: 'FL', slug: 'jacksonville', population: '950K' }
];

// Primary Keywords for SEO
export const primaryKeywords = [
  'hauler rental',
  'dumpster rental',
  'waste management',
  'roll-off haulers',
  'construction dumpsters',
  'residential haulers',
  'commercial waste removal',
  'debris removal service'
];

// SEO metadata for each page
export const pageSEO = {
  home: {
    title: 'Hauler Rental Services [2025] | Quick Haul Haulers - Same-Day Delivery',
    description: 'Need a hauler rental? ✓ Same-day delivery ✓ $495-$695 ✓ Licensed & insured. Serving 12 major US cities. Get your free quote in 60 seconds. Call (555) 123-4567!',
    keywords: 'hauler rental, dumpster rental, waste management, roll-off dumpsters, construction debris removal, residential dumpster rental, same day dumpster delivery',
    ogImage: '/images/og-home.jpg'
  },
  services: {
    title: 'Hauler Sizes & Pricing [2025] | 10-30 Yard Rentals from $495',
    description: 'Compare hauler sizes: 10yd ($495), 15yd ($550), 20yd ($595), 30yd ($695). ✓ All sizes in stock ✓ Same-day delivery ✓ No hidden fees. Order now: (555) 123-4567',
    keywords: 'hauler sizes, dumpster pricing, 10 yard dumpster, 20 yard dumpster, 30 yard dumpster, dumpster rental cost, roll-off dumpster sizes',
    ogImage: '/images/og-services.jpg'
  },
  about: {
    title: 'About Quick Haul Haulers | 15+ Years of Expert Waste Management',
    description: 'Family-owned hauler rental company serving America since 2010. ✓ 50K+ satisfied customers ✓ Eco-friendly disposal ✓ 80% recycling rate. Learn our story.',
    keywords: 'about quick haul, waste management company, dumpster rental service, professional waste removal, eco-friendly waste disposal',
    ogImage: '/images/og-about.jpg'
  },
  contact: {
    title: 'Get Free Quote [60 Seconds] | Quick Haul Haulers Contact',
    description: 'Get your free hauler rental quote instantly! ✓ No credit card required ✓ Same-day response ✓ 24/7 customer support. Call (555) 123-4567 or fill out our form.',
    keywords: 'hauler rental quote, dumpster rental contact, free waste removal quote, request dumpster, hauler delivery',
    ogImage: '/images/og-contact.jpg'
  },
  locations: {
    title: 'Service Locations | Hauler Rentals in 12 Major US Cities',
    description: 'Quick Haul Haulers serves NYC, LA, Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, San Jose, Austin & Jacksonville. Find your city.',
    keywords: 'hauler rental locations, dumpster rental near me, waste management services, local dumpster rental, service areas',
    ogImage: '/images/og-locations.jpg'
  }
};
