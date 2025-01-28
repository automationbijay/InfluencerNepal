import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const TiktokIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="h-5 w-5"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#success-stories" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.termsfeed.com/live/328a69f8-bde7-49a8-8351-f332d16c4bd2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a 
                  href="https://www.termsfeed.com/live/328a69f8-bde7-49a8-8351-f332d16c4bd2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <a href="tel:9840052198" className="hover:text-white transition-colors">
                  9840052198
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <a href="mailto:Influencersnepal.np@gmail.com" className="hover:text-white transition-colors">
                  Influencersnepal.np@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Gyaneshowr, Kathmandu,<br />Bagmati, Nepal</span>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.facebook.com/profile.php?id=61572455916555" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a 
                href="https://www.tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <TiktokIcon />
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Youtube className="h-5 w-5 text-gray-300 hover:text-white" />
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
