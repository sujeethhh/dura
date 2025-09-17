'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function GetStartedContent() {
  const [selectedPath, setSelectedPath] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('')

  const learningPaths = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Build modern websites and web applications',
      icon: '💻',
      courses: 25,
      duration: '6-12 months',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'data-science',
      title: 'Data Science',
      description: 'Analyze data and build machine learning models',
      icon: '📊',
      courses: 18,
      duration: '8-14 months',
      skills: ['Python', 'Statistics', 'Machine Learning', 'SQL'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      description: 'Create beautiful and user-friendly interfaces',
      icon: '🎨',
      courses: 15,
      duration: '4-8 months',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      description: 'Master online marketing and grow businesses',
      icon: '📈',
      courses: 20,
      duration: '3-6 months',
      skills: ['SEO', 'Social Media', 'Analytics', 'Content Marketing'],
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      description: 'Build iOS and Android applications',
      icon: '📱',
      courses: 12,
      duration: '6-10 months',
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'business',
      title: 'Business & Leadership',
      description: 'Develop business acumen and leadership skills',
      icon: '💼',
      courses: 22,
      duration: '4-8 months',
      skills: ['Strategy', 'Leadership', 'Finance', 'Project Management'],
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const levels = [
    {
      id: 'beginner',
      title: 'Beginner',
      description: 'New to the field, starting from basics',
      icon: '🌱',
      timeCommitment: '5-10 hours/week'
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      description: 'Some experience, ready to advance',
      icon: '🚀',
      timeCommitment: '10-15 hours/week'
    },
    {
      id: 'advanced',
      title: 'Advanced',
      description: 'Experienced, seeking specialization',
      icon: '⭐',
      timeCommitment: '15-20 hours/week'
    }
  ]

  const handleGetStarted = () => {
    if (!selectedPath || !selectedLevel) {
      alert('Please select both a learning path and your current level')
      return
    }
    
    // In a real app, this would save preferences and redirect
    alert(`Great choice! You've selected ${selectedPath} at ${selectedLevel} level. Redirecting to courses...`)
    window.location.href = '/courses'
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Start Your <span className="text-blue-600">Learning Journey</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Choose your path, set your pace, and transform your career with our personalized learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the field that interests you most. Each path is carefully designed to take you from beginner to professional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {learningPaths.map((path) => (
              <div 
                key={path.id}
                onClick={() => setSelectedPath(path.id)}
                className={`cursor-pointer rounded-2xl p-8 transition-all duration-300 border-2 ${
                  selectedPath === path.id 
                    ? 'border-blue-500 bg-blue-50 shadow-lg scale-105' 
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${path.color} flex items-center justify-center text-2xl mb-6`}>
                  {path.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {path.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {path.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Courses:</span>
                    <span className="font-medium">{path.courses}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{path.duration}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {path.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {selectedPath === path.id && (
                  <div className="mt-4 flex items-center text-blue-600 font-medium">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Selected
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Level Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What's Your Current Level?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help us personalize your learning experience by selecting your current skill level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {levels.map((level) => (
              <div 
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`cursor-pointer rounded-2xl p-8 text-center transition-all duration-300 border-2 ${
                  selectedLevel === level.id 
                    ? 'border-blue-500 bg-blue-50 shadow-lg scale-105' 
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="text-4xl mb-4">{level.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {level.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {level.description}
                </p>
                <div className="text-sm text-gray-500">
                  {level.timeCommitment}
                </div>
                
                {selectedLevel === level.id && (
                  <div className="mt-4 flex items-center justify-center text-blue-600 font-medium">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Selected
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Begin?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {selectedPath && selectedLevel 
                ? `Perfect! You've chosen ${learningPaths.find(p => p.id === selectedPath)?.title} at ${levels.find(l => l.id === selectedLevel)?.title} level.`
                : 'Select your learning path and level to get personalized course recommendations.'
              }
            </p>
            
            <div className="space-y-4">
              <button
                onClick={handleGetStarted}
                disabled={!selectedPath || !selectedLevel}
                className={`w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${
                  selectedPath && selectedLevel
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Start Learning Now
              </button>
              
              <div className="text-sm text-gray-500">
                Free trial • No credit card required • Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}