import { useState } from 'react'
import { Calendar, Clock, MapPin, Users, Check } from 'lucide-react'
import { events } from '../data/mockData.js'

const CATS = ['All', 'Worship', 'Youth', 'Women', 'Men', 'Prayer', 'Membership']

const tagBg = {
  Worship: 'bg-blue-100 text-blue-700', Youth: 'bg-purple-100 text-purple-700',
  Women: 'bg-pink-100 text-pink-700',   Men: 'bg-indigo-100 text-indigo-700',
  Prayer: 'bg-amber-100 text-amber-700',Membership: 'bg-green-100 text-green-700',
}

function EventRow({ event }) {
  const [rsvped, setRsvped] = useState(false)
  const d = new Date(event.date)
  const colorClass = tagBg[event.category] ?? 'bg-gray-100 text-gray-600'
  const hasImage = !!event.imageUrl

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Flyer banner */}
      {hasImage && (
        <div className="relative aspect-[21/9] overflow-hidden bg-gray-100">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${colorClass}`}>
            {event.category}
          </span>
          <div className="absolute top-4 right-4 bg-primary-700/90 text-white rounded-xl text-center px-3 py-1.5 min-w-[52px]">
            <p className="text-[10px] font-bold tracking-wider">{d.toLocaleString('en',{month:'short'}).toUpperCase()}</p>
            <p className="font-bold text-xl leading-none">{d.getDate()}</p>
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col sm:flex-row gap-5 items-start">
        {/* Date badge — only shown when no image */}
        {!hasImage && (
          <div className="shrink-0 w-16 text-center">
            <div className="bg-primary-700 text-white rounded-t-xl py-2">
              <p className="text-[10px] font-bold tracking-wider">{d.toLocaleString('en',{month:'short'}).toUpperCase()}</p>
            </div>
            <div className="bg-primary-50 rounded-b-xl py-2.5">
              <p className="text-primary-700 font-bold text-2xl leading-none">{d.getDate()}</p>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-2">
            <h3 className="font-serif font-semibold text-gray-800 text-base">{event.title}</h3>
            {!hasImage && (
              <span className={`shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded-full ${colorClass}`}>{event.category}</span>
            )}
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1.5"><Clock size={13} /> {event.time}</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} /> {event.location}</span>
            {event.capacity && <span className="flex items-center gap-1.5"><Users size={13} /> {event.capacity} seats</span>}
          </div>
          {event.rsvp && (
            <button
              onClick={() => setRsvped(r => !r)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                rsvped
                  ? 'bg-green-100 text-green-700 border border-green-200'
                  : 'bg-primary-700 text-white hover:bg-primary-800'
              }`}
            >
              {rsvped ? <><Check size={15} /> RSVP Confirmed</> : 'Reserve My Spot'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Events() {
  const [cat, setCat] = useState('All')
  const filtered = cat === 'All' ? events : events.filter(e => e.category === cat)

  return (
    <div className="pt-20 min-h-screen bg-cream">
      <div className="bg-primary-800 py-16 text-center text-white">
        <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-3">Church Calendar</p>
        <h1 className="text-4xl font-serif font-bold mb-3">Events & Activities</h1>
        <p className="text-white/55 text-sm max-w-md mx-auto">
          Stay up to date with everything happening at RCCG Lord's Temple. Register and connect!
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {CATS.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                cat === c ? 'bg-primary-700 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map(e => <EventRow key={e.id} event={e} />)}
        </div>
      </div>
    </div>
  )
}
