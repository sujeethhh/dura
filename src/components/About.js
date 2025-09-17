import Link from 'next/link'

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="section-subtitle">About Edura</span>
              <h2 className="section-title">
                We Are Passionate About
                <br />
                <span className="text-gradient">Online Education</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Edura is a leading online learning platform that connects students with expert instructors from around the world. We believe that quality education should be accessible to everyone, everywhere.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Instructors</h3>
                  <p className="text-gray-600">Learn from industry professionals with real-world experience and proven track records.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Learning</h3>
                  <p className="text-gray-600">Study at your own pace with lifetime access to course materials and resources.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Practical Projects</h3>
                  <p className="text-gray-600">Build real-world projects and create a portfolio that showcases your skills to employers.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary text-center">
                Learn More About Us
              </Link>
              <Link href="/contact" className="btn-secondary text-center">
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🎓</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
                    <p className="text-blue-100">Connect with learners worldwide</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="text-2xl font-bold">50K+</div>
                      <div className="text-sm text-blue-100">Active Students</div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="text-2xl font-bold">1000+</div>
                      <div className="text-sm text-blue-100">Video Lessons</div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="text-2xl font-bold">200+</div>
                      <div className="text-sm text-blue-100">Expert Tutors</div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-sm text-blue-100">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}