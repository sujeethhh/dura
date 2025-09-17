import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us - Edura',
  description: 'Get in touch with Edura. We\'re here to help with your learning journey.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  )
}