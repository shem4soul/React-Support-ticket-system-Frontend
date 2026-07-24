export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink text-ink">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 6h16v10a2 2 0 0 1-2 2H9l-5 4V6Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </div>
        <div className="leading-tight">
          <p className="font-display text-lg font-semibold tracking-tight text-ink">Helpdesk</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">Intake Window</p>
        </div>
      </div>
      <a
        href="#form"
        className="hidden rounded-full border border-ink/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink/60 transition hover:border-ink/40 hover:text-ink sm:inline-block"
      >
        No login needed
      </a>
    </header>
  )
}
