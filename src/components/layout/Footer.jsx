import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, Twitter, Clock } from 'lucide-react'
import rccgLogo from '../../Assets/RCCG.png'

const quickLinks = [
  { label: 'Home',         to: '/' },
  { label: 'Sermons',      to: '/sermons' },
  { label: 'Events',       to: '/events' },
  { label: 'Online Giving',to: '/giving' },
  { label: 'Connect Groups',to:'/connect' },
  { label: 'Watch Live',   to: '/livestream' },
  { label: 'Member Portal',to: '/member' },
]

const serviceTimes = [
  { day: 'Sunday',    times: ['1st Service — 8:00 AM', '2nd Service — 10:30 AM', 'Evening Service — 6:00 PM'] },
  { day: 'Wednesday', times: ['Midweek Service — 6:30 PM'] },
  { day: 'Friday',    times: ['Prayer Night — 10:00 PM'] },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Top strip */}
      <div className="bg-gold-500 py-3 text-center">
        <p className="text-black text-sm font-semibold tracking-wide">
          Next Sunday Service — 10:30 AM · All are welcome!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={rccgLogo}
                alt="RCCG Logo"
                className="w-12 h-12 object-contain"
              />
              <p className="font-serif font-bold text-base leading-tight">RCCG Lord's Temple</p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A Spirit-filled church committed to winning souls, raising disciples, and transforming communities for God's kingdom.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook,  href: '#' },
                { Icon: Youtube,   href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Twitter,   href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-black flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-base mb-5 text-gold-400">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-serif font-semibold text-base mb-5 text-gold-400">Service Times</h3>
            <ul className="space-y-4">
              {serviceTimes.map(s => (
                <li key={s.day}>
                  <p className="text-white font-medium text-sm flex items-center gap-2 mb-1">
                    <Clock size={13} className="text-gold-400" /> {s.day}
                  </p>
                  {s.times.map(t => (
                    <p key={t} className="text-white/50 text-xs ml-5">{t}</p>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-base mb-5 text-gold-400">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" />
                <span>1600 4th Ave N, Grand Forks, ND 58203</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone size={16} className="text-gold-400 shrink-0" />
                <span>(701) 772-0163</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail size={16} className="text-gold-400 shrink-0" />
                <span>info@rccgcityofdavid.org</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/giving"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500 text-black text-sm font-semibold hover:bg-gold-400 transition-colors duration-300"
              >
                Give Online
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-white/30 text-xs">
        © {new Date().getFullYear()} RCCG Lord's Temple. All rights reserved. Built with love for the Kingdom.
      </div>
    </footer>
  )
}
