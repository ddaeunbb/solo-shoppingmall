const Categories = {
  total: 'total',
  smartphones: 'smartphones',
  laptops: 'laptops',
  automotive: 'automotive',
  motorcycle: 'motorcycle',
} as const

export default Categories
export type CategoryName = 'total' | 'smartphones' | 'laptops' | 'automotive' | 'motorcycle'

