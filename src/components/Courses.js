import Link from 'next/link'

export default function Courses() {
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
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
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
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
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
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop"
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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
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
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
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
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Popular Courses
          </h2>
          <p className="text-xl text-gray-600 ">
            Choose from hundreds of courses from specialist organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
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

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-4">By {course.instructor}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
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

        <div className="text-center">
          <Link href="/courses" className="btn-primary">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  )
}