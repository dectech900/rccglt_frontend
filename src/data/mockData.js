export const sermons = [
  { id: 1,  title: 'The Power of Prayer',            speaker: 'Pastor Soji Haastrup',   date: '2026-06-01', series: 'Foundations of Faith',  duration: '52 min', views: 1240, thumb: null, videoUrl: 'https://www.youtube.com/watch?v=Ji-Decsax3U&t=7s' },
  { id: 2,  title: 'Faith Over Fear',                speaker: 'Pastor Sarah Okonkwo',  date: '2026-05-25', series: 'Walking in Victory',     duration: '48 min', views: 980,  thumb: null, videoUrl: null },
  { id: 3,  title: 'Building on the Rock',           speaker: 'Pastor David Mensah',   date: '2026-05-18', series: 'Foundations of Faith',  duration: '55 min', views: 870,  thumb: null, videoUrl: null },
  { id: 4,  title: 'The Grace of Giving',            speaker: 'Pastor Soji Haastrup',   date: '2026-05-11', series: 'Kingdom Finances',       duration: '44 min', views: 760,  thumb: null, videoUrl: null },
  { id: 5,  title: 'Dwelling in His Presence',       speaker: 'Pastor Esther Taiwo',   date: '2026-05-04', series: 'Intimacy with God',      duration: '61 min', views: 1100, thumb: null, videoUrl: null },
  { id: 6,  title: 'Raised to New Life',             speaker: 'Pastor David Mensah',   date: '2026-04-27', series: 'Walking in Victory',     duration: '50 min', views: 920,  thumb: null, videoUrl: null },
]

export const events = [
  { id: 1, title: 'Sunday Morning Service',   date: '2026-06-08', time: '10:30 AM', location: 'Main Auditorium',     category: 'Worship',    capacity: null,  rsvp: false, imageUrl: '' },
  { id: 2, title: 'Youth Conference 2026',    date: '2026-06-14', time: '9:00 AM',  location: 'Conference Centre',   category: 'Youth',      capacity: 500,   rsvp: true,  imageUrl: '' },
  { id: 3, title: "Women's Retreat",          date: '2026-06-20', time: '8:00 AM',  location: 'Lakeside Venue',      category: 'Women',      capacity: 200,   rsvp: true,  imageUrl: '' },
  { id: 4, title: "Men's Fellowship Night",   date: '2026-06-27', time: '7:00 PM',  location: 'Fellowship Hall',     category: 'Men',        capacity: 150,   rsvp: true,  imageUrl: '' },
  { id: 5, title: 'Midweek Prayer Meeting',   date: '2026-06-11', time: '6:30 PM',  location: 'Prayer Chapel',       category: 'Prayer',     capacity: null,  rsvp: false, imageUrl: '' },
  { id: 6, title: 'New Members Orientation',  date: '2026-06-15', time: '2:00 PM',  location: 'Room 101',            category: 'Membership', capacity: 40,    rsvp: true,  imageUrl: '' },
]

export const groups = [
  { id: 1, name: 'Young Adults Cell',           leader: 'Bro. Emmanuel Ojo',   day: 'Thursdays', time: '7 PM', area: 'Victoria Island',  members: 22, interest: 'Young Adults' },
  { id: 2, name: 'Married Couples Fellowship',  leader: 'Ptr. & Mrs. Adeyemi', day: 'Saturdays', time: '5 PM', area: 'Lekki',            members: 18, interest: 'Marriage' },
  { id: 3, name: 'Singles Ministry',            leader: 'Sis. Chioma Eze',     day: 'Fridays',   time: '6 PM', area: 'Ikeja',            members: 35, interest: 'Singles' },
  { id: 4, name: 'Senior Saints Group',         leader: 'Elder Bello',         day: 'Tuesdays',  time: '4 PM', area: 'Yaba',             members: 14, interest: 'Seniors' },
  { id: 5, name: 'Teens Zone',                  leader: 'Bro. Tolu Akinwale',  day: 'Saturdays', time: '3 PM', area: 'Victoria Island',  members: 29, interest: 'Teens' },
  { id: 6, name: 'Business Leaders Connect',    leader: 'Dr. Funke Williams',  day: 'Mondays',   time: '7 PM', area: 'Ikoyi',            members: 16, interest: 'Business' },
]

export const announcements = [
  { id: 1, title: 'Youth Conference Registration Open',   body: 'Register now for our annual Youth Conference from June 14–16. Limited slots!',           date: '2026-06-01', tag: 'Youth',      imageUrl: '' },
  { id: 2, title: 'New Members Class — June 15',          body: 'Are you new to our church? Join our New Members Orientation on June 15 at 2 PM.',         date: '2026-05-30', tag: 'New Members', imageUrl: '' },
  { id: 3, title: 'Building Fund Campaign',               body: 'We are raising funds for our new sanctuary. Your giving matters. Visit the giving page.',  date: '2026-05-28', tag: 'Giving',     imageUrl: '' },
]

export const givingStats = {
  thisMonth:  48200,
  lastMonth:  41000,
  ytd:        385000,
  memberCount: 847,
}
