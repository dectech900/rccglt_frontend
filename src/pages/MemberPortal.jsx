import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Heart, Users, BookOpen, Calendar, Settings, LogOut, Download, Edit } from 'lucide-react'
import { useAuth } from '../hooks/useAuth.js'

const TABS = [
  { id: 'overview',  label: 'Overview',       icon: User },
  { id: 'giving',    label: 'Giving History',  icon: Heart },
  { id: 'groups',    label: 'My Groups',       icon: Users },
  { id: 'sermons',   label: 'Saved Sermons',   icon: BookOpen },
  { id: 'events',    label: 'My RSVPs',        icon: Calendar },
  { id: 'settings',  label: 'Settings',        icon: Settings },
]

const mockGiving = [
  { date: '2026-06-01', fund: 'Tithe',           amount: 5000 },
  { date: '2026-05-25', fund: 'General Offering', amount: 1000 },
  { date: '2026-05-11', fund: 'Building Fund',    amount: 2500 },
  { date: '2026-04-27', fund: 'Tithe',            amount: 5000 },
]

export default function MemberPortal() {
  const [tab, setTab] = useState('overview')
  const { user, signOut } = useAuth()

  if (!user) {
    return (
      <div className="pt-20 min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-5">
            <User size={28} className="text-primary-700" />
          </div>
          <h2 className="font-serif text-xl font-bold text-gray-800 mb-2">Member Area</h2>
          <p className="text-gray-500 text-sm mb-6">Please log in to access your member portal.</p>
          <Link to="/login" className="btn-primary">Sign In</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-cream">
      {/* Profile banner */}
      <div className="bg-gradient-to-br from-primary-800 to-primary-900 py-12 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center text-black font-bold text-2xl shrink-0">
            {user.name?.split(' ').map(n => n[0]).join('').slice(0, 2) ?? 'MB'}
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold">{user.name}</h1>
            <p className="text-white/60 text-sm">{user.email}</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs bg-gold-500/20 text-gold-300 px-3 py-0.5 rounded-full font-medium capitalize">{user.role}</span>
              <span className="text-xs text-white/40">Member since {user.joinedAt}</span>
            </div>
          </div>
          <div className="ml-auto flex gap-2">
            <button className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
              <Edit size={16} />
            </button>
            <button onClick={signOut} className="p-2.5 rounded-xl bg-white/10 hover:bg-red-500/30 transition-colors">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar tabs */}
          <aside className="lg:w-56 shrink-0">
            <nav className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 space-y-1">
              {TABS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    tab === id ? 'bg-primary-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={15} /> {label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Tab content */}
          <main className="flex-1">
            {tab === 'overview' && (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {[
                  { label: 'Total Giving (YTD)', value: '$13,500', sub: 'This year', color: 'text-green-600' },
                  { label: 'Connect Groups',      value: '1',         sub: 'Active membership', color: 'text-blue-600' },
                  { label: 'Sermons Watched',     value: '24',        sub: 'This year', color: 'text-purple-600' },
                  { label: 'Events Attended',     value: '8',         sub: 'This year', color: 'text-orange-600' },
                  { label: 'Prayer Requests',     value: '3',         sub: 'Active', color: 'text-red-600' },
                  { label: 'Volunteer Hours',     value: '12',        sub: 'This month', color: 'text-teal-600' },
                ].map(s => (
                  <div key={s.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <p className="text-gray-400 text-xs mb-2">{s.label}</p>
                    <p className={`font-bold text-3xl mb-1 ${s.color}`}>{s.value}</p>
                    <p className="text-gray-400 text-xs">{s.sub}</p>
                  </div>
                ))}
              </div>
            )}

            {tab === 'giving' && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-semibold text-gray-800">Giving History</h2>
                  <button className="flex items-center gap-1.5 text-xs text-primary-700 font-semibold hover:text-gold-500 transition-colors">
                    <Download size={13} /> Download Statement
                  </button>
                </div>
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-gray-400 text-xs">
                    <tr>
                      <th className="text-left px-6 py-3 font-medium">Date</th>
                      <th className="text-left px-6 py-3 font-medium">Fund</th>
                      <th className="text-right px-6 py-3 font-medium">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {mockGiving.map((g, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600">{new Date(g.date).toLocaleDateString('en',{day:'numeric',month:'short',year:'numeric'})}</td>
                        <td className="px-6 py-4 text-gray-800 font-medium">{g.fund}</td>
                        <td className="px-6 py-4 text-right font-semibold text-green-600">${g.amount.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {tab === 'groups' && (
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="font-semibold text-gray-800 mb-6">My Connect Groups</h2>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="w-12 h-12 rounded-xl bg-primary-700 flex items-center justify-center">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Young Adults Cell</p>
                    <p className="text-xs text-gray-400">Thursdays at 7 PM · Victoria Island</p>
                  </div>
                  <span className="ml-auto text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Active</span>
                </div>
                <Link to="/connect" className="mt-4 block text-center text-sm text-primary-700 font-semibold hover:text-gold-500 transition-colors">
                  Find More Groups →
                </Link>
              </div>
            )}

            {(tab === 'sermons' || tab === 'events' || tab === 'settings') && (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
                <p className="text-gray-400 text-sm">This section is coming soon.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
