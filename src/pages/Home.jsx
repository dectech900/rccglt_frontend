import HeroSlider from '../components/hero/HeroSlider.jsx'
import WelcomeSection from '../components/home/WelcomeSection.jsx'
import ServiceTimes from '../components/home/ServiceTimes.jsx'
import LatestSermon from '../components/home/LatestSermon.jsx'
import UpcomingEventsPreview from '../components/home/UpcomingEventsPreview.jsx'
import AnnouncementsSection from '../components/home/AnnouncementsSection.jsx'
import QuickLinks from '../components/home/QuickLinks.jsx'
import NewsletterSignup from '../components/home/NewsletterSignup.jsx'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WelcomeSection />
      <ServiceTimes />
      <LatestSermon />
      <UpcomingEventsPreview />
      <QuickLinks />
      <AnnouncementsSection />
      <NewsletterSignup />
    </>
  )
}
