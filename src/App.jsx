import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Sermons from './pages/Sermons.jsx'
import Events from './pages/Events.jsx'
import Giving from './pages/Giving.jsx'
import ConnectGroups from './pages/ConnectGroups.jsx'
import Livestream from './pages/Livestream.jsx'
import MemberPortal from './pages/MemberPortal.jsx'
import AdminPanel from './pages/AdminPanel.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sermons" element={<Sermons />} />
        <Route path="events" element={<Events />} />
        <Route path="giving" element={<Giving />} />
        <Route path="connect" element={<ConnectGroups />} />
        <Route path="livestream" element={<Livestream />} />
        <Route path="member" element={<MemberPortal />} />
        <Route path="admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
