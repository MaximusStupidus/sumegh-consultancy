import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sumegh-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Sumegh Consultancy</h3>
            <p className="mb-4">Empowering Financial Clarity</p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-sumegh-secondary">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-sumegh-secondary">
                <span className="sr-only">X</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.53 2H21l-7.19 8.21L22 22h-6.56l-5.18-6.91L3.5 22H0l7.64-8.73L2 2h6.68l4.7 6.26L17.53 2zm-2.1 16.98h1.85l-5.26-7.02-1.85 2.01 5.26 7.01zm-7.44-13.5l4.7 6.26L6.68 5.48zm2.1 13.5l-5.26-7.01 1.85-2.01 5.26 7.02-1.85 2zm7.44-13.5l-4.7 6.26 4.7-6.26z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-sumegh-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sumegh-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sumegh-secondary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sumegh-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-sumegh-secondary transition-colors">Bookkeeping</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sumegh-secondary transition-colors">Tax Advisory</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sumegh-secondary transition-colors">Audit Support</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sumegh-secondary transition-colors">Financial Planning</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <span>F. No. 201, House-ii, B-3, Magnum Commercial Centre, Karam Pura, West Delhi, New Delhi, 110015.</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>sumeghconsultancy@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Sumegh Consultancy. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-sumegh-secondary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-sumegh-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
