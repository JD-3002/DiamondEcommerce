import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Solitaire Diamond Ring',
    price: 3250,
    originalPrice: 3850,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'rings',
    description: 'A timeless classic featuring a brilliant round diamond set in a traditional four-prong setting. This elegant solitaire ring showcases the diamond\'s natural beauty with maximum light reflection and exceptional fire.',
    specifications: {
      carats: '1.0 ct',
      cut: 'Round Brilliant',
      color: 'G',
      clarity: 'VS1',
      certification: 'GIA Certified'
    },
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Vintage Art Deco Halo Ring',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'rings',
    description: 'Inspired by 1920s Art Deco designs, this stunning halo ring features a center diamond surrounded by micropavé diamonds that enhance brilliance and create the illusion of a larger center stone.',
    specifications: {
      carats: '0.80 ct center + 0.30 ct halo',
      cut: 'Round Brilliant',
      color: 'F',
      clarity: 'VVS2',
      certification: 'GIA Certified'
    },
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Princess Cut Engagement Ring',
    price: 3450,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'rings',
    description: 'A striking princess cut diamond ring that combines modern sophistication with classic elegance. The square shape maximizes brilliance and offers exceptional fire and scintillation.',
    specifications: {
      carats: '1.15 ct',
      cut: 'Princess',
      color: 'F',
      clarity: 'VS2',
      certification: 'GIA Certified'
    },
    inStock: true,
    featured: false
  },
  {
    id: '4',
    name: 'Diamond Tennis Necklace',
    price: 5200,
    originalPrice: 5800,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'necklaces',
    description: 'A stunning tennis necklace featuring 40 perfectly matched round diamonds set in a continuous line. This versatile piece adds sophistication to any outfit, day or night.',
    specifications: {
      carats: '5.5 ct total',
      cut: 'Round Brilliant',
      color: 'F-G',
      clarity: 'VS1-VS2',
      certification: 'Each stone GIA graded'
    },
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Rose Gold Diamond Heart Pendant',
    price: 2850,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'necklaces',
    description: 'A romantic 18K rose gold pendant featuring a delicate heart outlined with brilliant-cut diamonds. Perfect for expressing love and celebrating special moments.',
    specifications: {
      carats: '0.75 ct',
      cut: 'Round Brilliant',
      color: 'G',
      clarity: 'VS2',
      certification: 'IGI Certified'
    },
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'Modern Geometric Diamond Pendant',
    price: 3650,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'necklaces',
    description: 'A contemporary diamond pendant featuring a unique geometric design that combines modern aesthetics with timeless elegance. Perfect for everyday luxury.',
    specifications: {
      carats: '1.25 ct',
      cut: 'Round Brilliant',
      color: 'E',
      clarity: 'VVS1',
      certification: 'GIA Certified'
    },
    inStock: true,
    featured: false
  },
  {
    id: '7',
    name: 'Diamond Stud Earrings',
    price: 2200,
    originalPrice: 2650,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'earrings',
    description: 'Classic diamond stud earrings featuring perfectly matched round diamonds in secure four-prong settings. These timeless earrings are perfect for everyday wear or special occasions.',
    specifications: {
      carats: '1.2 ct total (0.6 ct each)',
      cut: 'Round Brilliant',
      color: 'G',
      clarity: 'SI1',
      certification: 'GIA Certified'
    },
    inStock: true,
    featured: true
  },
  {
    id: '8',
    name: 'Diamond Hoop Earrings',
    price: 2750,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'earrings',
    description: 'Elegant diamond hoop earrings featuring diamonds set halfway around each hoop. These versatile earrings add glamour to both casual and formal occasions.',
    specifications: {
      carats: '1.8 ct total',
      cut: 'Round Brilliant',
      color: 'H',
      clarity: 'SI1-SI2',
      certification: 'Certified diamonds'
    },
    inStock: true,
    featured: false
  },
  {
    id: '9',
    name: 'Chandelier Diamond Earrings',
    price: 4800,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'earrings',
    description: 'Stunning chandelier earrings featuring cascading diamonds in a tiered design. These statement pieces create beautiful movement and sparkle with every turn.',
    specifications: {
      carats: '3.2 ct total',
      cut: 'Mixed cuts',
      color: 'F-G',
      clarity: 'VS1-VS2',
      certification: 'GIA Certified'
    },
    inStock: true,
    featured: false
  },
  {
    id: '10',
    name: 'Contemporary Diamond Bracelet',
    price: 3850,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'bracelets',
    description: 'A contemporary diamond bracelet featuring an innovative link design that perfectly balances modern aesthetics with timeless elegance. Comfortable for all-day wear.',
    specifications: {
      carats: '2.8 ct total',
      cut: 'Round Brilliant',
      color: 'G-H',
      clarity: 'VS-SI',
      certification: 'Certified diamonds'
    },
    inStock: true,
    featured: false
  },
  {
    id: '11',
    name: 'Classic Tennis Diamond Bracelet',
    price: 5500,
    originalPrice: 6200,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'bracelets',
    description: 'A classic tennis bracelet featuring a continuous line of 45 perfectly matched diamonds. The ultimate symbol of luxury and sophistication with secure clasp closure.',
    specifications: {
      carats: '4.5 ct total',
      cut: 'Round Brilliant',
      color: 'F-G',
      clarity: 'VS1-VS2',
      certification: 'Each stone certified'
    },
    inStock: true,
    featured: true
  },
  {
    id: '12',
    name: 'Vintage Milgrain Diamond Bracelet',
    price: 3200,
    originalPrice: 3750,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'bracelets',
    description: 'A vintage-inspired diamond bracelet featuring intricate milgrain detailing and old-world charm. Perfect for those who appreciate classic elegance and craftsmanship.',
    specifications: {
      carats: '2.1 ct total',
      cut: 'Old European',
      color: 'H-I',
      clarity: 'SI1-SI2',
      certification: 'Vintage certified'
    },
    inStock: true,
    featured: false
  },
  {
    id: '13',
    name: 'Lab-Grown Diamond Solitaire Ring',
    price: 1850,
    originalPrice: 2400,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'rings',
    description: 'A beautiful lab-grown diamond solitaire ring offering exceptional value without compromising on quality. Environmentally sustainable and identical to natural diamonds.',
    specifications: {
      carats: '1.0 ct',
      cut: 'Round Brilliant',
      color: 'F',
      clarity: 'VVS1',
      certification: 'IGI Certified Lab-Grown'
    },
    inStock: true,
    featured: true
  },
  {
    id: '14',
    name: 'Emerald Cut Diamond Ring',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'rings',
    description: 'An elegant emerald cut diamond ring featuring step-cut faceting that creates a hall-of-mirrors effect. This sophisticated cut emphasizes clarity and creates a vintage appeal.',
    specifications: {
      carats: '1.5 ct',
      cut: 'Emerald',
      color: 'E',
      clarity: 'VVS2',
      certification: 'GIA Certified'
    },
    inStock: true,
    featured: false
  },
  {
    id: '15',
    name: 'Diamond Infinity Pendant',
    price: 1950,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'necklaces',
    description: 'A symbolic infinity pendant adorned with brilliant diamonds, representing eternal love and endless possibilities. Perfect for gifting or personal expression.',
    specifications: {
      carats: '0.5 ct total',
      cut: 'Round Brilliant',
      color: 'G-H',
      clarity: 'VS1-VS2',
      certification: 'Certified diamonds'
    },
    inStock: true,
    featured: false
  }
];