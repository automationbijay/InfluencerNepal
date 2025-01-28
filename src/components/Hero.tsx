import MinimalistShapes from './MinimalistShapes'

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-b from-white to-blue-50/50">
      <MinimalistShapes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Join Influencers Nepal:<br/>
              Empower Your Influence
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Connect with top Nepali businesses and grow your personal brand
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="https://forms.gle/noEwAYMB1KQbmVXi7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button gradient-bg text-white transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center">
                  <span>Register as Influencer</span>
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a 
                href="https://forms.gle/a5MMWkrgXHJ7fuVD7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button bg-white text-gray-800 gradient-border transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center">
                  <span>Register as Business</span>
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:block relative z-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white rounded-lg p-2">
                <img 
                  src="https://res.cloudinary.com/makegharghaderi/image/upload/v1738067875/influencer_marketing_nepal_2_rmnqiy.png"
                  alt="Influencer Marketing Nepal"
                  className="rounded-lg w-full h-auto transform transition duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
