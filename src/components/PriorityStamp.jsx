const OPTIONS = [
  { value: 'low', label: 'Low', hint: 'Can wait', ring: 'ring-stamp-low', dot: 'bg-stamp-low', text: 'text-stamp-low' },
  { value: 'medium', label: 'Medium', hint: 'This week', ring: 'ring-stamp-medium', dot: 'bg-stamp-medium', text: 'text-stamp-medium' },
  { value: 'high', label: 'High', hint: 'Blocking me', ring: 'ring-stamp-high', dot: 'bg-stamp-high', text: 'text-stamp-high' },
]

export default function PriorityStamp({ value, onChange, error }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-light">
          Priority
        </label>
        {error && <span className="font-mono text-[11px] text-postal-red">{error}</span>}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {OPTIONS.map((opt) => {
          const active = value === opt.value
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              aria-pressed={active}
              className={`group relative flex flex-col items-center justify-center gap-1 rounded-full border-2 py-4 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-kraft ${
                active
                  ? `border-ink bg-ink text-kraft shadow-[0_4px_0_0_rgba(30,35,55,0.25)] -translate-y-0.5`
                  : `border-ink/20 bg-transparent text-ink/70 hover:border-ink/40`
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${active ? 'bg-kraft' : opt.dot}`}
                aria-hidden="true"
              />
              <span className="font-display text-sm font-semibold tracking-wide">
                {opt.label}
              </span>
              <span className={`font-mono text-[10px] uppercase tracking-wider ${active ? 'text-kraft/70' : 'text-ink/40'}`}>
                {opt.hint}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
