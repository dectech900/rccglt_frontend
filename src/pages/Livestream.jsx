import { useState, useEffect } from 'react'
import { Tv, MessageSquare, Bell, Clock, Calendar } from 'lucide-react'

function Countdown({ targetDay }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calc = () => {
      const now = new Date()
      const next = new Date()
      const day = now.getDay() // 0=Sun
      const daysUntilSunday = (7 - day) % 7 || 7
      next.setDate(next.getDate() + daysUntilSunday)
      next.setHours(10, 30, 0, 0)
      const diff = next - now
      setTime({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    calc()
    const t = setInterval(calc, 1000)
    return () => clearInterval(t)
  }, [])

  const pad = n => String(n).padStart(2, '0')

  return (
    <div className="flex items-center gap-4 justify-center">
      {[['Days', time.days], ['Hours', time.hours], ['Minutes', time.minutes], ['Seconds', time.seconds]].map(([label, val]) => (
        <div key={label} className="text-center">
          <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-5 py-4 min-w-[72px]">
            <p className="text-white font-bold text-3xl font-mono tabular-nums">{pad(val)}</p>
          </div>
          <p className="text-white/50 text-xs mt-2 uppercase tracking-wider">{label}</p>
        </div>
      ))}
    </div>
  )
}

export default function Livestream() {
  const [chatMsg, setChatMsg] = useState('')
  const [chatLog, setChatLog] = useState([
    { name: 'Sis. Grace',  msg: 'Blessed Sunday to everyone! 🙏', time: '10:28' },
    { name: 'Bro. Tobi',   msg: 'Can\'t wait for the service to begin!', time: '10:29' },
    { name: 'Sister Amaka',msg: 'Joining from Abuja — God bless RCCG!', time: '10:30' },
  ])

  const sendChat = (e) => {
    e.preventDefault()
    if (!chatMsg.trim()) return
    setChatLog(l => [...l, { name: 'You', msg: chatMsg, time: new Date().toLocaleTimeString('en',{hour:'2-digit',minute:'2-digit'}) }])
    setChatMsg('')
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-950">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-950 via-primary-900 to-gray-950 py-14 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-red-400 text-xs font-bold tracking-widest uppercase">Live Every Sunday</span>
        </div>
        <h1 className="text-4xl font-serif font-bold text-white mb-3">Sunday Worship Service</h1>
        <p className="text-white/50 text-sm max-w-md mx-auto mb-10">
          Next service begins in:
        </p>
        <Countdown />
      </div>

      {/* Player + Chat */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Video embed */}
          <div className="lg:col-span-2">
            <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800">
              <div className="text-center text-gray-600">
                <Tv size={56} className="mx-auto mb-4 opacity-30" />
                <p className="text-sm">Stream begins at 10:30 AM Sunday</p>
                <p className="text-xs mt-1 opacity-60">YouTube Live embed will appear here</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h2 className="text-white font-serif font-semibold text-lg">RCCG Lord's Temple — Live Service</h2>
                <p className="text-gray-500 text-sm flex items-center gap-1.5 mt-1">
                  <Calendar size={13} /> Sundays · <Clock size={13} /> 10:30 AM WAT
                </p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-500 transition-colors">
                <Bell size={15} /> Remind Me
              </button>
            </div>
          </div>

          {/* Chat */}
          <div className="bg-gray-900 rounded-2xl border border-gray-800 flex flex-col" style={{ height: 500 }}>
            <div className="px-5 py-4 border-b border-gray-800 flex items-center gap-2">
              <MessageSquare size={16} className="text-gold-400" />
              <h3 className="text-white font-semibold text-sm">Live Chat</h3>
              <span className="ml-auto text-xs text-gray-600">{chatLog.length} messages</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatLog.map((m, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-primary-700 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {m.name[0]}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-gold-400 text-xs font-semibold">{m.name}</span>
                      <span className="text-gray-600 text-[10px]">{m.time}</span>
                    </div>
                    <p className="text-gray-300 text-xs mt-0.5">{m.msg}</p>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={sendChat} className="p-4 border-t border-gray-800 flex gap-2">
              <input
                type="text"
                value={chatMsg}
                onChange={e => setChatMsg(e.target.value)}
                placeholder="Say something..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 text-white text-xs placeholder-gray-600 focus:outline-none focus:border-gold-500"
              />
              <button type="submit" className="px-4 py-2 rounded-xl bg-gold-500 text-black text-xs font-bold hover:bg-gold-400 transition-colors">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
