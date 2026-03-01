import { motion } from 'framer-motion'
import { categories } from '../../data/categories'
import { revealInitial, revealVisible, cardReveal } from './revealMotion'

export function SectionCategories() {
  return (
    <section
      id="categories"
      className="border-t border-neutral-200 bg-white px-4 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-center text-3xl font-semibold text-neutral-800 md:text-4xl"
          initial={revealInitial}
          whileInView={revealVisible()}
          viewport={{ once: true, amount: 0.2 }}
        >
          Категории мебели
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-neutral-600"
          initial={revealInitial}
          whileInView={revealVisible(0.08)}
          viewport={{ once: true, amount: 0.2 }}
        >
          Мебель для образовательных учреждений, офисов и дома
        </motion.p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href={`#${cat.id}`}
              className="group flex flex-col rounded-xl border border-neutral-200 bg-neutral-50/50 p-6 transition-colors hover:border-neutral-300 hover:bg-neutral-100/80"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardReveal}
              custom={i}
            >
              <span className="text-lg font-medium text-neutral-800 group-hover:text-neutral-900">
                {cat.title}
              </span>
              <p className="mt-2 text-sm text-neutral-500">
                {cat.subcategories.length} подкатегорий
              </p>
              <span className="mt-3 text-sm font-medium text-amber-700 group-hover:underline">
                Смотреть →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
