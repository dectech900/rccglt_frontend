const BASE = '/api'

async function request(path, options = {}) {
  const token = JSON.parse(localStorage.getItem('rccg-auth') ?? '{}')?.state?.user?.token
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...options,
  })
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  return res.json()
}

export const api = {
  sermons:  { list: (q) => request(`/sermons?${new URLSearchParams(q)}`),   get: (id) => request(`/sermons/${id}`) },
  events:   { list: (q) => request(`/events?${new URLSearchParams(q)}`),    rsvp: (id, data) => request(`/events/${id}/rsvp`, { method: 'POST', body: JSON.stringify(data) }) },
  giving:   { charge: (data) => request('/giving/charge', { method: 'POST', body: JSON.stringify(data) }),  history: () => request('/giving/history') },
  groups:   { list: () => request('/groups'),   join: (id) => request(`/groups/${id}/join`, { method: 'POST' }) },
  members:  { profile: () => request('/members/me'),  update: (data) => request('/members/me', { method: 'PATCH', body: JSON.stringify(data) }) },
  auth:     { login: (d) => request('/auth/login', { method: 'POST', body: JSON.stringify(d) }),  register: (d) => request('/auth/register', { method: 'POST', body: JSON.stringify(d) }) },
}
