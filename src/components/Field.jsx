export default function Field({ label, error, children }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-light">
          {label}
        </label>
        {error && <span className="font-mono text-[11px] text-postal-red">{error}</span>}
      </div>
      {children}
    </div>
  )
}
