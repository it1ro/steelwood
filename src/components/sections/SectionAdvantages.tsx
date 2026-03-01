import { motion } from 'framer-motion'
import { revealInitial, revealVisible, cardReveal } from './revealMotion'

const items = [
  {
    title: 'Качество и долговечность',
    text: 'Мебель из надёжных материалов для образовательных и офисных помещений.',
  },
  {
    title: 'Широкий ассортимент',
    text: 'Детские сады, школы, офисы, общежития и дом — подберём решение под задачу.',
  },
  {
    title: 'Индивидуальные решения',
    text: 'Проектирование и изготовление под ваши размеры и требования.',
  },
]

export function SectionAdvantages() {
  return (
    <section
      id="about"
      className="border-t border-neutral-200 bg-neutral-50 px-4 py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="about-heading"
          className="text-center text-3xl font-semibold text-neutral-800 md:text-4xl"
          initial={revealInitial}
          whileInView={revealVisible()}
          viewport={{ once: true, amount: 0.2 }}
        >
          О компании
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-neutral-600"
          initial={revealInitial}
          whileInView={revealVisible(0.08)}
          viewport={{ once: true, amount: 0.2 }}
        >
          Преимущества работы с нами
        </motion.p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardReveal}
              custom={i}
            >
              <h3 className="text-lg font-semibold text-neutral-800">
                {item.title}
              </h3>
              <p className="mt-2 text-neutral-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
