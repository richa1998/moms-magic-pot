export const siteMeta = {
  siteName: "Mom's Magic Pot",
  title: "Mom's Magic Pot | Order Online in Ahmedabad on Zomato",
  description:
    "Mom's Magic Pot in Amraiwadi, Ahmedabad. Explore original menu items and order sandwiches, frankies, snacks, fries and beverages online on Zomato.",
  keywords:
    "Mom's Magic Pot, Ahmedabad, Amraiwadi, Zomato, sandwiches, frankies, fries, snacks, wraps, order online",
  author: "Mom's Magic Pot",
  url: 'https://momsmagicpot.com',
  image: 'https://momsmagicpot.com/images/restaurant-cover.jpg',
  twitterCard: 'summary_large_image',
}

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: "Mom's Magic Pot",
  image: 'https://momsmagicpot.com/images/restaurant-cover.jpg',
  url: 'https://momsmagicpot.com',
  telephone: '+91-88497-15081',
  priceRange: 'INR 150-300',
  servesCuisine: ['Fast Food', 'Rolls', 'Sandwich', 'Street Food', 'Wraps'],
  menu: 'https://www.zomato.com/ahmedabad/moms-magic-pot-amraiwadi/order',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-67, New Rita Nagar Society, Vastral Road',
    addressLocality: 'Amraiwadi, Ahmedabad',
    postalCode: '380026',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:45',
    },
  ],
}
