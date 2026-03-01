import { motion, type Variants } from 'framer-motion'

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
}

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
  as?: 'section' | 'div' | 'article'
  id?: string
  /** Порог появления (0–1). По умолчанию 0.1 */
  amount?: number
  /** Кастомная задержка (сек) для дочернего контента */
  delay?: number
  /** Ступенчатая задержка для детей (stagger) — индекс передаётся в custom */
  stagger?: boolean
}

export function ScrollReveal({
  children,
  className,
  as: Tag = 'section',
  id,
  amount = 0.1,
  delay = 0,
  stagger = false,
}: ScrollRevealProps) {
  const Component = Tag === 'section' ? motion.section : motion.div
  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={defaultVariants}
      custom={stagger ? undefined : delay}
    >
      {children}
    </Component>
  )
}
