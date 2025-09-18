'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function CourseDetail({ courseId }) {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock course data - in a real app, this would come from an API
  const course = {
    id: courseId,
    title: "Complete Web Development Bootcamp",
    instructor: "John Smith",
    instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    instructorBio: "Senior Full-Stack Developer with 10+ years of experience at top tech companies.",
    price: "$99",
    originalPrice: "$199",
    rating: 4.8,
    students: 2500,
    duration: "40 hours",
    level: "Beginner",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    description: "Master web development from scratch with this comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, and more through hands-on projects.",
    whatYouWillLearn: [
      "Build responsive websites with HTML5 and CSS3",
      "Master JavaScript ES6+ and modern programming concepts",
      "Create dynamic web applications with React",
      "Develop backend APIs with Node.js and Express",
      "Work with databases using MongoDB",
      "Deploy applications to production",
      "Version control with Git and GitHub",
      "Best practices for web development"
    ],
    curriculum: [
      {
        title: "Introduction to Web Development",
        lessons: 8,
        duration: "2 hours",
        topics: ["HTML Basics", "CSS Fundamentals", "Setting up Development Environment"]
      },
      {
        title: "JavaScript Fundamentals",
        lessons: 12,
        duration: "4 hours",
        topics: ["Variables and Data Types", "Functions", "DOM Manipulation", "Events"]
      },
      {
        title: "Advanced CSS & Responsive Design",
        lessons: 10,
        duration: "3 hours",
        topics: ["Flexbox", "Grid", "Media Queries", "CSS Frameworks"]
      },
      {
        title: "React Development",
        lessons: 15,
        duration: "6 hours",
        topics: ["Components", "State Management", "Hooks", "Routing"]
      },
      {
        title: "Backend Development",
        lessons: 18,
        duration: "8 hours",
        topics: ["Node.js", "Express.js", "APIs", "Database Integration"]
      },
      {
        title: "Full-Stack Projects",
        lessons: 10,
        duration: "5 hours",
        topics: ["E-commerce Site", "Social Media App", "Portfolio Website"]
      }
    ],
    requirements: [
      "Basic computer skills",
      "No prior programming experience required",
      "A computer with internet connection",
      "Willingness to learn and practice"
    ],
    features: [
      "40 hours of on-demand video",
      "50+ coding exercises",
      "10 real-world projects",
      "Certificate of completion",
      "Lifetime access",
      "30-day money-back guarantee"
    ]
  }

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Excellent course! John explains everything clearly and the projects are really helpful.",
      date: "2 weeks ago"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Best web development course I've taken. Went from zero to building full-stack apps!",
      date: "1 month ago"
    },
    {
      name: "Emily Davis",
      rating: 4,
      comment: "Great content and structure. Would recommend to anyone starting in web development.",
      date: "3 weeks ago"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                {course.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-6">
                {course.description}
              </p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">★</span>
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-gray-400">({course.students} students)</span>
                </div>
                <div className="text-gray-400">
                  {course.duration} • {course.level}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={course.instructorImage} 
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium">Created by {course.instructor}</div>
                  <div className="text-gray-400 text-sm">{course.instructorBio}</div>
                </div>
              </div>
            </div>
            
            {/* Course Preview Card */}
            <div className="lg:col-span-1">
              <div className="bg-white text-gray-900 rounded-2xl shadow-xl overflow-hidden sticky top-8">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-blue-600">{course.price}</span>
                      <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                    </div>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                      50% OFF
                    </span>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mb-4 transition-colors">
                    Enroll Now
                  </button>
                  
                  <div className="text-center text-sm text-gray-500 mb-4">
                    30-day money-back guarantee
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">This course includes:</h4>
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'curriculum', label: 'Curriculum' },
                  { id: 'instructor', label: 'Instructor' },
                  { id: 'reviews', label: 'Reviews' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What you&apos;ll learn</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                {course.curriculum.map((section, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <div className="p-4 bg-gray-50 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-gray-900">{section.title}</h4>
                        <div className="text-sm text-gray-500">
                          {section.lessons} lessons • {section.duration}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="space-y-2">
                        {section.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center space-x-3 text-gray-700">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'instructor' && (
              <div className="space-y-6">
                <div className="flex items-start space-x-6">
                  <img 
                    src={course.instructorImage} 
                    alt={course.instructor}
                    className="w-24 h-24 rounded-full"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.instructor}</h3>
                    <p className="text-gray-600 mb-4">{course.instructorBio}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div>⭐ 4.9 Instructor Rating</div>
                      <div>👥 15,000+ Students</div>
                      <div>🎓 25 Courses</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl font-bold text-gray-900">{course.rating}</div>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <div className="text-gray-500">{course.students} reviews</div>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold">
                            {review.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium text-gray-900">{review.name}</span>
                            <div className="flex items-center">
                              {[...Array(review.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-sm">★</span>
                              ))}
                            </div>
                            <span className="text-gray-500 text-sm">{review.date}</span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


    </>
  )
}