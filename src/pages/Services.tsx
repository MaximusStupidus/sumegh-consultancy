import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Book, FileText, FileSearch, ChartBar } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-sumegh-primary text-white py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="mb-4">Our Services</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your unique business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Comprehensive Financial Expertise</h2>
              <p className="mb-4 text-gray-700">
                At Sumegh Consultancy, we offer a wide range of financial services designed to support businesses at every stage of growth. Our experienced team provides personalized solutions tailored to your specific needs.
              </p>
              <p className="text-gray-700">
                From day-to-day accounting operations to strategic financial planning and regulatory compliance, we're your trusted partner for navigating the complex financial landscape.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/logo.png" 
                alt="Sumegh Consultancy Logo" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive suite of financial services to support your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bookkeeping */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-sumegh-primary/10 p-3 rounded-full mr-4">
                  <Book className="h-6 w-6 text-sumegh-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Accounting & Bookkeeping</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Comprehensive bookkeeping services to maintain accurate financial records for your business. We provide both direct and indirect assistance based on your needs.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="tools">
                  <AccordionTrigger>Tools & Software Used</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      We use industry-leading tools like Tally, QuickBooks, and Zoho Books to ensure accurate and efficient bookkeeping services.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="benefits">
                  <AccordionTrigger>Benefits</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Accurate financial records</li>
                      <li>Timely reporting</li>
                      <li>Reduced administrative burden</li>
                      <li>Better financial visibility</li>
                      <li>Compliance with accounting standards</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Tax Advisory */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-sumegh-primary/10 p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-sumegh-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Tax Planning & Filing</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Expert tax planning and compliance services for individuals and businesses, including GST, ITR, and TDS. We provide both direct and indirect tax compliance services.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services">
                  <AccordionTrigger>Services Include</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>TDS Compliances & Return filing</li>
                      <li>Preparation and filing of IT Returns</li>
                      <li>GST compliance and filing</li>
                      <li>Handling scrutiny processes under income tax proceedings</li>
                      <li>Responding to show cause notices (income tax and GST)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="benefits">
                  <AccordionTrigger>Benefits</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Tax optimization</li>
                      <li>Compliance with tax laws</li>
                      <li>Reduced tax audit risks</li>
                      <li>Expert handling of tax notices</li>
                      <li>Peace of mind during filing season</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Audit Support */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-sumegh-primary/10 p-3 rounded-full mr-4">
                  <FileSearch className="h-6 w-6 text-sumegh-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Audit Support</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Professional assistance for Bank of India, Punjab National Bank, Punjab and Sindh Bank audits. We also offer internal audit and risk advisory services.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services">
                  <AccordionTrigger>Key Services</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Bank audit preparation and support</li>
                      <li>Internal audit services</li>
                      <li>Risk management advisory</li>
                      <li>Compliance audit</li>
                      <li>Statutory audit assistance</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="benefits">
                  <AccordionTrigger>Benefits</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Reduced audit stress</li>
                      <li>Enhanced internal controls</li>
                      <li>Better risk management</li>
                      <li>Improved financial processes</li>
                      <li>Regulatory compliance</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Financial Planning */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-sumegh-primary/10 p-3 rounded-full mr-4">
                  <ChartBar className="h-6 w-6 text-sumegh-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Financial Planning</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Strategic financial planning services including indirect and direct taxation, project financing, corporate law consultancy, and NBFC services.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services">
                  <AccordionTrigger>Specialized Services</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Project financing</li>
                      <li>Corporate law consultancy</li>
                      <li>NBFC compliance and advisory</li>
                      <li>Financial reporting & MIS</li>
                      <li>Virtual CFO services</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="benefits">
                  <AccordionTrigger>Benefits</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Strategic financial direction</li>
                      <li>Access to expert advisors</li>
                      <li>Cost-effective financial leadership</li>
                      <li>Business growth support</li>
                      <li>Regulatory compliance</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond our core offerings, we provide specialized services to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Accounting & Bookkeeping"
              description="Comprehensive bookkeeping and accounting services to maintain accurate financial records for your business."
              icon={Book}
              link="/accounting-bookkeeping"
            />
            <ServiceCard
              title="Tax Planning & Filing"
              description="Expert tax planning and compliance services for individuals and businesses, including GST, ITR, and TDS."
              icon={FileText}
              link="/tax-planning"
            />
            <ServiceCard
              title="Audit Support"
              description="Professional assistance for statutory, internal, and bank audits, ensuring compliance and peace of mind."
              icon={FileSearch}
              link="/audit-support"
            />
            <ServiceCard
              title="Financial Planning"
              description="Strategic financial planning services to help you achieve your business and personal financial goals."
              icon={ChartBar}
              link="/financial-planning"
            />
            <ServiceCard
              title="Company Registration & Compliance"
              description="Complete assistance with company formation, registration, and ongoing compliance requirements for your business."
              icon={FileText}
              link="/company-registration-compliance"
            />
            <ServiceCard
              title="Payroll Processing"
              description="End-to-end payroll management including salary processing, PF, ESI, and compliance services."
              icon={FileText}
              link="/payroll-processing"
            />
            <ServiceCard
              title="RBI Liasoning"
              description="Specialized services for NBFCs and other entities regarding RBI compliance and requirements."
              icon={FileText}
              link="/rbi-liasoning"
            />
            <ServiceCard
              title="Startup Consulting"
              description="Tailored guidance for new businesses, from formation to financial strategy, to help startups succeed in a competitive landscape."
              icon={FileText}
              link="/startup-consulting"
            />
            <ServiceCard
              title="Virtual CFO Services"
              description="Professional financial oversight and strategic guidance without the cost of a full-time executive."
              icon={FileText}
              link="/virtual-cfo"
            />
            <ServiceCard
              title="Arbitration & Mediation"
              description="Company arbitration and mediation services to resolve business disputes efficiently and professionally."
              icon={FileText}
              link="/arbitration-mediation"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sumegh-primary text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how our services can benefit your business. 
              Our team is ready to provide personalized solutions for your financial needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/sumeghconsultancy/30min" 
                className="btn-secondary inline-block"
                target="_blank" rel="noopener noreferrer"
              >
                Book a Consultation
              </a>
              <a 
                href="/contact" 
                className="btn-outline bg-white/10 text-white border-white inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Services;
