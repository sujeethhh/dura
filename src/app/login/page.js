import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LoginForm from '@/components/LoginForm'

export const metadata = {
  title: 'Sign In - Edura',
  description: 'Sign in to your Edura account to continue learning.',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  )
}