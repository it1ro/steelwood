/**
 * Пункты полноэкранного меню (карта сайта).
 * Редактировать здесь — пункты отображаются в хедере (гамбургер) и в секциях.
 */
export interface MenuItem {
  id: string
  label: string
  href: string
}

export const menuItems: MenuItem[] = [
  { id: 'categories', label: 'Категории', href: '#categories' },
  { id: 'about', label: 'О нас', href: '#about' },
  { id: 'cta', label: 'Связаться', href: '#cta' },
  { id: 'roadmap', label: 'Как оформить заказ', href: '#order-steps' },
]
