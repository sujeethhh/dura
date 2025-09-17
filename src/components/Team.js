export default function Team() {
  const instructors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Web Development Expert",
      specialization: "Full-Stack Development",
      experience: "8+ Years",
      students: "15,000+",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Prof. Michael Chen",
      role: "Data Science Instructor",
      specialization: "Machine Learning & AI",
      experience: "12+ Years",
      students: "22,000+",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Emma Rodriguez",
      role: "UX/UI Design Lead",
      specialization: "Product Design",
      experience: "6+ Years",
      students: "18,500+",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        dribbble: "#"
      }
    },
    {
      name: "David Kim",
      role: "Mobile App Developer",
      specialization: "React Native & Flutter",
      experience: "7+ Years",
      students: "12,800+",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-subtitle">Meet Our Team</span>
          <h2 className="section-title">
            Learn from Industry
            <br />
            <span className="text-gradient">Expert Instructors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our instructors are industry professionals with years of experience and a passion for teaching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Profile Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {Object.entries(instructor.social).map(([platform, link]) => (
                    <a 
                      key={platform}
                      href={link}
                      className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                    >
                      <span className="text-sm">
                        {platform === 'linkedin' && '💼'}
                        {platform === 'twitter' && '🐦'}
                        {platform === 'github' && '💻'}
                        {platform === 'dribbble' && '🎨'}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {instructor.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">{instructor.role}</p>
                  <p className="text-gray-600 text-sm">{instructor.specialization}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-medium text-gray-900">{instructor.experience}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-medium text-gray-900">{instructor.students}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="font-medium text-gray-900">{instructor.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    View Courses
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            Meet All Instructors
          </button>
        </div>
      </div>
    </section>
  )
}