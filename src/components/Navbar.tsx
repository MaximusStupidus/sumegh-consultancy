import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Users, FileText, Calculator, TrendingUp, Phone, MapPin } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Sumegh Consultancy Logo" style={{ height: 48 }} className="mr-3" />
            <span className="text-2xl font-bold bg-gradient-to-r from-sumegh-primary to-sumegh-steel-blue bg-clip-text text-transparent">Sumegh</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 text-gray-700 hover:text-sumegh-primary hover:bg-blue-50 rounded-md transition-all duration-200">
              Home
            </Link>
            
            <Link to="/about" className="px-4 py-2 text-gray-700 hover:text-sumegh-primary hover:bg-blue-50 rounded-md transition-all duration-200">
              About Us
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center px-4 py-2 text-gray-700 hover:text-sumegh-primary hover:bg-blue-50 rounded-md transition-all duration-200">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem className="flex items-center hover:bg-blue-50">
                  <Link to="/tax-planning" className="w-full">Tax Planning</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center hover:bg-blue-50">
                  <Link to="/investment-advisory" className="w-full">Investment Advisory</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center hover:bg-blue-50">
                  <Link to="/business-consulting" className="w-full">Business Consulting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center hover:bg-blue-50">
                  <Link to="/startup-consulting" className="w-full">Startup Consulting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center hover:bg-blue-50">
                  <Link to="/company-formation" className="w-full">Company Formation</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center hover:bg-blue-50">
                  <Link to="/services" className="w-full font-medium text-sumegh-primary">View All Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/careers" className="px-4 py-2 text-gray-700 hover:text-sumegh-primary hover:bg-blue-50 rounded-md transition-all duration-200">
              Careers
            </Link>

            {/* Contact Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center px-4 py-2 text-gray-700 hover:text-sumegh-primary hover:bg-blue-50 rounded-md transition-all duration-200">
                Contact <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem className="flex items-center hover:bg-blue-50">
                  <Link to="/contact" className="w-full">Get in Touch</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center hover:bg-blue-50">
                  <a href="https://calendly.com/sumeghconsultancy/30min" target="_blank" rel="noopener noreferrer" className="w-full">Book a Consultation</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/client-portal">
              <Button className="ml-4 bg-gradient-to-r from-sumegh-primary to-sumegh-steel-blue text-white hover:from-sumegh-steel-blue hover:to-sumegh-primary transition-all duration-300 shadow-md hover:shadow-lg">
                Client Portal
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-4 absolute top-20 left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="px-4 py-3 text-gray-700 hover:text-sumegh-primary hover:bg-blue-50 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-3 text-gray-700 hover:text-sumegh-primary hover:bg-blue-50 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="px-4 py-3 text-gray-700 hover:text-sumegh-primary hover:bg-blue-50 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                to="/careers" 
                className="px-4 py-3 text-gray-700 hover:text-sumegh-primary hover:bg-blue-50 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Careers
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-3 text-gray-700 hover:text-sumegh-primary hover:bg-blue-50 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                to="/client-portal" 
                className="mx-4 mt-2 bg-gradient-to-r from-sumegh-primary to-sumegh-steel-blue text-white p-3 rounded-md text-center font-medium"
                onClick={toggleMenu}
              >
                Client Portal
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
