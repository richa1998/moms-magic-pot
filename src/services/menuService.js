import { menuItems } from '../data/menu'

// Example Google Sheet CSV export link
// To use: Publish your Google Sheet to web as CSV and paste the link here
const SHEET_CSV_URL = import.meta.env.VITE_MENU_SHEET_URL || ''

export const fetchDynamicMenu = async () => {
    if (!SHEET_CSV_URL) {
        console.warn('Menu Sheet URL missing. Using local menu data.')
        return menuItems
    }

    try {
        const response = await fetch(SHEET_CSV_URL)
        const csvData = await response.text()

        // Simple CSV parser (assuming: ID, Price, Discount)
        const lines = csvData.split('\n').slice(1) // Skip header
        const dynamicPrices = {}

        lines.forEach(line => {
            const [id, price, discount] = line.split(',')
            if (id) {
                dynamicPrices[id.trim()] = {
                    price: parseFloat(price),
                    discount: parseFloat(discount)
                }
            }
        })

        // Merge with static menu data
        return menuItems.map(item => {
            const dynamic = dynamicPrices[item.id]
            if (dynamic) {
                const originalPrice = dynamic.price
                const discountPercent = 50 // Enforce flat 50% off
                const finalPrice = Math.round(originalPrice * (1 - discountPercent / 100))

                return {
                    ...item,
                    originalPrice,
                    discountPercent,
                    finalPrice,
                    priceLabel: `Rs. ${finalPrice}`,
                    originalPriceLabel: `Rs. ${originalPrice}`,
                }
            }
            return item
        })
    } catch (error) {
        console.error('Error fetching dynamic menu:', error)
        return menuItems
    }
}
