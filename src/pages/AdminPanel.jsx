import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutDashboard, FileText, Mic, Calendar, Users, BarChart2,
  Settings, Plus, Search, MoreVertical, TrendingUp, Shield,
} from 'lucide-react'
import { useAuth } from '../hooks/useAuth.js'

const TABS = [
  { id: 'dashboard', label: 'Dashboard',   icon: LayoutDashboard },
  { id: 'sermons',   label: 'Sermons',     icon: Mic },
  { id: 'events',    label: 'Events',      icon: Calendar },
  { id: 'members',   label: 'Members',     icon: Users },
  { id: 'content',   label: 'Content',     icon: FileText },
  { id: 'reports',   label: 'Reports',     icon: BarChart2 },
  { id: 'settings',  label: 'Settings',    icon: Settings },
]

const stats = [
  { label: 'Total Members',    value: '847',       change: '+23 this month',    icon: Users,      color: 'from-blue-500 to-blue-700' },
  { label: 'Giving This Month',value: '$48.2K',    change: '+17% vs last month', icon: TrendingUp, color: 'from-green-500 to-emerald-700' },
  { label: 'Upcoming Events',  value: '6',         change: '3 need volunteers', icon: Calendar,   color: 'from-orange-500 to-amber-700' },
  { label: 'Sermon Plays',     value: '3,210',     change: 'Last 30 days',      icon: BarChart2,  color: 'from-purple-500 to-violet-700' },
]

const recentMembers = [
  { name: 'Adaeze Nwosu',   email: 'adaeze@email.com',   role: 'member',  joined: '2026-06-01' },
  { name: 'Tunde Bakare',   email: 'tunde@email.com',    role: 'member',  joined: '2026-05-28' },
  { name: 'Grace Osei',     email: 'grace@email.com',    role: 'leader',  joined: '2026-05-20' },
  { name: 'Samuel Adeleke', email: 'samuel@email.com',   role: 'member',  joined: '2026-05-18' },
]

const roleBadge = {
  member:  'bg-blue-100 text-blue-700',
  leader:  'bg-amber-100 text-amber-700',
  admin:   'bg-red-100 text-red-700',
}

export default function AdminPanel() {
  const [tab, setTab] = useState('dashboard')
  const { user } = useAuth()

  if (!user || user.role !== 'admin') {
    return (
      <div className="pt-20 min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <Shield size={40} className="text-red-400 mx-auto mb-4" />
          <h2 className="font-serif text-xl font-bold text-gray-800 mb-2">Access Restricted</h2>
          <p className="text-gray-500 text-sm mb-6">Admin access is required to view this page.</p>
          <Link to="/login" className="btn-primary">Sign In as Admin</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 bg-primary-900 text-white min-h-screen fixed left-0 top-16 bottom-0 overflow-y-auto">
        <div className="px-4 py-5 border-b border-white/10">
          <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Admin Panel</p>
          <p className="text-white font-semibold text-sm mt-1">{user.name}</p>
        </div>
        <nav className="p-3 space-y-0.5">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                tab === id ? 'bg-gold-500 text-black' : 'text-white/65 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon size={15} /> {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="ml-60 flex-1 p-8">
        {tab === 'dashboard' && (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-serif font-bold text-gray-800">Dashboard</h1>
                <p className="text-gray-400 text-sm mt-1">Welcome back, {user.name?.split(' ')[0]}. Here's what's happening.</p>
              </div>
              <button className="flex items-center gap-2 btn-primary text-sm">
                <Plus size={15} /> New Content
              </button>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
              {stats.map(s => (
                <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-500 text-xs font-medium">{s.label}</p>
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center`}>
                      <s.icon size={16} className="text-white" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mb-1">{s.value}</p>
                  <p className="text-xs text-green-600 font-medium">{s.change}</p>
                </div>
              ))}
            </div>

            {/* Recent Members */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-semibold text-gray-800 text-sm">Recent Members</h2>
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder="Search..." className="pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-primary-400" />
                </div>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-400 text-xs">
                  <tr>
                    <th className="text-left px-6 py-3 font-medium">Name</th>
                    <th className="text-left px-6 py-3 font-medium">Email</th>
                    <th className="text-left px-6 py-3 font-medium">Role</th>
                    <th className="text-left px-6 py-3 font-medium">Joined</th>
                    <th className="px-6 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentMembers.map(m => (
                    <tr key={m.email} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-800">{m.name}</td>
                      <td className="px-6 py-4 text-gray-500">{m.email}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${roleBadge[m.role]}`}>{m.role}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-400 text-xs">{new Date(m.joined).toLocaleDateString('en',{day:'numeric',month:'short',year:'numeric'})}</td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-gray-700"><MoreVertical size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {tab !== 'dashboard' && (
          <div className="flex items-center justify-center h-64 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="text-center text-gray-400">
              <p className="text-lg font-semibold mb-1 capitalize">{tab} Management</p>
              <p className="text-sm">Full {tab} management UI — connect to your API to power this section.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
