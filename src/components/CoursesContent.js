'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function CoursesContent() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Web Development', 'Data Science', 'Design', 'Marketing', 'Mobile Development', 'Business']

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "John Smith",
      price: "$99",
      originalPrice: "$199",
      rating: 4.8,
      students: 2500,
      duration: "40 hours",
      level: "Beginner",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      description: "Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive bootcamp."
    },
    {
      id: 2,
      title: "Advanced React & Next.js Course",
      instructor: "Sarah Johnson",
      price: "$129",
      originalPrice: "$249",
      rating: 4.9,
      students: 1800,
      duration: "35 hours",
      level: "Advanced",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      description: "Master React hooks, context, and Next.js for building modern web applications."
    },
    {
      id: 3,
      title: "Python for Data Science",
      instructor: "Mike Chen",
      price: "$89",
      originalPrice: "$179",
      rating: 4.7,
      students: 3200,
      duration: "50 hours",
      level: "Intermediate",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      description: "Learn Python, pandas, NumPy, and machine learning for data analysis."
    },
    {
      id: 4,
      title: "Digital Marketing Masterclass",
      instructor: "Emma Wilson",
      price: "$79",
      originalPrice: "$159",
      rating: 4.6,
      students: 2100,
      duration: "30 hours",
      level: "Beginner",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      description: "Master SEO, social media marketing, and digital advertising strategies."
    },
    {
      id: 5,
      title: "UI/UX Design Complete Course",
      instructor: "David Brown",
      price: "$109",
      originalPrice: "$219",
      rating: 4.8,
      students: 1600,
      duration: "45 hours",
      level: "Intermediate",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      description: "Learn user research, wireframing, prototyping, and design systems."
    },
    {
      id: 6,
      title: "Mobile App Development with Flutter",
      instructor: "Lisa Garcia",
      price: "$119",
      originalPrice: "$239",
      rating: 4.7,
      students: 1400,
      duration: "38 hours",
      level: "Intermediate",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      description: "Build cross-platform mobile apps with Flutter and Dart programming."
    },
    {
      id: 7,
      title: "Business Strategy & Leadership",
      instructor: "Robert Taylor",
      price: "$149",
      originalPrice: "$299",
      rating: 4.5,
      students: 980,
      duration: "25 hours",
      level: "Advanced",
      category: "Business",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      description: "Develop strategic thinking and leadership skills for business success."
    },
    {
      id: 8,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Anna Kim",
      price: "$139",
      originalPrice: "$279",
      rating: 4.9,
      students: 2200,
      duration: "55 hours",
      level: "Advanced",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      description: "Master machine learning algorithms, neural networks, and AI concepts."
    }
  ]

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Explore Our <span className="text-blue-600">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover hundreds of courses taught by industry experts. Learn new skills, 
              advance your career, and achieve your goals with our comprehensive online courses.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses, instructors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                {/* Course Image */}
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
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                      <span className="text-sm text-gray-500">({course.students})</span>
                    </div>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-2 text-sm">By {course.instructor}</p>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-blue-600">{course.price}</span>
                      <span className="text-sm text-gray-400 line-through">{course.originalPrice}</span>
                    </div>
                    <Link 
                      href={`/courses/${course.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0m6 0V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2.306" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're constantly adding new courses. Contact us to suggest a course or get notified when new content is available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
              <Link href="/register" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Notified
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}