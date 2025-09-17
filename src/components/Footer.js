import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' }
    ],
    courses: [
      { name: 'Web Development', href: '/courses/web-development' },
      { name: 'Data Science', href: '/courses/data-science' },
      { name: 'Mobile Development', href: '/courses/mobile-development' },
      { name: 'UI/UX Design', href: '/courses/design' },
      { name: 'Digital Marketing', href: '/courses/marketing' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Student Support', href: '/support' },
      { name: 'Instructor Support', href: '/instructor-support' },
      { name: 'System Status', href: '/status' },
      { name: 'Accessibility', href: '/accessibility' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Refund Policy', href: '/refund' },
      { name: 'Sitemap', href: '/sitemap' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="text-3xl font-bold text-gradient">
                Edura
              </Link>
              <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                Empowering learners worldwide with high-quality online education. 
                Join thousands of students who have transformed their careers with our expert-led courses.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm">📧</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white">support@edura.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-sm">📞</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', icon: '📘', href: '#' },
                  { name: 'Twitter', icon: '🐦', href: '#' },
                  { name: 'LinkedIn', icon: '💼', href: '#' },
                  { name: 'Instagram', icon: '📷', href: '#' },
                  { name: 'YouTube', icon: '📺', href: '#' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Edura. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}