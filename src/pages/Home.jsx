import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import CategoryMenuSection from '../components/CategoryMenuSection'
import Offers from '../components/Offers'
import Menu from '../components/Menu'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import { restaurantSchema, siteMeta } from '../seo/meta'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{siteMeta.title}</title>
        <meta name="description" content={siteMeta.description} />
        <meta name="keywords" content={siteMeta.keywords} />
        <meta name="author" content={siteMeta.author} />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={siteMeta.url} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteMeta.title} />
        <meta property="og:description" content={siteMeta.description} />
        <meta property="og:image" content={siteMeta.image} />
        <meta property="og:url" content={siteMeta.url} />

        <meta name="twitter:card" content={siteMeta.twitterCard} />
        <meta name="twitter:title" content={siteMeta.title} />
        <meta name="twitter:description" content={siteMeta.description} />
        <meta name="twitter:image" content={siteMeta.image} />

        <script type="application/ld+json">{JSON.stringify(restaurantSchema)}</script>
      </Helmet>

      <main className="relative min-h-screen bg-bg text-text selection:bg-primary/30">
        {/* Futuristic Background elements */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-secondary/10 blur-[100px] rounded-full" />
          <div className="absolute top-[30%] right-[10%] w-[20%] h-[20%] bg-primary/5 blur-[80px] rounded-full" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Highlights />
          <CategoryMenuSection />
          <Offers />
          <Menu />
          <Process />
          <Testimonials />
          <Footer />
        </div>
      </main>
    </>
  )
}

