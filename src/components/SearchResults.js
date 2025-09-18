'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function SearchResults({ query }) {
  const [searchTerm, setSearchTerm] = useState(query || '')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  // Mock search data
  const allCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "John Smith",
      price: "$99",
      rating: 4.8,
      students: 2500,
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Advanced React & Next.js Course",
      instructor: "Sarah Johnson",
      price: "$129",
      rating: 4.9,
      students: 1800,
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Python for Data Science",
      instructor: "Mike Chen",
      price: "$89",
      rating: 4.7,
      students: 3200,
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Digital Marketing Masterclass",
      instructor: "Emma Wilson",
      price: "$79",
      rating: 4.6,
      students: 2100,
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    }
  ]

  useEffect(() => {
    if (searchTerm) {
      performSearch(searchTerm)
    }
  }, [searchTerm])

  const performSearch = (term) => {
    setLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const filtered = allCourses.filter(course =>
        course.title.toLowerCase().includes(term.toLowerCase()) ||
        course.instructor.toLowerCase().includes(term.toLowerCase()) ||
        course.category.toLowerCase().includes(term.toLowerCase())
      )
      setResults(filtered)
      setLoading(false)
    }, 500)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      performSearch(searchTerm)
      // Update URL without page reload
      window.history.pushState({}, '', `/search?q=${encodeURIComponent(searchTerm)}`)
    }
  }

  return (
    <>
      {/* Search Header */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Courses</h1>
            
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for courses, instructors, topics..."
                className="w-full px-6 py-4 pl-12 pr-16 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Searching...</p>
            </div>
          ) : searchTerm ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Search Results for "{searchTerm}"
                </h2>
                <p className="text-gray-600">
                  Found {results.length} course{results.length !== 1 ? 's' : ''}
                </p>
              </div>

              {results.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {results.map((course) => (
                    <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                      <div className="relative overflow-hidden">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {course.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-400">★</span>
                            <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                            <span className="text-sm text-gray-500">({course.students})</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {course.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4">By {course.instructor}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                          <Link 
                            href={`/courses/${course.id}`}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                          >
                            View Course
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0m6 0V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2.306" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
                  <p className="text-gray-500 mb-6">
  We couldn&apos;t find any courses matching &quot;{searchTerm}&quot;. Try different keywords or browse our categories.
</p>

                  <Link 
                    href="/courses" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Browse All Courses
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Start Your Search</h3>
              <p className="text-gray-500 mb-6">
  Enter keywords above to find courses, instructors, or topics you&apos;re interested in.
</p>

              
              <div className="grid md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {['Web Development', 'Data Science', 'Design', 'Marketing'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSearchTerm(category)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>


    </>
  )
}