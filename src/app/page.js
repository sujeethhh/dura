import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Courses from '@/components/Courses'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen space-y-20">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <Footer />
    </div>
  );
}

