import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Book, FileText, FileSearch, ChartBar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sumegh-primary to-sumegh-primary/80 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Empowering Financial Clarity</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Your trusted partner for comprehensive financial consulting solutions. 
            With over 25 years of experience, we deliver expert services tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://calendly.com/sumeghconsultancy/30min" 
              className="btn-secondary inline-block"
              target="_blank" rel="noopener noreferrer"
            >
              Book a Consultation
            </a>
            <Link to="/services" className="btn-outline bg-white/10 text-white border-white">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive financial solutions to help your business thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Bookkeeping"
              description="Comprehensive bookkeeping services to maintain accurate financial records for your business."
              icon={Book}
              link="/services"
            />
            <ServiceCard
              title="Tax Advisory"
              description="Expert tax planning and compliance services for individuals and businesses."
              icon={FileText}
              link="/services"
            />
            <ServiceCard
              title="Audit Support"
              description="Professional assistance for Bank of India, Punjab National Bank, and Punjab and Sindh Bank audits."
              icon={FileSearch}
              link="/services"
            />
            <ServiceCard
              title="Financial Planning"
              description="Strategic financial planning services including indirect and direct taxation, project financing, and more."
              icon={ChartBar}
              link="/services"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over 25 years of experience, we provide reliable financial expertise you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sumegh-primary/10 mb-4">
                <svg className="w-6 h-6 text-sumegh-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">25+ Years Experience</h3>
              <p className="text-gray-600">
                With decades of experience, we've helped countless businesses navigate complex financial challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sumegh-primary/10 mb-4">
                <svg className="w-6 h-6 text-sumegh-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Certified Expertise</h3>
              <p className="text-gray-600">
                Our team includes CAs, Company Secretaries, Lawyers, and Insolvency Professionals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sumegh-primary/10 mb-4">
                <svg className="w-6 h-6 text-sumegh-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Regulatory Expertise</h3>
              <p className="text-gray-600">
                We stay current with evolving regulations to ensure your business remains compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it – hear what our clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Testimonial 
              quote="Sumegh Consultancy has been instrumental in helping us navigate complex financial regulations. Their expertise has saved us time and resources."
              name="Shalimar Fincap"
              company="Shalimar Fincap Pvt Ltd"
            />
            <Testimonial 
              quote="The team at Sumegh Consultancy provided invaluable guidance during our audit. Their attention to detail and deep knowledge made all the difference."
              name="Chand Capital"
              company="Chand Capital Services Pvt Ltd"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-sumegh-primary text-white py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Stay Updated</h2>
            <p className="mb-6">Subscribe to our newsletter for the latest financial insights and regulatory updates.</p>
            <form className="flex flex-col sm:flex-row gap-2 justify-center">
              <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-md text-gray-900 min-w-0 flex-1 max-w-xs" required />
              <Button type="submit" className="bg-sumegh-secondary text-sumegh-primary hover:bg-sumegh-secondary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
