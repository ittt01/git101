import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    image: '🎧',
    category: 'Electronics',
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality. Perfect for music lovers and professionals who demand the best audio experience.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0 connectivity',
      'Premium comfort ear cushions',
      'Foldable design'
    ],
    reviews: [
      { id: 1, user: 'Sarah M.', rating: 5, comment: 'Amazing sound quality! The noise cancellation is incredible.', date: '2025-03-15' },
      { id: 2, user: 'John D.', rating: 4, comment: 'Great headphones, comfortable for long use. Battery lasts forever.', date: '2025-03-10' },
      { id: 3, user: 'Emily R.', rating: 5, comment: 'Best purchase this year. Highly recommended!', date: '2025-02-28' }
    ]
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: '⌚',
    category: 'Electronics',
    description: 'Advanced fitness and health tracking smartwatch with heart rate monitor, GPS, and smartphone notifications. Water-resistant design with a stunning OLED display.',
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Water-resistant (50m)',
      '7-day battery life',
      'Sleep tracking'
    ],
    reviews: [
      { id: 1, user: 'Mike T.', rating: 5, comment: 'Perfect for my workouts. The GPS accuracy is spot on.', date: '2025-03-20' },
      { id: 2, user: 'Lisa K.', rating: 4, comment: 'Love the design and features. Battery life could be better though.', date: '2025-03-05' },
      { id: 3, user: 'David W.', rating: 5, comment: 'Excellent smartwatch! Worth every penny.', date: '2025-02-15' },
      { id: 4, user: 'Anna P.', rating: 4, comment: 'Great health tracking features. Display is beautiful.', date: '2025-02-10' }
    ]
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 89.99,
    image: '👟',
    category: 'Fashion',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for comfort and performance on every run.',
    features: [
      'Responsive foam cushioning',
      'Breathable mesh upper',
      'Non-slip rubber outsole',
      'Padded collar',
      'Reflective details'
    ],
    reviews: [
      { id: 1, user: 'Tom H.', rating: 5, comment: 'Most comfortable running shoes I have ever owned!', date: '2025-03-18' },
      { id: 2, user: 'Jessica L.', rating: 5, comment: 'Perfect fit, great support. Ready for my marathon!', date: '2025-03-12' },
      { id: 3, user: 'Chris B.', rating: 4, comment: 'Good shoes for daily runs. Lightweight and breathable.', date: '2025-02-25' }
    ]
  },
  {
    id: 4,
    name: 'Backpack',
    price: 49.99,
    image: '🎒',
    category: 'Fashion',
    description: 'Durable everyday backpack with laptop compartment and multiple pockets. Water-resistant material keeps your belongings safe in any weather.',
    features: [
      '15-inch laptop compartment',
      'Water-resistant fabric',
      'Multiple organizer pockets',
      'Padded shoulder straps',
      'Quick-access front pocket'
    ],
    reviews: [
      { id: 1, user: 'Alex N.', rating: 5, comment: 'Perfect for work and travel. Very durable material.', date: '2025-03-22' },
      { id: 2, user: 'Maria G.', rating: 4, comment: 'Great organization, fits everything I need.', date: '2025-03-08' },
      { id: 3, user: 'Kevin S.', rating: 5, comment: 'Best backpack for the price. Highly recommend!', date: '2025-02-20' }
    ]
  },
  {
    id: 5,
    name: 'Coffee Mug',
    price: 14.99,
    image: '☕',
    category: 'Home',
    description: 'Ceramic coffee mug with double-wall insulation keeps drinks hot or cold for hours. Sleek minimalist design perfect for home or office.',
    features: [
      'Double-wall insulation',
      '12 oz capacity',
      'Dishwasher safe',
      'Ergonomic handle',
      'Minimalist design'
    ],
    reviews: [
      { id: 1, user: 'Rachel F.', rating: 5, comment: 'Keeps my coffee hot for hours! Love the design.', date: '2025-03-14' },
      { id: 2, user: 'Mark J.', rating: 4, comment: 'Good quality mug. Perfect size for morning coffee.', date: '2025-03-01' },
      { id: 3, user: 'Sophie W.', rating: 5, comment: 'Beautiful and functional. Bought one for everyone!', date: '2025-02-18' }
    ]
  },
  {
    id: 6,
    name: 'Desk Lamp',
    price: 34.99,
    image: '💡',
    category: 'Home',
    description: 'Modern LED desk lamp with adjustable brightness and color temperature. Eye-friendly lighting perfect for reading, studying, or working.',
    features: [
      'Adjustable brightness',
      '3 color temperatures',
      'Flexible gooseneck',
      'Touch controls',
      'USB charging port'
    ],
    reviews: [
      { id: 1, user: 'Brian C.', rating: 5, comment: 'Excellent lighting for my desk. The USB port is so convenient!', date: '2025-03-19' },
      { id: 2, user: 'Nancy O.', rating: 4, comment: 'Great lamp, adjustable and bright. Touch controls work well.', date: '2025-03-06' },
      { id: 3, user: 'Daniel E.', rating: 5, comment: 'Perfect for late night studying. Easy on the eyes.', date: '2025-02-22' },
      { id: 4, user: 'Helen M.', rating: 5, comment: 'Modern look, great functionality. Love it!', date: '2025-02-14' }
    ]
  }
];
