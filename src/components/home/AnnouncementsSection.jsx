import { announcements } from '../../data/mockData.js'
import { Bell, ImageOff } from 'lucide-react'

function AnnouncementCard({ a }) {
  const hasImage = !!a.imageUrl
  const date = new Date(a.date).toLocaleDateString('en', { day: 'numeric', month: 'short' })

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
      {/* Flyer / image */}
      {hasImage ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
          <img
            src={a.imageUrl}
            alt={a.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {/* Tag overlaid on image */}
          <span className="absolute top-3 left-3 text-xs font-bold text-white uppercase tracking-wider px-3 py-1 rounded-full bg-gold-500 shadow">
            {a.tag}
          </span>
          <span className="absolute top-3 right-3 text-[10px] font-medium text-white bg-black/40 px-2 py-0.5 rounded-full">
            {date}
          </span>
        </div>
      ) : (
        /* No image — subtle placeholder band */
        <div className="h-2 bg-gradient-to-r from-gold-500 to-gold-400" />
      )}

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {!hasImage && (
          <div className="flex items-start justify-between gap-2 mb-3">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-wider bg-gold-50 px-2.5 py-1 rounded-full">
              {a.tag}
            </span>
            <span className="text-gray-300 text-xs shrink-0">{date}</span>
          </div>
        )}

        <h3 className="font-semibold text-gray-800 text-sm mb-2 leading-snug">{a.title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed flex-1">{a.body}</p>

        {hasImage && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-xs text-gray-400">{date}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function AnnouncementsSection() {
  const visible = announcements.filter(a => a.imageUrl || a.title)

  return (
    <section className="py-16 bg-cream border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,162,39,0.15)' }}>
            <Bell size={16} className="text-gold-600" />
          </div>
          <h2 className="text-xl font-serif font-semibold text-primary-700">Announcements</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {visible.map(a => <AnnouncementCard key={a.id} a={a} />)}
        </div>
      </div>
    </section>
  )
}
