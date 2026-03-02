/**
 * Категории и подкатегории для каталога (меню и выпадающий блок).
 */
export interface Subcategory {
  id: string
  title: string
  href?: string
}

export interface Category {
  id: string
  title: string
  /** Иконка категории (ключ для маппинга в UI) */
  icon: 'kindergarten' | 'school' | 'office' | 'home' | 'dormitory'
  subcategories: Subcategory[]
}

export const categories: Category[] = [
  {
    id: 'kindergartens',
    title: 'Детские сады',
    icon: 'kindergarten',
    subcategories: [
      { id: 'kd-shkafy', title: 'Шкафы и стеллажи' },
      { id: 'kd-stoly', title: 'Столы и стулья' },
      { id: 'kd-krovati', title: 'Кровати и матрасы' },
    ],
  },
  {
    id: 'schools',
    title: 'Для школ',
    icon: 'school',
    subcategories: [
      { id: 'sh-party', title: 'Парты и стулья' },
      { id: 'sh-shkafy', title: 'Шкафы для раздевалок' },
      { id: 'sh-auditorii', title: 'Аудиторная мебель' },
    ],
  },
  {
    id: 'offices',
    title: 'Для офисов',
    icon: 'office',
    subcategories: [
      { id: 'of-stoly', title: 'Офисные столы' },
      { id: 'of-kresla', title: 'Кресла и стулья' },
      { id: 'of-peregorodki', title: 'Перегородки и стеллажи' },
    ],
  },
  {
    id: 'home',
    title: 'Для дома',
    icon: 'home',
    subcategories: [
      { id: 'hm-garderob', title: 'Гардеробные и шкафы' },
      { id: 'hm-gostinaya', title: 'Гостиная' },
      { id: 'hm-spalnya', title: 'Спальня и детская' },
    ],
  },
  {
    id: 'dormitories',
    title: 'Общежитие и лагерь',
    icon: 'dormitory',
    subcategories: [
      { id: 'ob-krovati', title: 'Кровати двухъярусные' },
      { id: 'ob-shkafy', title: 'Шкафы и тумбы' },
      { id: 'ob-obshchaya', title: 'Общие зоны' },
    ],
  },
]
