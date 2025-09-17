import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gray-50 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
              <p className="text-xl text-gray-600 mb-8">
                Sorry, we couldn't find the page you're looking for. It might have been moved, 
                deleted, or you entered the wrong URL.
              </p>
            </div>
            
            <div className="space-y-4">
              <Link 
                href="/" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Go Back Home
              </Link>
              
              <div className="text-gray-500">
                or
              </div>
              
              <Link 
                href="/courses" 
                className="inline-block border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Browse Courses
              </Link>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Popular Courses</h3>
                <p className="text-gray-600 text-sm">Explore our most popular courses and start learning today.</p>
                <Link href="/courses" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Courses →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Get Help</h3>
                <p className="text-gray-600 text-sm">Need assistance? Our support team is here to help.</p>
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Contact Us →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">About Edura</h3>
                <p className="text-gray-600 text-sm">Learn more about our mission and values.</p>
                <Link href="/about" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}