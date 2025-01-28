import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      {/* Minimalist Mountain Range Footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30 L200 10 L400 40 L600 0 L800 30 L1000 10 L1200 30 V120 H0 Z"
            className="fill-purple-100/5"
          />
          <path
            d="M0 40 L200 20 L400 50 L600 10 L800 40 L1000 20 L1200 40 V120 H0 Z"
            className="fill-indigo-100/5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">INFLUENCERS NEPAL</h3>
            <p className="text-gray-300">
              Your gateway to impactful collaborations with top Nepali brands. Join us to elevate your influence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#blogs" className="text-gray-300 hover:text-white transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-gray-300 mb-2">Tel: 01-2345678</p>
            <p className="text-gray-300 mb-4">Email: support@influencersnepal.com</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:scale-110 transition-transform">
                <Twitter className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Instagram className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center text-gray-300">
          <p>©2024 INFLUENCERS NEPAL. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
