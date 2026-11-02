import { Link } from 'react-router-dom'
import { Heart, Users, Tv, Phone, BookOpen, Calendar } from 'lucide-react'

const links = [
  { icon: Heart,    label: 'Give Online',    sub: 'Tithe & offerings',         to: '/giving',     bg: 'from-red-500 to-rose-600' },
  { icon: Users,    label: 'Connect Groups', sub: 'Find your community',       to: '/connect',    bg: 'from-green-500 to-emerald-600' },
  { icon: Tv,       label: 'Watch Live',     sub: 'Stream Sunday service',     to: '/livestream', bg: 'from-blue-500 to-indigo-600' },
  { icon: BookOpen, label: 'Sermons',        sub: 'Audio & video library',     to: '/sermons',    bg: 'from-purple-500 to-violet-600' },
  { icon: Calendar, label: 'Events',         sub: 'What\'s happening',         to: '/events',     bg: 'from-orange-500 to-amber-600' },
  { icon: Phone,    label: 'Contact Us',     sub: 'We\'d love to hear from you',to: '/',           bg: 'from-teal-500 to-cyan-600' },
]

export default function QuickLinks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="section-heading text-center mb-2">Get Involved</h2>
        <p className="section-sub text-center mb-12">Everything you need to connect with our church community</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map(({ icon: Icon, label, sub, to, bg }) => (
            <Link
              key={to + label}
              to={to}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${bg} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={22} className="text-white" />
              </div>
              <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
              <p className="text-gray-400 text-xs leading-tight">{sub}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
