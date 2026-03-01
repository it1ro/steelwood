import { Component, type ErrorInfo, type ReactNode } from 'react'
import { WardrobePlaceholder } from './WardrobePlaceholder'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

/** Ловит ошибки загрузки GLB и показывает геометрическую заглушку. */
export class ModelErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('[Hero] Ошибка загрузки модели, показываем заглушку:', error.message, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <WardrobePlaceholder />
    }
    return this.props.children
  }
}
