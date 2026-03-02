import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { categories, type Category } from '../../data/categories'

const iconClass = 'h-4 w-4 shrink-0 text-current'

const categoryIcons: Record<
  Category['icon'],
  () => JSX.Element
> = {
  kindergarten: () => (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  school: () => (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  office: () => (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  home: () => (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  dormitory: () => (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
}

interface CatalogDropdownProps {
  isOpen: boolean
  onClose: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  /** На мобильных открывать по клику; на десктопе — по hover */
  isTouch?: boolean
}

const contentVariants = {
  enter: { opacity: 0, x: 8 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -8 },
}

export function CatalogDropdown({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
  isTouch = false,
}: CatalogDropdownProps) {
  const [activeCategory, setActiveCategory] = useState<Category | null>(
    categories[0] ?? null
  )

  if (!isOpen) return null

  return (
    <div
      className="absolute left-0 top-full z-50 pt-2"
      style={{ width: 'min(90vw, 32rem)', minWidth: 'min(280px, 90vw)' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="menu"
      aria-label="Категории мебели"
    >
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className="w-full min-w-0 rounded-xl border border-neutral-200 bg-white/95 shadow-lg backdrop-blur-sm"
      >
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-0">
          {/* Список категорий слева */}
          <ul className="min-w-0 border-r border-neutral-100 py-2">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  type="button"
                  role="menuitem"
                  className={`flex w-full items-center gap-3 truncate px-4 py-2.5 text-left text-sm transition-colors ${
                    activeCategory?.id === cat.id
                      ? 'bg-neutral-100 font-medium text-neutral-900'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                  onMouseEnter={() => setActiveCategory(cat)}
                  onClick={() => isTouch && onClose()}
                >
                  <span className="flex-shrink-0 text-neutral-400">{categoryIcons[cat.icon]()}</span>
                  <span className="min-w-0 truncate">{cat.title}</span>
                </button>
              </li>
            ))}
          </ul>
          {/* Подкатегории справа */}
          <div className="min-h-[200px] min-w-0 overflow-hidden p-4">
            <AnimatePresence mode="wait">
              {activeCategory && (
                <motion.div
                  key={activeCategory.id}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.15 }}
                  className="space-y-1"
                >
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-400">
                    {activeCategory.title}
                  </p>
                  <ul className="space-y-0.5">
                    {activeCategory.subcategories.map((sub) => (
                      <li key={sub.id}>
                        <a
                          href={sub.href ?? '#'}
                          className="block rounded px-2 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                          onClick={() => isTouch && onClose()}
                        >
                          {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
