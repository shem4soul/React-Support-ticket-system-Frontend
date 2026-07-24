import { useState } from 'react'
import Header from './components/Header.jsx'
import TicketForm from './components/TicketForm.jsx'
import TicketStub from './components/TicketStub.jsx'

export default function App() {
  const [submittedTicket, setSubmittedTicket] = useState(null)

  return (
    <div className="min-h-screen bg-kraft bg-kraft-fiber">
      <div className="mx-auto max-w-3xl px-6 py-10 sm:py-16">
        <Header />

        <main id="form" className="mt-14 sm:mt-20">
          {!submittedTicket ? (
            <>
              <div className="mb-12 max-w-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-postal-blue">
                  Stuck on something?
                </p>
                <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
                  Send word,
                  <br />
                  we&apos;ll send help.
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
                  Fill in the slip below and it goes straight to our team — no account, no wait
                  at a login screen. You&apos;ll get a ticket number to keep for reference.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-ink/10 bg-white/40 p-6 shadow-[0_30px_60px_-30px_rgba(30,35,55,0.25)] backdrop-blur-sm sm:p-10">
                <TicketForm onSubmitted={setSubmittedTicket} />
              </div>
            </>
          ) : (
            <TicketStub ticket={submittedTicket} onReset={() => setSubmittedTicket(null)} />
          )}
        </main>

        <footer className="mt-20 flex flex-col items-center gap-1 border-t border-ink/10 pt-6 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">
            Helpdesk Intake · Open to everyone · Replies by email
          </p>
        </footer>
      </div>
    </div>
  )
}
