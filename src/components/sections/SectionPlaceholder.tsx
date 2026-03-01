type SectionPlaceholderProps = {
  id: string
  title: string
  description?: string
}

export function SectionPlaceholder({ id, title, description }: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      className="flex min-h-[40vh] w-full items-center justify-center border-t border-neutral-200 bg-white px-4 py-16"
    >
      <div className="max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-neutral-800">{title}</h2>
        {description && <p className="mt-2 text-neutral-600">{description}</p>}
      </div>
    </section>
  )
}
