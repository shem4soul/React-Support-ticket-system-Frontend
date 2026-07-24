import { useState } from 'react'
import Field from './Field.jsx'
import PriorityStamp from './PriorityStamp.jsx'
import { submitTicket } from '../lib/api.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PRIORITIES = ['low', 'medium', 'high']

const initialForm = { name: '', email: '', subject: '', description: '', priority: '' }

function inputClass(hasError) {
  return `w-full border-b-2 bg-transparent pb-2 font-body text-[15px] text-ink placeholder:text-ink/30 focus:outline-none ${
    hasError ? 'border-postal-red' : 'border-ink/20 focus:border-ink'
  }`
}

export default function TicketForm({ onSubmitted }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState('')

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Required'
    if (!form.email.trim()) next.email = 'Required'
    else if (!EMAIL_RE.test(form.email.trim())) next.email = 'Invalid email'
    if (!form.subject.trim()) next.subject = 'Required'
    if (!form.description.trim()) next.description = 'Required'
    if (!form.priority) next.priority = 'Required'
    else if (!PRIORITIES.includes(form.priority)) next.priority = 'Invalid priority'
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setServerError('')
    const validation = validate()
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    setSubmitting(true)
    try {
      const { ticket } = await submitTicket({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        description: form.description.trim(),
        priority: form.priority,
      })
      setForm(initialForm)
      onSubmitted(ticket)
    } catch (err) {
      const apiFields = err?.response?.data?.fields
      if (apiFields) {
        setErrors(apiFields)
      } else {
        setServerError(
          err?.response?.data?.error || 'Something went wrong while sending this. Please try again.'
        )
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <Field label="Your name" error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Jane Okafor"
            className={inputClass(errors.name)}
          />
        </Field>
        <Field label="Email address" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="jane@email.com"
            className={inputClass(errors.email)}
          />
        </Field>
      </div>

      <Field label="Subject" error={errors.subject}>
        <input
          type="text"
          value={form.subject}
          onChange={(e) => update('subject', e.target.value)}
          placeholder="What's this about, in a few words"
          className={inputClass(errors.subject)}
        />
      </Field>

      <Field label="Tell us what's going on" error={errors.description}>
        <textarea
          rows={5}
          value={form.description}
          onChange={(e) => update('description', e.target.value)}
          placeholder="The more detail, the faster we can help — what happened, what you expected, and any steps to reproduce it."
          className={`${inputClass(errors.description)} resize-none`}
        />
      </Field>

      <PriorityStamp
        value={form.priority}
        onChange={(v) => update('priority', v)}
        error={errors.priority}
      />

      {serverError && (
        <p className="rounded-lg border border-postal-red/30 bg-postal-red/5 px-4 py-3 font-mono text-[12px] text-postal-red">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="group relative w-full overflow-hidden rounded-full bg-ink px-8 py-4 font-display text-base font-semibold text-kraft transition disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <span className="relative z-10">{submitting ? 'Filing your ticket…' : 'Submit ticket'}</span>
      </button>
    </form>
  )
}
