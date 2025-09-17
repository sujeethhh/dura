import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Skills Every Web Developer Should Master in 2024",
      excerpt: "Discover the most in-demand web development skills that will boost your career prospects and help you stay competitive in the ever-evolving tech industry.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      tags: ["JavaScript", "React", "Career"]
    },
    {
      id: 2,
      title: "The Future of Online Learning: Trends and Predictions",
      excerpt: "Explore how artificial intelligence, virtual reality, and personalized learning are reshaping the landscape of online education.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      tags: ["EdTech", "AI", "Future"]
    },
    {
      id: 3,
      title: "Building Your First Mobile App: A Beginner's Guide",
      excerpt: "Step-by-step guide to creating your first mobile application using modern frameworks and best practices for both iOS and Android.",
      author: "Lisa Garcia",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      tags: ["Mobile", "Flutter", "React Native"]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-subtitle">Latest News</span>
          <h2 className="section-title">
            Read Our Latest
            <br />
            <span className="text-gradient">Blog Posts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the world of online education and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Featured Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author and Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-semibold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">By {post.author}</span>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 group"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Get the latest articles, course updates, and exclusive offers delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn-primary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}