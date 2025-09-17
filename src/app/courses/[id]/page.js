import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CourseDetail from '@/components/CourseDetail'

export const metadata = {
  title: 'Course Details - Edura',
  description: 'Learn more about this course and start your learning journey.',
}

export default function CourseDetailPage({ params }) {
  return (
    <div className="min-h-screen">
      <Header />
      <CourseDetail courseId={params.id} />
      <Footer />
    </div>
  )
}