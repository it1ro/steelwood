import { createContext, useCallback, useContext, useState } from 'react'
import { CallbackModal } from '../components/CallbackModal'

type TriggerRef = React.RefObject<HTMLElement | null>

interface CallbackModalContextValue {
  openCallbackModal: (triggerRef?: TriggerRef) => void
  closeCallbackModal: () => void
}

const CallbackModalContext = createContext<CallbackModalContextValue | null>(null)

export function CallbackModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [triggerRef, setTriggerRef] = useState<TriggerRef | null>(null)

  const openCallbackModal = useCallback((ref?: TriggerRef) => {
    setTriggerRef(ref ?? null)
    setIsOpen(true)
  }, [])

  const closeCallbackModal = useCallback(() => {
    setIsOpen(false)
    setTriggerRef(null)
  }, [])

  return (
    <CallbackModalContext.Provider value={{ openCallbackModal, closeCallbackModal }}>
      {children}
      <CallbackModal
        isOpen={isOpen}
        onClose={closeCallbackModal}
        triggerRef={triggerRef ?? undefined}
      />
    </CallbackModalContext.Provider>
  )
}

export function useCallbackModal() {
  const ctx = useContext(CallbackModalContext)
  if (!ctx) {
    throw new Error('useCallbackModal must be used within CallbackModalProvider')
  }
  return ctx
}
