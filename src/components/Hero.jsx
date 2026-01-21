const Hero = () => {
 return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
            Build Amazing Products Faster
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
            The ultimate platform to transform your ideas into reality. Powerful tools, seamless workflow, and endless possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold border-2 border-gray-300 hover:scale-105 hover:shadow-lg transition-all duration-300">
              Watch Demo
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div className="hover:scale-110 transition-transform">
              <p className="text-4xl font-bold text-blue-600">10K+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="hover:scale-110 transition-transform">
              <p className="text-4xl font-bold text-purple-600">50K+</p>
              <p className="text-gray-600">Projects Built</p>
            </div>
            <div className="hover:scale-110 transition-transform">
              <p className="text-4xl font-bold text-pink-600">99.9%</p>
              <p className="text-gray-600">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
