'use client'
import { useState, useEffect } from 'react'

export default function Counter() {
  const [counters, setCounters] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
    satisfaction: 0
  })

  const finalValues = {
    students: 25000,
    courses: 1500,
    instructors: 350,
    satisfaction: 98
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = Object.keys(finalValues).map(key => {
      const increment = finalValues[key] / steps
      let currentValue = 0

      return setInterval(() => {
        currentValue += increment
        if (currentValue >= finalValues[key]) {
          currentValue = finalValues[key]
          clearInterval(intervals.find(interval => interval === this))
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }))
      }, stepDuration)
    })

    return () => intervals.forEach(interval => clearInterval(interval))
  }, [])

  const stats = [
    {
      number: counters.students,
      suffix: '+',
      label: 'Happy Students',
      icon: '👨‍🎓',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: counters.courses,
      suffix: '+',
      label: 'Quality Courses',
      icon: '📚',
      color: 'from-green-500 to-green-600'
    },
    {
      number: counters.instructors,
      suffix: '+',
      label: 'Expert Instructors',
      icon: '👩‍🏫',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: counters.satisfaction,
      suffix: '%',
      label: 'Satisfaction Rate',
      icon: '⭐',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-300 text-lg font-semibold uppercase tracking-wider">Our Achievements</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Trusted by Thousands of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Students Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our growing community of learners and achieve your educational goals with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-3xl">{stat.icon}</span>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold">
                  {stat.number.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-lg text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of students who have already transformed their careers with our courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors">
                View All Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}