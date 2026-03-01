import { motion } from 'framer-motion'
import { roadmapSteps } from '../../data/roadmap'
import { revealInitial, revealVisible, cardReveal } from './revealMotion'

/**
 * Блок «Как оформить заказ» — три шага до получения мебели.
 * Контент из src/data/roadmap.ts.
 */
export function SectionRoadmap() {
  const hasSteps = roadmapSteps.length > 0

  return (
    <section
      id="order-steps"
      className="border-t border-neutral-200 bg-neutral-50 px-4 py-20"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="text-center text-3xl font-semibold text-neutral-800 md:text-4xl"
          initial={revealInitial}
          whileInView={revealVisible()}
          viewport={{ once: true, amount: 0.2 }}
        >
          Как оформить заказ
        </motion.h2>

        {hasSteps ? (
          <ul className="mt-10 space-y-6">
            {roadmapSteps.map((step, i) => (
              <motion.li
                key={step.id}
                className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardReveal}
                custom={i}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900">
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="mt-1 text-sm text-neutral-600">
                        {step.description}
                      </p>
                    )}
                  </div>
                  {step.date && (
                    <span className="shrink-0 text-sm text-neutral-500">
                      {step.date}
                    </span>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        ) : (
          <motion.p
            className="mt-4 text-center text-neutral-500"
            initial={revealInitial}
            whileInView={revealVisible(0.08)}
            viewport={{ once: true, amount: 0.2 }}
          >
            Будет дополнено
          </motion.p>
        )}
      </div>
    </section>
  )
}
