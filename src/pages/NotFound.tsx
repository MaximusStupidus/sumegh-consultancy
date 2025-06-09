
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-sumegh-primary mb-6">404</h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8">Page Not Found</p>
          <p className="text-lg text-gray-600 max-w-md mx-auto mb-10">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="btn-primary inline-block"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
