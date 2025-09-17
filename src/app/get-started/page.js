import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GetStartedContent from '@/components/GetStartedContent'

export const metadata = {
  title: 'Get Started - Edura',
  description: 'Start your learning journey with Edura. Choose your path and begin transforming your career today.',
}

export default function GetStartedPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <GetStartedContent />
      <Footer />
    </div>
  )
}