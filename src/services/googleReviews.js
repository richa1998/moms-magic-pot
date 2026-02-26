const FALLBACK_REVIEWS = [
  {
    name: 'Parita Dabhi',
    text: 'Awesome food. Very tasty. They maintain hygiene too. Love it.',
    tag: 'Google Local Guide',
    rating: 5,
  },
  {
    name: 'nit`s ameta',
    text: 'Great food, great service, great vibes. Everything tasted amazing and came fresh and hot. Highly recommend.',
    tag: 'Google Review',
    rating: 5,
  },
  {
    name: 'Mukesh Kushwah',
    text: 'The sandwich was fresh and flavorful, and the French fries were crispy and perfectly cooked. Looking forward to ordering again.',
    tag: 'Google Review',
    rating: 5,
  },
  {
    name: 'Hiren Prajapati',
    text: 'Best place for snacks and fast food. The quality is consistent and highly recommended for families.',
    tag: 'Google Review',
    rating: 5,
  },
  {
    name: 'Rohan Shah',
    text: 'Amazing flavors, especially the Frankies! A must visit in Ahmedabad.',
    tag: 'Local Guide',
    rating: 5,
  },
]

const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID || ''
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''

export const fetchGoogleReviews = async () => {
  if (!PLACE_ID || !API_KEY) {
    console.warn('Google Maps Place ID or API Key missing. Using fallback reviews.')
    return FALLBACK_REVIEWS
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`
    )
    const data = await response.json()

    if (data.result && data.result.reviews) {
      return data.result.reviews.map((r) => ({
        name: r.author_name,
        text: r.text,
        tag: r.relative_time_description || 'Google Review',
        rating: r.rating,
        profilePhoto: r.profile_photo_url,
      }))
    }

    return FALLBACK_REVIEWS
  } catch (error) {
    console.error('Error fetching Google Reviews:', error)
    return FALLBACK_REVIEWS
  }
}
