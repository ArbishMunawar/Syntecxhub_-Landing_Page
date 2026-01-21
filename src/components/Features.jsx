import { Zap, Shield, Rocket, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology stack."
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee. Your data is protected with advanced encryption."
    },
    {
      icon: <Rocket className="w-12 h-12 text-pink-600" />,
      title: "Easy to Scale",
      description: "Grow without limits. Our platform scales automatically with your needs, from startup to enterprise."
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Built with Love",
      description: "Designed with care and attention to detail. Intuitive interface that your team will actually enjoy using."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, launch, and grow your product with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
