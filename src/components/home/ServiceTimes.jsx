import { Clock, MapPin, Users } from 'lucide-react'

const services = [
  { day: 'Sunday',    label: '1st Service',     time: '8:00 AM',  desc: 'Early risers worship service',                icon: '🌅' },
  { day: 'Sunday',    label: '2nd Service',     time: '10:30 AM', desc: 'Main family worship service',                 icon: '⛪' },
  { day: 'Sunday',    label: 'Evening Service', time: '6:00 PM',  desc: 'Praise, worship & the Word',                  icon: '🌙' },
  { day: 'Wednesday', label: 'Midweek Service', time: '6:30 PM',  desc: 'Bible study & fellowship',                    icon: '📖' },
  { day: 'Friday',    label: 'Prayer Night',    time: '10:00 PM', desc: 'All-night corporate prayer',                  icon: '🙏' },
]

export default function ServiceTimes() {
  return (
    <section id="service-times" className="py-20 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">Plan Your Visit</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3 mb-4">Service Times</h2>
        <p className="text-white/55 max-w-xl mx-auto mb-12 text-sm leading-relaxed">
          Join us for any of our weekly services. All services are held at our main auditorium unless otherwise stated.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white/8 border border-white/12 rounded-2xl p-3 lg:p-6 text-center hover:bg-white/15 hover:border-gold-500/40 transition-all duration-300 group"
            >
              <div className="text-xl lg:text-3xl mb-1.5 lg:mb-3">{s.icon}</div>
              <p className="text-gold-400 text-[10px] lg:text-xs font-semibold uppercase tracking-wider mb-0.5 lg:mb-1">{s.day}</p>
              <p className="text-white font-serif font-semibold text-xs lg:text-base mb-0.5 lg:mb-1">{s.label}</p>
              <p className="text-white font-bold text-base lg:text-2xl mb-1.5 lg:mb-3 group-hover:text-gold-400 transition-colors">{s.time}</p>
              <p className="text-white/45 text-[10px] lg:text-xs leading-snug hidden sm:block">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
          <span className="flex items-center gap-2"><MapPin size={14} className="text-gold-400" /> 1600 4th Ave N, Grand Forks, ND 58203</span>
          <span className="flex items-center gap-2"><Users size={14} className="text-gold-400" /> All are welcome — no dress code required</span>
          <span className="flex items-center gap-2"><Clock size={14} className="text-gold-400" /> Children's church available during Sunday services</span>
        </div>
      </div>
    </section>
  )
}
