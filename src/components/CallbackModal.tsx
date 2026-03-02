import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CallbackModalProps {
  isOpen: boolean
  onClose: () => void
}

const overlayVariants = {
  closed: {
    opacity: 0,
    visibility: 'hidden' as const,
    pointerEvents: 'none' as const,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    visibility: 'visible' as const,
    pointerEvents: 'auto' as const,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    visibility: 'hidden' as const,
    pointerEvents: 'none' as const,
    transition: { duration: 0.2 },
  },
}

const panelVariants = {
  closed: { opacity: 0, scale: 0.96 },
  open: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.2 },
  },
}

export function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false)
      setName('')
      setPhone('')
      setComment('')
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && panelRef.current) {
      const firstInput = panelRef.current.querySelector<HTMLInputElement | HTMLTextAreaElement>(
        'input, textarea'
      )
      firstInput?.focus()
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setSubmitted(true)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="exit"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="callback-modal-title"
          aria-describedby="callback-modal-desc"
        >
          <motion.div
            ref={panelRef}
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 sm:px-6">
              <h2
                id="callback-modal-title"
                className="text-lg font-semibold text-neutral-900"
              >
                Заказать звонок
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
                aria-label="Закрыть"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-5 py-5 sm:px-6 sm:py-6">
              {submitted ? (
                <div id="callback-modal-desc" className="py-4 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-neutral-700 font-medium">Заявка принята</p>
                  <p className="mt-1 text-sm text-neutral-500">
                    Мы перезвоним вам в ближайшее время.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-5 w-full rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
                  >
                    Закрыть
                  </button>
                </div>
              ) : (
                <>
                  <p id="callback-modal-desc" className="mb-4 text-sm text-neutral-600">
                    Оставьте контакты — мы перезвоним в удобное время.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="callback-name" className="mb-1 block text-sm font-medium text-neutral-700">
                        Имя <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="callback-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Как к вам обращаться"
                        className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-neutral-900 placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="callback-phone" className="mb-1 block text-sm font-medium text-neutral-700">
                        Телефон <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="callback-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        placeholder="+7 (___) ___-__-__"
                        className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-neutral-900 placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label htmlFor="callback-comment" className="mb-1 block text-sm font-medium text-neutral-700">
                        Комментарий
                      </label>
                      <textarea
                        id="callback-comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={3}
                        placeholder="О чём хотите спросить (необязательно)"
                        className="w-full resize-none rounded-lg border border-neutral-300 px-3 py-2.5 text-neutral-900 placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
                      />
                    </div>
                    <div className="flex gap-3 pt-1">
                      <button
                        type="submit"
                        className="flex-1 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
                      >
                        Жду звонка
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
                      >
                        Отмена
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
