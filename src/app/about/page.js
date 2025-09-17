import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutContent from '@/components/AboutContent'

export const metadata = {
  title: 'About Us - Edura',
  description: 'Learn more about Edura, our mission, and our commitment to providing quality online education.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutContent />
      <Footer />
    </div>
  )
}