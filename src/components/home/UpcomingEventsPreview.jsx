import { Link } from 'react-router-dom'
import { Clock, MapPin, ArrowRight } from 'lucide-react'
import { events } from '../../data/mockData.js'
import eventPhoto from '../../Assets/photos/IMG_9585.JPG'

const tagColors = {
  Worship:    'bg-blue-100 text-blue-700',
  Youth:      'bg-purple-100 text-purple-700',
  Women:      'bg-pink-100 text-pink-700',
  Men:        'bg-indigo-100 text-indigo-700',
  Prayer:     'bg-amber-100 text-amber-700',
  Membership: 'bg-green-100 text-green-700',
}

function EventCard({ event }) {
  const dateObj = new Date(event.date)
  const month = dateObj.toLocaleString('en', { month: 'short' }).toUpperCase()
  const day   = dateObj.getDate()
  const colorClass = tagColors[event.category] ?? 'bg-gray-100 text-gray-700'
  const hasImage = !!event.imageUrl

  return (
    <div className="card overflow-hidden flex flex-col">
      {/* Flyer image */}
      {hasImage && (
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${colorClass}`}>
            {event.category}
          </span>
          <div className="absolute top-3 right-3 bg-primary-700 text-white rounded-xl text-center px-2 py-1 min-w-[40px]">
            <p className="text-[9px] font-bold tracking-wider">{month}</p>
            <p className="font-bold text-base leading-none">{day}</p>
          </div>
        </div>
      )}

      <div className={`flex gap-4 ${hasImage ? 'p-4' : 'p-5'}`}>
        {/* Date badge — only shown when no image */}
        {!hasImage && (
          <div className="shrink-0 w-14 text-center">
            <div className="bg-primary-700 text-white rounded-t-xl py-1.5">
              <p className="text-[10px] font-bold tracking-wider">{month}</p>
            </div>
            <div className="bg-primary-50 rounded-b-xl py-2">
              <p className="text-primary-700 font-bold text-xl leading-none">{day}</p>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="flex-1 min-w-0">
          {!hasImage && (
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-gray-800 text-sm leading-snug">{event.title}</h3>
              <span className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${colorClass}`}>
                {event.category}
              </span>
            </div>
          )}
          {hasImage && (
            <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-2">{event.title}</h3>
          )}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400">
            <span className="flex items-center gap-1"><Clock size={11} /> {event.time}</span>
            <span className="flex items-center gap-1"><MapPin size={11} /> {event.location}</span>
          </div>
          {event.rsvp && (
            <Link
              to="/events"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary-700 hover:text-gold-500 transition-colors"
            >
              RSVP <ArrowRight size={12} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default function UpcomingEventsPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_600px] gap-10 items-start">

          {/* Left — header + event cards */}
          <div>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-gold-500 text-xs font-bold tracking-widest uppercase">What's Happening</span>
                <h2 className="section-heading mt-2">Upcoming Events</h2>
              </div>
              <Link to="/events" className="flex items-center gap-1 text-primary-700 text-sm font-semibold hover:text-gold-500 transition-colors">
                View Calendar <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {events.slice(0, 6).map(ev => <EventCard key={ev.id} event={ev} />)}
            </div>
          </div>

          {/* Right — photo */}
          <div className="mt-8 lg:mt-0 rounded-3xl overflow-hidden shadow-2xl lg:sticky lg:top-24">
            <img
              src={eventPhoto}
              alt="Church gathering"
              className="w-full object-cover h-56 sm:h-72 lg:h-[640px]"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
