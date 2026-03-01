export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b border-neutral-200 bg-white/90 px-4 backdrop-blur-sm"
      role="banner"
    >
      <div className="flex items-center gap-4">
        <span className="font-semibold text-neutral-800">Steel & Wood</span>
      </div>
      <nav className="hidden md:flex items-center gap-6" aria-label="Основное меню">
        <span className="text-sm text-neutral-600">Каталог</span>
        <a href="tel:+79377575153" className="text-sm text-neutral-600 hover:text-neutral-900">
          +7 (937) 757-51-53
        </a>
      </nav>
    </header>
  )
}
