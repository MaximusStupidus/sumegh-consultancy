import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Building, Briefcase, User, TrendingUp, Layers, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const toolLogos = [
  { src: "/logos/logo-tally.png", alt: "Tally Prime" },
  { src: "/logos/logo-zoho.png", alt: "Zoho Books" },
  { src: "/logos/logo-cleartax.png", alt: "Cleartax" },
  { src: "/logos/logo-winman.png", alt: "Winman" },
  { src: "/logos/logo-excel.png", alt: "Excel Automation" },
];

const TaxPlanning = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-sumegh-primary to-sumegh-steel-blue text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Strategic Tax Planning That Works for You</h1>
        <p className="text-lg md:text-xl mb-8">Trusted tax advisory services across GST, ITR, TDS & more—tailored to your financial goals.</p>
        <a
          href="https://calendly.com/sumeghconsultancy/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-sumegh-secondary text-sumegh-primary font-semibold px-8 py-4 text-lg shadow-lg hover:bg-sumegh-secondary/90 transition-all">
            Book a Free Consultation
          </Button>
        </a>
      </div>
    </section>

    {/* What We Offer */}
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-sumegh-primary">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Direct Tax Services */}
          <Accordion type="single" collapsible defaultValue="direct-tax">
            <AccordionItem value="direct-tax">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Direct Tax Services</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Income Tax Return Filing (ITR-1 to ITR-7)</li>
                  <li>TDS Return Filing and Reconciliation</li>
                  <li>Tax Audit Preparation</li>
                  <li>Tax Saving Investments Advisory</li>
                  <li>Advance Tax Estimations</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* Indirect Tax Services */}
          <Accordion type="single" collapsible defaultValue="indirect-tax">
            <AccordionItem value="indirect-tax">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Indirect Tax Services</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>GST Registration & Filing (Regular & Composition)</li>
                  <li>GST Return Reconciliation (GSTR-1, GSTR-3B, GSTR-9)</li>
                  <li>GST Refund & LUT Filing</li>
                  <li>E-way Bill & Input Tax Credit (ITC) Optimization</li>
                  <li>Response to GST Notices & Scrutiny</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>

    {/* Tools & Platforms Used */}
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-sumegh-primary">Tools & Platforms Used</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
          {toolLogos.map((tool) => (
            <img
              key={tool.alt}
              src={tool.src}
              alt={tool.alt}
              className="h-14 w-auto object-contain bg-white rounded shadow p-2"
              style={{ background: "#fff" }}
            />
          ))}
        </div>
        <div className="text-center text-gray-700 text-lg">
          Real-time tax dashboards & cloud-accessible document sharing
        </div>
      </div>
    </section>

    {/* Compliance & Expertise */}
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-sumegh-primary">Compliance & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <CheckCircle className="h-10 w-10 text-sumegh-secondary mb-4" />
            <div className="text-xl font-semibold mb-2">25+ Years Experience</div>
            <div className="text-gray-600">Decades of tax advisory and compliance expertise</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <FileText className="h-10 w-10 text-sumegh-secondary mb-4" />
            <div className="text-xl font-semibold mb-2">Regulatory Support</div>
            <div className="text-gray-600">Scrutiny replies, appeals, and representation before IT & GST departments</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <TrendingUp className="h-10 w-10 text-sumegh-secondary mb-4" />
            <div className="text-xl font-semibold mb-2">Proactive Guidance</div>
            <div className="text-gray-600">Up-to-date with latest tax laws and best practices</div>
          </div>
        </div>
      </div>
    </section>

    {/* Industries We Serve */}
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-sumegh-primary">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Building className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>Startups</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Briefcase className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>SMEs</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Layers className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>NBFCs</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <TrendingUp className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>FinTechs</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <User className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>HNIs</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <FileText className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>Freelancers</span>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA Section */}
    <section className="py-16 px-4 bg-sumegh-primary text-white">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-6">Talk to a Tax Expert Today</h2>
        <a
          href="https://calendly.com/sumeghconsultancy/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-white text-sumegh-primary font-semibold px-8 py-4 text-lg shadow-lg hover:bg-sumegh-secondary hover:text-white transition-all">
            Schedule a Call
          </Button>
        </a>
      </div>
    </section>
    <Footer />
  </div>
);

export default TaxPlanning; 