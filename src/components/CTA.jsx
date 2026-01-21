const CTA = () => {
 return (
    <section id="pricing" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already building amazing products. Start your free trial today, no credit card required.
          </p>
          <button className="px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Start Free Trial
          </button>
          <p className="mt-4 text-white/80">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
