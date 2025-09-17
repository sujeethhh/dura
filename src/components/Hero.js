'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      badge: "25% OFF",
      badgeText: "LEARN FROM TODAY",
      title: "Edura Leads To A",
      titleHighlight: "Brighter Future",
      description: "Education can be thought of as the transmission of the values and accumulated knowledge of a society. In this sense, it is equivalent.",
      buttonText: "GET STARTED",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=600&fit=crop&crop=face",
      bgColor: "from-slate-800 to-slate-900"
    },
    {
      id: 2,
      badge: "NEW COURSES",
      badgeText: "START LEARNING",
      title: "Master New Skills",
      titleHighlight: "With Experts",
      description: "Join thousands of students learning from industry professionals and advance your career with practical, hands-on courses.",
      buttonText: "EXPLORE COURSES",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=face",
      bgColor: "from-blue-800 to-blue-900"
    },
    {
      id: 3,
      badge: "CERTIFIED",
      badgeText: "GET CERTIFIED",
      title: "Earn Industry",
      titleHighlight: "Recognized Certificates",
      description: "Complete courses and earn certificates that are valued by employers worldwide. Boost your career prospects today.",
      buttonText: "VIEW CERTIFICATES",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
      bgColor: "from-purple-800 to-purple-900"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColor} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      </div>



      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {slides[currentSlide].badge}
                </span>
                <span className="text-blue-300 text-sm font-medium uppercase tracking-wider">
                  {slides[currentSlide].badgeText}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block">{slides[currentSlide].title}</span>
                <span className="block text-blue-400">{slides[currentSlide].titleHighlight}</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Button */}
            <div className="pt-4">
              <Link 
                href="/courses" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors space-x-2"
              >
                <span>{slides[currentSlide].buttonText}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              {/* Main circular image container */}
              <div className="relative w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-4 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-full p-4 overflow-hidden">
                    <img 
                      src={slides[currentSlide].image}
                      alt="Student"
                      className="w-full h-full object-cover rounded-full transition-all duration-1000"
                    />
                  </div>
                </div>
                
              </div>


            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {/* Dots indicator */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-500' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12  bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-opacity-20 hover:bg-opacity-90 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}