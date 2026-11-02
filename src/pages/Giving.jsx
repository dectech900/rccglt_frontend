import { useState } from 'react'
import { Heart, CheckCircle, ChevronRight, Lock } from 'lucide-react'

const FUNDS = [
  { id: 'tithe',    label: 'Tithe',           desc: 'Your 10% offering to the Lord',           icon: '💰' },
  { id: 'offering', label: 'General Offering', desc: 'Support the work of the ministry',        icon: '🙏' },
  { id: 'building', label: 'Building Fund',    desc: 'Towards our new sanctuary project',       icon: '⛪' },
  { id: 'missions', label: 'Missions',         desc: 'Reaching the unreached across Nigeria',   icon: '🌍' },
]

const AMOUNTS = [50, 100, 250, 500, 1000]

export default function Giving() {
  const [fund,      setFund]      = useState('tithe')
  const [amount,    setAmount]    = useState('')
  const [custom,    setCustom]    = useState(false)
  const [recurring, setRecurring] = useState(false)
  const [step,      setStep]      = useState(1)
  const [done,      setDone]      = useState(false)

  const selectedFund = FUNDS.find(f => f.id === fund)

  const handlePay = (e) => {
    e.preventDefault()
    setDone(true)
  }

  if (done) {
    return (
      <div className="pt-20 min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl p-12 text-center shadow-xl max-w-md w-full">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-800 mb-3">Thank You!</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Your gift of <span className="font-bold text-primary-700">${Number(amount).toLocaleString()}</span> to <span className="font-semibold">{selectedFund?.label}</span> has been received. A receipt will be sent to your email. May God bless you abundantly.
          </p>
          <button onClick={() => { setDone(false); setAmount(''); setStep(1) }} className="btn-primary">
            Give Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-cream">
      <div className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 text-center text-white">
        <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-4">
          <Heart size={22} className="text-gold-400" />
        </div>
        <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-3">Kingdom Giving</p>
        <h1 className="text-4xl font-serif font-bold mb-3">Give Online</h1>
        <p className="text-white/55 text-sm max-w-md mx-auto">
          "Give, and it will be given to you. A good measure, pressed down…" — Luke 6:38
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6 lg:px-8 py-14">
        <form onSubmit={handlePay} className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

          {/* Fund selection */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-700 mb-4 text-sm">1. Select Fund</h3>
            <div className="grid grid-cols-2 gap-3">
              {FUNDS.map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFund(f.id)}
                  className={`p-4 rounded-xl text-left border-2 transition-all duration-200 ${
                    fund === f.id ? 'border-primary-600 bg-primary-50' : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <p className={`font-semibold text-sm ${fund === f.id ? 'text-primary-700' : 'text-gray-700'}`}>{f.label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{f.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Amount */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-700 mb-4 text-sm">2. Choose Amount (USD)</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {AMOUNTS.map(a => (
                <button
                  key={a}
                  type="button"
                  onClick={() => { setAmount(String(a)); setCustom(false) }}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                    amount === String(a) && !custom ? 'border-primary-600 bg-primary-700 text-white' : 'border-gray-200 text-gray-600 hover:border-primary-300'
                  }`}
                >
                  ${a.toLocaleString()}
                </button>
              ))}
              <button
                type="button"
                onClick={() => { setCustom(true); setAmount('') }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                  custom ? 'border-primary-600 bg-primary-700 text-white' : 'border-gray-200 text-gray-600 hover:border-primary-300'
                }`}
              >
                Custom
              </button>
            </div>
            {custom && (
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-400"
              />
            )}
          </div>

          {/* Recurring toggle */}
          <div className="mb-8 flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <p className="font-semibold text-gray-700 text-sm">Make this recurring</p>
              <p className="text-gray-400 text-xs">Automatically give monthly</p>
            </div>
            <button
              type="button"
              onClick={() => setRecurring(r => !r)}
              className={`w-12 h-6 rounded-full transition-all duration-300 relative ${recurring ? 'bg-primary-700' : 'bg-gray-300'}`}
            >
              <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-300 ${recurring ? 'left-6' : 'left-0.5'}`} />
            </button>
          </div>

          {/* Payment (placeholder) */}
          <div className="mb-8 p-5 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-xs text-gray-400 mb-3 flex items-center gap-1.5"><Lock size={11} /> Secure payment powered by Stripe</p>
            <div className="space-y-3">
              <input type="text" placeholder="Card number" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-primary-400" />
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="MM / YY" className="px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-primary-400" />
                <input type="text" placeholder="CVV" className="px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-primary-400" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!amount || !fund}
            className="w-full py-4 rounded-full bg-gold-500 text-black font-bold text-base hover:bg-gold-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
          >
            Give {amount ? `$${Number(amount).toLocaleString()}` : ''} <ChevronRight size={18} />
          </button>
        </form>
      </div>
    </div>
  )
}
