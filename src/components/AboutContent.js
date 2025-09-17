import Link from 'next/link'

export default function AboutContent() {
  const stats = [
    { number: '25,000+', label: 'Students Enrolled' },
    { number: '500+', label: 'Courses Available' },
    { number: '100+', label: 'Expert Instructors' },
    { number: '98%', label: 'Success Rate' }
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from course content to student support.'
    },
    {
      icon: '🤝',
      title: 'Accessibility',
      description: 'Quality education should be accessible to everyone, regardless of background or location.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace new technologies and teaching methods to enhance the learning experience.'
    },
    {
      icon: '🌟',
      title: 'Community',
      description: 'We foster a supportive community where learners can grow and succeed together.'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Former education director with 15+ years of experience in online learning.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Tech innovator passionate about creating seamless learning experiences.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Content',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Curriculum expert ensuring our courses meet the highest educational standards.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Edura</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We're on a mission to make quality education accessible to everyone, everywhere. 
              Through innovative online learning experiences, we're transforming how people learn and grow.
            </p>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, Edura began with a simple belief: that everyone deserves access to 
                  high-quality education, regardless of their location or circumstances. What started as 
                  a small team of educators and technologists has grown into a global platform serving 
                  thousands of learners worldwide.
                </p>
                <p>
                  Our journey started when our founders recognized the gap between traditional education 
                  and the rapidly evolving needs of the modern workforce. We set out to create an online 
                  learning platform that combines the best of both worlds: rigorous academic content and 
                  practical, industry-relevant skills.
                </p>
                <p>
                  Today, we're proud to offer hundreds of courses across multiple disciplines, taught by 
                  industry experts and designed to help our students achieve their personal and professional goals.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Students learning online"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the learning experience we provide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Edura who are dedicated to transforming online education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed text-blue-100">
              To democratize education by providing accessible, high-quality online learning experiences 
              that empower individuals to achieve their goals and transform their lives through knowledge and skills.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of students who have already transformed their careers with Edura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Started Today
              </Link>
              <Link href="/courses" className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}