import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CoursesContent from '@/components/CoursesContent'

export const metadata = {
  title: 'Courses - Edura',
  description: 'Explore our comprehensive collection of online courses taught by industry experts.',
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CoursesContent />
      <Footer />
    </div>
  )
}