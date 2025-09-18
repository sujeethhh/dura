import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service - Edura',
  description: 'Read our terms of service and understand your rights and responsibilities.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: March 15, 2024</p>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Edura&apos;s services, you accept and agree to be bound by the 
                terms and provision of this agreement.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily access the materials on Edura&apos;s website for 
                personal, non-commercial transitory viewing only.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Accounts</h2>
              <p className="text-gray-700 mb-4">
                You are responsible for maintaining the confidentiality of your account and password 
                and for restricting access to your computer.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Course Access</h2>
              <p className="text-gray-700 mb-4">
                Upon enrollment and payment, you will receive lifetime access to the course materials, 
                subject to these terms of service.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refund Policy</h2>
              <p className="text-gray-700 mb-4">
                We offer a 30-day money-back guarantee for all courses. Refund requests must be 
                submitted within 30 days of purchase.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us at legal@edura.com.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}