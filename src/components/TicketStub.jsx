const PRIORITY_LABEL = { low: 'Low', medium: 'Medium', high: 'High' }

export default function TicketStub({ ticket, onReset }) {
  const idPadded = String(ticket.id).padStart(5, '0')
  const created = new Date(ticket.created_at || Date.now())
  const dateStr = created.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })

  return (
    <div className="animate-[fadeIn_0.4s_ease-out]">
      <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border-2 border-ink/15 bg-white/60 shadow-[0_20px_50px_-20px_rgba(30,35,55,0.35)]">
        {/* postmark */}
        <div className="absolute right-5 top-5 flex h-20 w-20 -rotate-12 items-center justify-center rounded-full border-[3px] border-postal-blue/70 text-postal-blue/70">
          <div className="flex flex-col items-center leading-none">
            <span className="font-mono text-[9px] tracking-[0.2em]">RECEIVED</span>
            <span className="my-0.5 h-px w-8 bg-postal-blue/50" />
            <span className="font-mono text-[9px] tracking-[0.2em]">{dateStr}</span>
          </div>
        </div>

        <div className="p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
            Ticket filed
          </p>
          <h2 className="mt-1 font-display text-3xl font-semibold text-ink">
            #{idPadded}
          </h2>
          <p className="mt-3 max-w-[85%] text-sm leading-relaxed text-ink/70">
            We&apos;ve got it. A confirmation for <span className="font-medium text-ink">{ticket.subject}</span> was
            filed under <span className="font-medium text-ink">{PRIORITY_LABEL[ticket.priority]}</span> priority.
            We&apos;ll follow up at <span className="font-medium text-ink">{ticket.email}</span>.
          </p>
        </div>

        {/* perforation */}
        <div className="relative flex items-center px-8">
          <div className="h-0 w-full border-t-2 border-dashed border-ink/25" />
          <span className="absolute -left-8 h-6 w-6 rounded-full bg-[#F5F1E4]" />
          <span className="absolute -right-8 h-6 w-6 rounded-full bg-[#F5F1E4]" />
        </div>

        <div className="flex items-center justify-between px-8 py-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">Status</p>
            <p className="font-display text-sm font-semibold text-stamp-medium">Open</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">Priority</p>
            <p className="font-display text-sm font-semibold text-ink">{PRIORITY_LABEL[ticket.priority]}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={onReset}
          className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60 underline decoration-dotted underline-offset-4 transition hover:text-ink"
        >
          File another ticket
        </button>
      </div>
    </div>
  )
}
