import { useState } from 'react'
import { Users, Clock, MapPin, Check, Search } from 'lucide-react'
import { groups } from '../data/mockData.js'

const INTERESTS = ['All', 'Young Adults', 'Marriage', 'Singles', 'Seniors', 'Teens', 'Business']

function GroupCard({ group }) {
  const [joined, setJoined] = useState(false)

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
          <Users size={22} className="text-white" />
        </div>
        <span className="text-xs font-semibold bg-gold-50 text-gold-600 px-3 py-1 rounded-full">{group.interest}</span>
      </div>
      <h3 className="font-serif font-semibold text-gray-800 text-base mb-1">{group.name}</h3>
      <p className="text-gray-400 text-xs mb-4">Led by {group.leader}</p>
      <div className="flex flex-col gap-1.5 text-xs text-gray-500 mb-5">
        <span className="flex items-center gap-2"><Clock size={12} /> {group.day} at {group.time}</span>
        <span className="flex items-center gap-2"><MapPin size={12} /> {group.area}</span>
        <span className="flex items-center gap-2"><Users size={12} /> {group.members} members</span>
      </div>
      <button
        onClick={() => setJoined(j => !j)}
        className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
          joined
            ? 'bg-green-100 text-green-700 border border-green-200'
            : 'bg-primary-700 text-white hover:bg-primary-800'
        }`}
      >
        {joined ? <><Check size={15} /> Joined</> : 'Request to Join'}
      </button>
    </div>
  )
}

export default function ConnectGroups() {
  const [interest, setInterest] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = groups.filter(g =>
    (interest === 'All' || g.interest === interest) &&
    g.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="pt-20 min-h-screen bg-cream">
      <div className="bg-gradient-to-br from-green-900 to-primary-900 py-16 text-center text-white">
        <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-3">Small Groups</p>
        <h1 className="text-4xl font-serif font-bold mb-3">Connect Groups</h1>
        <p className="text-white/55 text-sm max-w-md mx-auto">
          Life is better together. Find a connect group that fits your life stage and grow in faith with others.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search groups..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-primary-400"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            {INTERESTS.map(i => (
              <button
                key={i}
                onClick={() => setInterest(i)}
                className={`shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  interest === i ? 'bg-primary-700 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'
                }`}
              >
                {i}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(g => <GroupCard key={g.id} group={g} />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <Users size={40} className="mx-auto mb-3 opacity-30" />
            <p className="text-lg mb-1">No groups found</p>
            <p className="text-sm">Try a different filter or contact us to start a new group</p>
          </div>
        )}
      </div>
    </div>
  )
}
