import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RegisterForm from '@/components/RegisterForm'

export const metadata = {
  title: 'Sign Up - Edura',
  description: 'Create your Edura account and start your learning journey today.',
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  )
}