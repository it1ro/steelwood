/**
 * Общие настройки «картинных» scroll-анимаций: более явное движение,
 * лёгкий scale и кинематографичная кривая.
 */
export const reveal = {
  /** Кривая: плавное замедление в конце (ease-out expo-подобная) */
  ease: [0.22, 1, 0.36, 1] as const,
  /** Длительность появления (сек) */
  duration: 0.7,
  /** Смещение по Y в начале (px) — заметный подъём */
  yOffset: 48,
  /** Лёгкое масштабирование при появлении */
  scaleFrom: 0.97,
}

export const revealTransition = (delay = 0) => ({
  duration: reveal.duration,
  delay,
  ease: reveal.ease,
})

export const revealInitial = {
  opacity: 0,
  y: reveal.yOffset,
  scale: reveal.scaleFrom,
}

export const revealVisible = (delay = 0) => ({
  opacity: 1,
  y: 0,
  scale: 1,
  transition: revealTransition(delay),
})

/** Варианты для stagger-карточек (custom = индекс) */
export const cardReveal = {
  hidden: { opacity: 0, y: reveal.yOffset, scale: reveal.scaleFrom },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: reveal.duration,
      delay: i * 0.1,
      ease: reveal.ease,
    },
  }),
}
