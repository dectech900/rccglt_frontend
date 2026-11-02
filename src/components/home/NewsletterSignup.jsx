import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'

export default function NewsletterSignup() {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary-800 to-primary-900">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-5">
          <Mail size={22} className="text-gold-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
          Stay Connected with God's Work
        </h2>
        <p className="text-white/55 text-sm mb-8 leading-relaxed">
          Receive our weekly devotionals, event updates, and church news directly in your inbox. No spam — only blessings.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-green-400 font-semibold">
            <CheckCircle size={22} /> Thank you! You're now subscribed.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/35 text-sm focus:outline-none focus:border-gold-400 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-gold-500 text-black font-bold text-sm hover:bg-gold-400 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
