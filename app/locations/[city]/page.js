import Link from 'next/link';

// City data
const cityData = {
  'new-york': {
    city: 'New York',
    state: 'NY',
    stateCode: 'NY',
    icon: '🗽',
    coverage: 'All 5 Boroughs',
    phone: '(555) 101-2000',
    email: 'newyork@quickhaulhaulers.com',
    heroImage: 'linear-gradient(135deg, #1a73e8 0%, #004c99 100%)',
    neighborhoods: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island', 'Long Island City', 'Williamsburg', 'Harlem'],
    description: 'Quick Haul Haulers is your premier hauler rental service throughout New York City. We serve all five boroughs with same-day delivery and pickup options for residential and commercial projects.',
    longDescription: 'As New York City\'s most trusted hauler rental company, we understand the unique challenges of waste management in the nation\'s largest city. From tight parking situations in Manhattan to large-scale construction projects in Brooklyn, our experienced team knows how to navigate NYC\'s complex logistics. We work closely with the Department of Sanitation to ensure all permits are in order and your project stays on schedule.',
    features: [
      { icon: '⚡', title: 'Same-Day Delivery', description: 'Get your hauler delivered within hours in most areas' },
      { icon: '🅿️', title: 'Parking Permit Assistance', description: 'We help navigate NYC parking permit requirements' },
      { icon: '🏙️', title: 'All Boroughs Covered', description: 'Manhattan to Staten Island, we serve everywhere' },
      { icon: '📱', title: '24/7 Availability', description: 'Round-the-clock service for city that never sleeps' }
    ],
    services: [
      { name: '10 Yard Hauler', price: '$545', ideal: 'Small apartments, bathroom renovations' },
      { name: '15 Yard Hauler', price: '$595', ideal: 'Kitchen remodels, medium cleanouts' },
      { name: '20 Yard Hauler', price: '$645', ideal: 'Full apartment cleanouts, roofing projects' },
      { name: '30 Yard Hauler', price: '$745', ideal: 'Commercial construction, large demolitions' }
    ],
    testimonials: [
      { name: 'Michael Chen', location: 'Manhattan', text: 'Incredible service! They navigated the tight streets of Manhattan perfectly and had our hauler placed exactly where we needed it.' },
      { name: 'Sarah Rodriguez', location: 'Brooklyn', text: 'Used them for our brownstone renovation. Professional, punctual, and priced fairly. Highly recommend!' }
    ]
  },
  'los-angeles': {
    city: 'Los Angeles',
    state: 'California',
    stateCode: 'CA',
    icon: '🌴',
    coverage: 'Greater LA Area',
    phone: '(555) 102-2000',
    email: 'losangeles@quickhaulhaulers.com',
    heroImage: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    neighborhoods: ['Hollywood', 'Santa Monica', 'Pasadena', 'Long Beach', 'Beverly Hills', 'Downtown LA', 'Venice', 'Culver City'],
    description: 'Serving Greater Los Angeles with premium hauler rental services for residential, commercial, and entertainment industry projects across LA County.',
    longDescription: 'From the beaches of Santa Monica to the hills of Hollywood, Quick Haul Haulers provides comprehensive waste management solutions throughout Los Angeles County. We\'ve worked on everything from major film productions to celebrity home renovations, always maintaining the highest standards of professionalism and discretion. Our fleet is perfectly suited for LA\'s diverse needs, from small residential cleanouts to massive commercial construction projects.',
    features: [
      { icon: '🎬', title: 'Film Industry Friendly', description: 'Experience with movie sets and production waste' },
      { icon: '🏖️', title: 'Beach to Hills', description: 'Service from Malibu to Downtown and everywhere between' },
      { icon: '♻️', title: 'Eco-Conscious', description: 'Up to 85% recycling rate on all materials' },
      { icon: '🚚', title: 'Fast Delivery', description: 'Same-day or next-day delivery available' }
    ],
    services: [
      { name: '10 Yard Hauler', price: '$525', ideal: 'Small home projects, garage cleanouts' },
      { name: '15 Yard Hauler', price: '$575', ideal: 'Kitchen and bathroom remodels' },
      { name: '20 Yard Hauler', price: '$625', ideal: 'Whole home renovations, landscaping' },
      { name: '30 Yard Hauler', price: '$725', ideal: 'Commercial projects, major construction' }
    ],
    testimonials: [
      { name: 'David Martinez', location: 'Santa Monica', text: 'We\'ve used them on three different properties. Always reliable, always professional. Best hauler service in LA!' },
      { name: 'Jennifer Lee', location: 'Hollywood', text: 'Perfect for our production cleanup. They understood our tight schedule and delivered flawlessly.' }
    ]
  },
  'chicago': {
    city: 'Chicago',
    state: 'Illinois',
    stateCode: 'IL',
    icon: '🌆',
    coverage: 'Metro Chicago & Cook County',
    phone: '(555) 103-2000',
    email: 'chicago@quickhaulhaulers.com',
    heroImage: 'linear-gradient(135deg, #0066cc 0%, #003d7a 100%)',
    neighborhoods: ['Downtown', 'North Side', 'South Side', 'West Side', 'Lincoln Park', 'Wicker Park', 'Hyde Park', 'Evanston'],
    description: 'Chicago\'s trusted hauler rental service providing year-round waste management solutions for the Windy City and surrounding Cook County areas.',
    longDescription: 'Quick Haul Haulers understands the unique needs of Chicago construction and renovation projects. From historic building renovations in Lincoln Park to new construction in the Loop, we provide reliable hauler rental services throughout all seasons. Our equipment is maintained to handle Chicago\'s harsh winters, and our team is experienced in working within the city\'s strict regulations and permit requirements.',
    features: [
      { icon: '❄️', title: 'Winter Service', description: 'Year-round reliability even in harsh weather' },
      { icon: '🏛️', title: 'Historic Districts', description: 'Experience with Chicago\'s historic buildings' },
      { icon: '📋', title: 'Permit Experts', description: 'We handle all city permit requirements' },
      { icon: '🏗️', title: 'Commercial Ready', description: 'Large fleet for major commercial projects' }
    ],
    services: [
      { name: '10 Yard Hauler', price: '$515', ideal: 'Condo renovations, small cleanouts' },
      { name: '15 Yard Hauler', price: '$565', ideal: 'Home remodels, deck removal' },
      { name: '20 Yard Hauler', price: '$615', ideal: 'Large home projects, roofing' },
      { name: '30 Yard Hauler', price: '$715', ideal: 'Commercial construction, demolitions' }
    ],
    testimonials: [
      { name: 'Robert Johnson', location: 'Lincoln Park', text: 'Excellent service during our brownstone renovation. They worked around our narrow street perfectly.' },
      { name: 'Maria Garcia', location: 'Wicker Park', text: 'Professional and reliable. They even delivered during a snowstorm when we needed it most!' }
    ]
  },
  'houston': {
    city: 'Houston',
    state: 'Texas',
    stateCode: 'TX',
    icon: '🤠',
    coverage: 'Harris County',
    phone: '(555) 104-2000',
    email: 'houston@quickhaulhaulers.com',
    heroImage: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
    neighborhoods: ['Downtown', 'Energy Corridor', 'The Heights', 'Montrose', 'Memorial', 'Clear Lake', 'Katy', 'Sugar Land'],
    description: 'Houston\'s premier hauler rental service for oil & gas, commercial, and residential projects throughout Harris County and surrounding areas.',
    longDescription: 'As Houston\'s leading waste management partner, Quick Haul Haulers serves the nation\'s energy capital with industrial-strength solutions. We understand the unique needs of oil and gas facilities, chemical plants, and the booming residential development across the greater Houston area. Our large fleet can handle everything from small home renovations in The Heights to massive industrial cleanups in the Energy Corridor.',
    features: [
      { icon: '⚡', title: 'Oil & Gas Ready', description: 'Experience with energy sector projects' },
      { icon: '🏭', title: 'Industrial Scale', description: 'Large capacity for major projects' },
      { icon: '🌡️', title: 'Heat Resistant', description: 'Equipment designed for Houston summers' },
      { icon: '🚀', title: 'Fast Response', description: 'Quick delivery across all of Harris County' }
    ],
    services: [
      { name: '10 Yard Hauler', price: '$495', ideal: 'Home cleanouts, small renovations' },
      { name: '15 Yard Hauler', price: '$545', ideal: 'Medium residential projects' },
      { name: '20 Yard Hauler', price: '$595', ideal: 'Large home projects, commercial' },
      { name: '30 Yard Hauler', price: '$695', ideal: 'Industrial, major construction' }
    ],
    testimonials: [
      { name: 'James Wilson', location: 'Energy Corridor', text: 'Perfect for our facility cleanup. Professional team that understands industrial requirements.' },
      { name: 'Lisa Thompson', location: 'The Heights', text: 'Great service for our home renovation. Friendly, punctual, and reasonably priced!' }
    ]
  },
  'phoenix': {
    city: 'Phoenix',
    state: 'Arizona',
    stateCode: 'AZ',
    icon: '🌵',
    coverage: 'Valley Area',
    phone: '(555) 105-2000',
    email: 'phoenix@quickhaulhaulers.com',
    heroImage: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
    neighborhoods: ['Downtown Phoenix', 'Scottsdale', 'Tempe', 'Mesa', 'Glendale', 'Chandler', 'Gilbert', 'Peoria'],
    description: 'Serving the entire Phoenix Valley with reliable hauler rental services for desert landscaping, construction, and residential projects.',
    longDescription: 'Quick Haul Haulers knows the Phoenix Valley inside and out. From desert landscaping projects in Scottsdale to major construction in downtown Phoenix, we provide hauler rental services tailored to Arizona\'s unique environment. Our equipment is specially maintained to handle extreme heat, and we understand the specific disposal requirements for desert landscaping materials, pool demolitions, and the Valley\'s booming construction industry.',
    features: [
      { icon: '🌵', title: 'Desert Landscaping', description: 'Specialized disposal for cacti and desert plants' },
      { icon: '🌡️', title: 'Heat Ready', description: 'Equipment rated for 120°F+ temperatures' },
      { icon: '🏜️', title: 'Valley-Wide', description: 'Coverage from Scottsdale to Glendale' },
      { icon: '💧', title: 'Pool Demolition', description: 'Experience with pool removal projects' }
    ],
    services: [
      { name: '10 Yard Hauler', price: '$485', ideal: 'Landscaping, small home projects' },
      { name: '15 Yard Hauler', price: '$535', ideal: 'Home renovations, yard cleanup' },
      { name: '20 Yard Hauler', price: '$585', ideal: 'Large projects, pool demolition' },
      { name: '30 Yard Hauler', price: '$685', ideal: 'Major construction, commercial' }
    ],
    testimonials: [
      { name: 'Mark Anderson', location: 'Scottsdale', text: 'Fantastic service for our backyard renovation. They handled our cactus removal with care.' },
      { name: 'Patricia Davis', location: 'Tempe', text: 'Quick delivery, fair pricing, and great customer service. Will definitely use again!' }
    ]
  },
  'philadelphia': {
    city: 'Philadelphia',
    state: 'Pennsylvania',
    stateCode: 'PA',
    icon: '🔔',
    coverage: 'Philadelphia Metro',
    phone: '(555) 106-2000',
    email: 'philadelphia@quickhaulhaulers.com',
    heroImage: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
    neighborhoods: ['Center City', 'Old City', 'South Philly', 'University City', 'Fishtown', 'Manayunk', 'Chestnut Hill', 'Northern Liberties'],
    description: 'Philadelphia\'s trusted hauler rental service with expertise in historic district renovations and modern construction projects.',
    longDescription: 'Serving the City of Brotherly Love and surrounding counties, Quick Haul Haulers brings decades of experience to Philadelphia\'s diverse construction landscape. We specialize in historic building renovations, understanding the care required when working in Old City and other protected districts. Our team is well-versed in Philadelphia\'s permit requirements and works closely with city officials to ensure your project runs smoothly.',
    features: [
      { icon: '🏛️', title: 'Historic Expertise', description: 'Careful handling of historic district projects' },
      { icon: '📜', title: 'Permit Assistance', description: 'Help with city permits and regulations' },
      { icon: '🏘️', title: 'City & Suburbs', description: 'Coverage throughout metro Philadelphia' },
      { icon: '🎯', title: 'Narrow Streets', description: 'Experience with tight Philadelphia streets' }
    ],
    services: [
      { name: '10 Yard Hauler', price: '$505', ideal: 'Rowhome renovations, small projects' },
      { name: '15 Yard Hauler', price: '$555', ideal: 'Home remodels, basement cleanouts' },
      { name: '20 Yard Hauler', price: '$605', ideal: 'Full home renovations, construction' },
      { name: '30 Yard Hauler', price: '$705', ideal: 'Commercial projects, large demolitions' }
    ],
    testimonials: [
      { name: 'William Brown', location: 'Old City', text: 'Perfect for our historic home renovation. They understood the importance of careful work in our neighborhood.' },
      { name: 'Elizabeth Miller', location: 'Fishtown', text: 'Excellent service! Navigated our narrow street perfectly and were very professional.' }
    ]
  },
  'san-antonio': {
    city: 'San Antonio',
    state: 'Texas',
    stateCode: 'TX',
    icon: '⭐',
    coverage: 'Bexar County',
    phone: '(555) 107-2000',
    email: 'sanantonio@quickhaulhaulers.com',
    heroImage: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
    neighborhoods: ['Downtown', 'Alamo Heights', 'Stone Oak', 'Medical Center', 'Southtown', 'Leon Valley', 'Universal City', 'Schertz'],
    description: 'San Antonio\'s premier hauler rental service with bilingual support and military-friendly pricing for Bexar County residents.',
    longDescription: 'Quick Haul Haulers is proud to serve San Antonio, one of America\'s fastest-growing cities. We understand the unique character of San Antonio, from historic missions to modern developments. Our bilingual team ensures clear communication, and we offer special rates for military families near Fort Sam Houston, Lackland AFB, and Randolph AFB. Whether you\'re renovating a historic home near the Alamo or building new in Stone Oak, we\'re here to help.',
    features: [
      { icon: '🇺🇸', title: 'Military Discounts', description: '10% off for active duty and veterans' },
      { icon: '🗣️', title: 'Bilingual Service', description: 'English and Spanish speaking staff' },
      { icon: '🏰', title: 'Historic Projects', description: 'Experience with mission-area renovations' },
      { icon: '⚡', title: 'Fast Service', description: 'Quick response throughout Bexar County' }
    ],
    services: [
      { name: '10 Yard Hauler', price: '$475', ideal: 'Home cleanouts, small renovations' },
      { name: '15 Yard Hauler', price: '$525', ideal: 'Medium home projects' },
      { name: '20 Yard Hauler', price: '$575', ideal: 'Large renovations, construction' },
      { name: '30 Yard Hauler', price: '$675', ideal: 'Commercial, major projects' }
    ],
    testimonials: [
      { name: 'Carlos Hernandez', location: 'Southtown', text: 'Excelente servicio! Very professional and accommodating. Great prices too!' },
      { name: 'Amanda Wright', location: 'Stone Oak', text: 'Military discount was much appreciated. Excellent service from start to finish!' }
    ]
  },
  'san-diego': {
    city: 'San Diego',
    state: 'California',
    stateCode: 'CA',
    icon: '🏖️',
    coverage: 'San Diego County',
    phone: '(555) 108-2000',
    email: 'sandiego@quickhaulhaulers.com',
    heroImage: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    neighborhoods: ['Downtown', 'La Jolla', 'Pacific Beach', 'North Park', 'Coronado', 'Carlsbad', 'Encinitas', 'Chula Vista'],
    description: 'San Diego County\'s eco-friendly hauler rental service from the beaches to East County with superior customer service.',
    longDescription: 'America\'s Finest City deserves the finest hauler rental service. Quick Haul Haulers serves all of San Diego County with environmentally conscious waste management solutions. From beachfront properties in La Jolla to inland communities in East County, we provide reliable service with a focus on sustainability. Our team understands coastal construction requirements and works to preserve San Diego\'s natural beauty through responsible recycling and disposal practices.',
    features: [
      { icon: '🌊', title: 'Coastal Access', description: 'Beach community delivery specialists' },
      { icon: '♻️', title: 'Eco-Friendly', description: 'Industry-leading 90% recycling rate' },
      { icon: '🏄', title: 'County-Wide', description: 'From beaches to mountains, we serve all' },
      { icon: '☀️', title: 'Year-Round Service', description: 'Perfect weather means reliable service' }
    ],
    services: [
      { name: '10 Yard Hauler', price: '$535', ideal: 'Beach house renovations, small projects' },
      { name: '15 Yard Hauler', price: '$585', ideal: 'Home remodels, deck removal' },
      { name: '20 Yard Hauler', price: '$635', ideal: 'Large home projects, landscaping' },
      { name: '30 Yard Hauler', price: '$735', ideal: 'Commercial construction, major work' }
    ],
    testimonials: [
      { name: 'Brian Murphy', location: 'La Jolla', text: 'Outstanding service! They were careful with our coastal property and recycled everything possible.' },
      { name: 'Michelle Torres', location: 'North Park', text: 'Friendly, professional, and eco-conscious. Exactly what San Diego needs!' }
    ]
  },
  'dallas': {
    city: 'Dallas',
    state: 'Texas',
    stateCode: 'TX',
    icon: '🏙️',
    coverage: 'DFW Metroplex',
    phone: '(555) 109-2000',
    email: 'dallas@quickhaulhaulers.com',
    heroImage: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
    neighborhoods: ['Downtown Dallas', 'Uptown', 'Fort Worth', 'Plano', 'Irving', 'Arlington', 'Frisco', 'McKinney'],
    description: 'DFW Metroplex\'s premier hauler rental service with corporate accounts and next-day delivery across the entire metro area.',
    longDescription: 'Quick Haul Haulers serves the entire Dallas-Fort Worth Metroplex, one of the fastest-growing metro areas in America. From corporate headquarters in downtown Dallas to residential developments in Frisco and Plano, we provide scalable waste management solutions. Our corporate account program serves major businesses throughout DFW, while our residential services help families with everything from small cleanouts to major renovations.',
    features: [
      { icon: '🏢', title: 'Corporate Accounts', description: 'Dedicated service for businesses' },
      { icon: '🚀', title: 'Next-Day Delivery', description: 'Fast turnaround across entire Metroplex' },
      { icon: '🌆', title: 'Full DFW Coverage', description: 'Dallas, Fort Worth, and all suburbs' },
      { icon: '📊', title: 'Growth Ready', description: 'Scalable for expanding businesses' }
    ],
    services: [
      { name: '10 Yard Hauler', price: '$485', ideal: 'Home projects, office cleanouts' },
      { name: '15 Yard Hauler', price: '$535', ideal: 'Residential renovations' },
      { name: '20 Yard Hauler', price: '$585', ideal: 'Large home or commercial projects' },
      { name: '30 Yard Hauler', price: '$685', ideal: 'Major construction, corporate projects' }
    ],
    testimonials: [
      { name: 'Thomas Baker', location: 'Plano', text: 'We use them for all our corporate locations. Reliable, professional, and great pricing!' },
      { name: 'Rachel Green', location: 'Fort Worth', text: 'Fantastic service for our home addition. They made the whole process easy!' }
    ]
  },
  'san-jose': {
    city: 'San Jose',
    state: 'California',
    stateCode: 'CA',
    icon: '💻',
    coverage: 'Silicon Valley',
    phone: '(555) 110-2000',
    email: 'sanjose@quickhaulhaulers.com',
    heroImage: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
    neighborhoods: ['Downtown San Jose', 'Palo Alto', 'Mountain View', 'Sunnyvale', 'Cupertino', 'Santa Clara', 'Milpitas', 'Los Gatos'],
    description: 'Silicon Valley\'s tech-friendly hauler rental service with e-waste handling and startup discounts throughout the South Bay.',
    longDescription: 'Quick Haul Haulers understands Silicon Valley\'s unique needs. From tech campus renovations to residential projects in some of America\'s most valuable real estate, we provide premium waste management services. We specialize in e-waste disposal, understanding the tech industry\'s specific requirements for secure data destruction and electronic recycling. Our startup discount program supports the entrepreneurial spirit of the Valley.',
    features: [
      { icon: '🖥️', title: 'E-Waste Certified', description: 'Proper handling of electronics and tech waste' },
      { icon: '🚀', title: 'Startup Discounts', description: '15% off for early-stage companies' },
      { icon: '🏢', title: 'Campus Ready', description: 'Experience with major tech campuses' },
      { icon: '🔒', title: 'Data Security', description: 'Secure disposal of sensitive materials' }
    ],
    services: [
      { name: '10 Yard Hauler', price: '$555', ideal: 'Office renovations, small projects' },
      { name: '15 Yard Hauler', price: '$605', ideal: 'Home remodels, tech cleanouts' },
      { name: '20 Yard Hauler', price: '$655', ideal: 'Large residential or office projects' },
      { name: '30 Yard Hauler', price: '$755', ideal: 'Campus renovations, major construction' }
    ],
    testimonials: [
      { name: 'Kevin Patel', location: 'Palo Alto', text: 'Perfect for our office renovation. They handled our old server equipment professionally.' },
      { name: 'Nicole Kim', location: 'Mountain View', text: 'Great startup discount! Professional service and eco-friendly practices.' }
    ]
  },
  'austin': {
    city: 'Austin',
    state: 'Texas',
    stateCode: 'TX',
    icon: '🎸',
    coverage: 'Travis County',
    phone: '(555) 111-2000',
    email: 'austin@quickhaulhaulers.com',
    heroImage: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    neighborhoods: ['Downtown Austin', 'South Congress', 'East Austin', 'Westlake', 'Round Rock', 'Pflugerville', 'Cedar Park', 'Lakeway'],
    description: 'Austin\'s eco-friendly hauler rental service supporting the city\'s rapid growth with sustainable waste management solutions.',
    longDescription: 'Quick Haul Haulers is keeping Austin green while supporting its explosive growth. We understand Austin\'s unique culture and environmental values, offering industry-leading recycling rates and sustainable practices. From festival cleanup to tech campus construction, from historic home renovations in Clarksville to new developments in Round Rock, we provide reliable service that reflects Austin\'s progressive values.',
    features: [
      { icon: '♻️', title: 'Keep Austin Green', description: 'Up to 90% recycling on all projects' },
      { icon: '🎵', title: 'Festival Ready', description: 'Experience with SXSW and ACL cleanup' },
      { icon: '🌳', title: 'Eco-Conscious', description: 'Sustainable practices throughout' },
      { icon: '📈', title: 'Growth Support', description: 'Serving Austin\'s booming development' }
    ],
    services: [
      { name: '10 Yard Hauler', price: '$495', ideal: 'Home projects, small renovations' },
      { name: '15 Yard Hauler', price: '$545', ideal: 'Medium residential projects' },
      { name: '20 Yard Hauler', price: '$595', ideal: 'Large home or commercial work' },
      { name: '30 Yard Hauler', price: '$695', ideal: 'Major construction, tech campuses' }
    ],
    testimonials: [
      { name: 'Tyler Scott', location: 'South Congress', text: 'Love their commitment to recycling! Great service and very Austin-friendly.' },
      { name: 'Jessica Martinez', location: 'Round Rock', text: 'Professional crew, fair prices, and they truly care about the environment!' }
    ]
  },
  'jacksonville': {
    city: 'Jacksonville',
    state: 'Florida',
    stateCode: 'FL',
    icon: '🌊',
    coverage: 'Duval County',
    phone: '(555) 112-2000',
    email: 'jacksonville@quickhaulhaulers.com',
    heroImage: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
    neighborhoods: ['Downtown', 'Jacksonville Beach', 'Riverside', 'Mandarin', 'Ponte Vedra', 'Southside', 'Northside', 'Westside'],
    description: 'Jacksonville and Duval County\'s coastal hauler rental service with hurricane cleanup experience and beach community expertise.',
    longDescription: 'Quick Haul Haulers serves America\'s largest city by area with reliable waste management solutions from the beaches to the suburbs. We understand coastal construction requirements and have extensive experience with hurricane cleanup and storm debris removal. Whether you\'re renovating a beach house in Ponte Vedra, working on a commercial project downtown, or cleaning up after a storm, our team is ready to help.',
    features: [
      { icon: '🌊', title: 'Coastal Expertise', description: 'Beach community specialists' },
      { icon: '🌀', title: 'Hurricane Ready', description: 'Storm cleanup and debris removal' },
      { icon: '🏖️', title: 'Beach to Inland', description: 'Coverage across all of Duval County' },
      { icon: '⚡', title: 'Emergency Service', description: '24/7 storm response available' }
    ],
    services: [
      { name: '10 Yard Hauler', price: '$485', ideal: 'Beach house projects, small cleanouts' },
      { name: '15 Yard Hauler', price: '$535', ideal: 'Home renovations, storm cleanup' },
      { name: '20 Yard Hauler', price: '$585', ideal: 'Large projects, hurricane debris' },
      { name: '30 Yard Hauler', price: '$685', ideal: 'Commercial, major storm cleanup' }
    ],
    testimonials: [
      { name: 'Christopher Allen', location: 'Jacksonville Beach', text: 'Saved us after the hurricane! Quick response and professional service when we needed it most.' },
      { name: 'Stephanie White', location: 'Ponte Vedra', text: 'Excellent service for our beach house renovation. They understand coastal projects!' }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const city = cityData[resolvedParams.city];

  if (!city) {
    return {
      title: 'City Not Found - Quick Haul Haulers',
    };
  }

  return {
    title: `${city.city}, ${city.stateCode} Hauler Rental - Quick Haul Haulers`,
    description: `${city.description} Call ${city.phone} for same-day hauler rental in ${city.city}.`,
    keywords: `${city.city} hauler rental, ${city.city} dumpster rental, ${city.stateCode} waste removal, ${city.city} construction debris`,
  };
}

export default async function CityPage({ params }) {
  const resolvedParams = await params;
  const city = cityData[resolvedParams.city];

  if (!city) {
    return (
      <div className="city-not-found">
        <h1>City Not Found</h1>
        <Link href="/locations">Back to Locations</Link>
      </div>
    );
  }

  return (
    <div className="city-page">
      {/* Hero Section */}
      <section className="city-hero" style={{ background: city.heroImage }}>
        <div className="container">
          <div className="city-hero-content">
            <div className="city-icon-large">{city.icon}</div>
            <h1>Hauler Rental in {city.city}, {city.stateCode}</h1>
            <p className="city-tagline">{city.coverage}</p>
            <p className="city-hero-description">{city.description}</p>
            <div className="hero-cta-buttons">
              <a href={`tel:${city.phone.replace(/[^0-9]/g, '')}`} className="hero-cta-primary">
                📞 {city.phone}
              </a>
              <Link href="/contact" className="hero-cta-secondary">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="city-about">
        <div className="container">
          <h2>About Our {city.city} Service</h2>
          <p className="city-long-description">{city.longDescription}</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="city-features">
        <div className="container">
          <h2>Why Choose Us in {city.city}</h2>
          <div className="city-features-grid">
            {city.features.map((feature, index) => (
              <div key={index} className="city-feature-card">
                <div className="city-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="city-pricing">
        <div className="container">
          <h2>Hauler Sizes & Pricing for {city.city}</h2>
          <p className="pricing-intro">
            Transparent pricing with no hidden fees. Includes delivery, pickup, and disposal.
          </p>
          <div className="pricing-grid">
            {city.services.map((service, index) => (
              <div key={index} className="pricing-card">
                <h3>{service.name}</h3>
                <div className="price">{service.price}</div>
                <p className="price-note">Starting at</p>
                <p className="ideal-for">
                  <strong>Ideal for:</strong> {service.ideal}
                </p>
                <a href={`tel:${city.phone.replace(/[^0-9]/g, '')}`} className="order-button">
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="city-neighborhoods">
        <div className="container">
          <h2>We Serve These {city.city} Areas</h2>
          <div className="neighborhoods-grid">
            {city.neighborhoods.map((neighborhood, index) => (
              <div key={index} className="neighborhood-tag">
                📍 {neighborhood}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="city-testimonials">
        <div className="container">
          <h2>What {city.city} Customers Say</h2>
          <div className="testimonials-grid">
            {city.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}, {city.stateCode}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="city-cta">
        <div className="container">
          <h2>Ready to Get Started in {city.city}?</h2>
          <p>Call us now for same-day delivery or request a free quote online.</p>
          <div className="cta-buttons">
            <a href={`tel:${city.phone.replace(/[^0-9]/g, '')}`} className="cta-button-primary">
              📞 Call {city.phone}
            </a>
            <a href={`mailto:${city.email}`} className="cta-button-secondary">
              ✉️ Email Us
            </a>
            <Link href="/contact" className="cta-button-secondary">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
