import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Evangelist Mavis</h3>
            <p className="text-gray-400 mb-4">
              Spreading the word of God and bringing hope to the nations through
              powerful ministry and divine teachings.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#ministry" className="text-gray-400 hover:text-white transition-colors">
                  Ministry
                </Link>
              </li>
              <li>
                <Link href="/#media" className="text-gray-400 hover:text-white transition-colors">
                  Media
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube size={24} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <p className="text-gray-400">
              Email: <a href="mailto:contact@evangelistmavis.com" className="hover:text-white transition-colors">contact@evangelistmavis.com</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            &copy; {currentYear} Evangelist Mavis Opoku Ayemang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
