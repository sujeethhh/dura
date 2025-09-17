'use client'
import { useState } from 'react'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Software Developer",
      company: "Tech Solutions Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Edura completely transformed my career. The courses are well-structured, and the instructors are incredibly knowledgeable. I landed my dream job just 3 months after completing the Full-Stack Development course!"
    },
    {
      name: "Maria Garcia",
      role: "UX Designer",
      company: "Creative Agency",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The UI/UX Design course exceeded my expectations. The practical projects and real-world examples helped me build a strong portfolio. I'm now working as a senior designer at a top agency."
    },
    {
      name: "John Smith",
      role: "Data Scientist",
      company: "Analytics Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The Python for Data Science course was exactly what I needed to transition into data science. The instructor's expertise and the hands-on approach made complex concepts easy to understand."
    },
    {
      name: "Sarah Wilson",
      role: "Digital Marketer",
      company: "Marketing Pro",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "I've taken several online courses before, but Edura stands out. The Digital Marketing Masterclass gave me practical skills that I immediately applied to my work. Highly recommended!"
    },
    {
      name: "Michael Brown",
      role: "Mobile Developer",
      company: "App Innovations",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The Flutter course was comprehensive and up-to-date. I built three mobile apps during the course and now I'm confident in developing cross-platform applications."
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-subtitle">Student Reviews</span>
          <h2 className="section-title">
            What Our Students
            <br />
            <span className="text-gradient">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our students have to say about their learning experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 lg:p-12 text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentSlide].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentSlide].image} 
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentSlide].role}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentSlide].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.text.substring(0, 120)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}