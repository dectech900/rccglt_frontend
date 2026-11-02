import { useState } from 'react'
import { Play, Download, Share2, Search, Clock, User, Eye } from 'lucide-react'
import { sermons } from '../data/mockData.js'

const SERIES = ['All Series', 'Foundations of Faith', 'Walking in Victory', 'Kingdom Finances', 'Intimacy with God']

function getYouTubeId(url) {
  if (!url) return null
  const m = url.match(/[?&]v=([^&]+)/)
  return m ? m[1] : null
}

function getYouTubeStart(url) {
  if (!url) return 0
  const m = url.match(/[?&]t=(\d+)/)
  return m ? parseInt(m[1]) : 0
}

function SermonCard({ sermon }) {
  const [playing, setPlaying] = useState(false)
  const videoId = getYouTubeId(sermon.videoUrl)
  const start   = getYouTubeStart(sermon.videoUrl)

  return (
    <div className="card overflow-hidden">
      {/* Thumbnail / Player */}
      <div
        className="aspect-video relative bg-gradient-to-br from-primary-800 to-primary-900"
        onClick={() => videoId && !playing && setPlaying(true)}
        style={{ cursor: videoId && !playing ? 'pointer' : 'default' }}
      >
        {videoId && playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?start=${start}&autoplay=1`}
            title={sermon.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : videoId ? (
          <>
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={sermon.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                <Play size={24} className="ml-1.5 text-black" />
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gold-500/40 flex items-center justify-center">
              <Play size={24} className="ml-1.5 text-white/60" />
            </div>
          </div>
        )}
        {!playing && (
          <>
            <div className="absolute top-3 right-3">
              <span className="bg-black/50 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                <Clock size={10} /> {sermon.duration}
              </span>
            </div>
            <div className="absolute bottom-3 left-3">
              <span className="bg-gold-500/90 text-black text-xs font-semibold px-2.5 py-1 rounded-full">{sermon.series}</span>
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-serif font-semibold text-gray-800 text-base mb-2 leading-snug">{sermon.title}</h3>
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
          <span className="flex items-center gap-1"><User size={11} /> {sermon.speaker}</span>
          <span className="flex items-center gap-1"><Eye size={11} /> {sermon.views.toLocaleString()} views</span>
        </div>
        <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
          <button
            onClick={() => videoId && setPlaying(true)}
            disabled={!videoId}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-primary-700 text-white text-xs font-semibold hover:bg-primary-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Play size={13} /> {videoId ? 'Play' : 'Coming Soon'}
          </button>
          <button className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors">
            <Download size={14} />
          </button>
          <button className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors">
            <Share2 size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Sermons() {
  const [query,  setQuery]  = useState('')
  const [series, setSeries] = useState('All Series')

  const filtered = sermons.filter(s =>
    (series === 'All Series' || s.series === series) &&
    (s.title.toLowerCase().includes(query.toLowerCase()) || s.speaker.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <div className="pt-20 min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-primary-800 py-16 text-center text-white">
        <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-3">Media Library</p>
        <h1 className="text-4xl font-serif font-bold mb-3">Sermons</h1>
        <p className="text-white/55 text-sm max-w-md mx-auto">
          Listen, watch, and download messages that strengthen your faith and transform your walk with God.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search sermons, speakers..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-primary-400 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {SERIES.map(s => (
              <button
                key={s}
                onClick={() => setSeries(s)}
                className={`shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  series === s ? 'bg-primary-700 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(s => <SermonCard key={s.id} sermon={s} />)}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg mb-2">No sermons found</p>
            <p className="text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
