export default function Features() {
  const features = [
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience."
    },
    {
      icon: "📱",
      title: "Mobile Learning",
      description: "Access your courses anywhere, anytime with our platform."
    },
    {
      icon: "🏆",
      title: "Certificates",
      description: "Earn recognized certificates upon course completion."
    },
    {
      icon: "💬",
      title: "Community Support",
      description: "Join a vibrant community of learners and get help."
    }
  ]

  return (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Edura
        </h2>
        <p className="text-xl gap-y-4 ">
          We provide the best learning experience with modern teaching methods and expert guidance.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

}