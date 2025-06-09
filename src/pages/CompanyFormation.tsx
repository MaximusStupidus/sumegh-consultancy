import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Briefcase, TrendingUp, Layers, FileText, Users, Building2, Banknote, Handshake, User, Globe2, Rocket } from "lucide-react";

const CompanyFormation = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-sumegh-primary to-sumegh-steel-blue text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Start Your Business the Right Way</h1>
        <p className="text-lg md:text-xl mb-8">Complete assistance with company formation, registration, and ongoing compliance requirements for your business.</p>
        <a
          href="https://calendly.com/sumeghconsultancy/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-sumegh-secondary text-sumegh-primary font-semibold px-8 py-4 text-lg shadow-lg hover:bg-sumegh-secondary/90 transition-all">
            Book a Consultation
          </Button>
        </a>
      </div>
    </section>

    {/* What We Offer */}
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-sumegh-primary">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Accordion type="single" collapsible defaultValue="entity-selection">
            <AccordionItem value="entity-selection">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Entity Selection Guidance</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Compare and choose: Private Limited, LLP, OPC, Partnership, Sole Proprietorship</li>
                  <li>Legal and tax implications for each structure</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="registration-services">
            <AccordionItem value="registration-services">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Company Registration Services</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Name reservation, DIN & DSC generation</li>
                  <li>MCA registration, PAN, TAN, and GST setup</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="post-incorporation">
            <AccordionItem value="post-incorporation">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Post-Incorporation Compliance</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Shareholder agreements, MOA, AOA</li>
                  <li>Bank account opening assistance and startup checklists</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="annual-compliance">
            <AccordionItem value="annual-compliance">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Annual Compliance Support</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>ROC filings, board resolutions, AGM setup</li>
                  <li>Maintenance of statutory registers and filings</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="govt-scheme">
            <AccordionItem value="govt-scheme">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Government Scheme Support</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Udyam/MSME registration</li>
                  <li>DPIIT Startup India registration support</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>

    {/* Compliance & Expertise */}
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-sumegh-primary">Compliance & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <CheckCircle className="h-10 w-10 text-sumegh-secondary mb-4" />
            <div className="text-xl font-semibold mb-2">25+ Years Experience</div>
            <div className="text-gray-600">Legal and financial advisory for businesses</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <FileText className="h-10 w-10 text-sumegh-secondary mb-4" />
            <div className="text-xl font-semibold mb-2">Certified Experts</div>
            <div className="text-gray-600">CAs, Company Secretaries, and Legal Experts</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <TrendingUp className="h-10 w-10 text-sumegh-secondary mb-4" />
            <div className="text-xl font-semibold mb-2">360° Support</div>
            <div className="text-gray-600">For startups, SMEs, and corporates</div>
          </div>
        </div>
      </div>
    </section>

    {/* Industries & Clients Served */}
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-sumegh-primary">Industries & Clients Served</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Rocket className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>Startups</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Layers className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>MSMEs</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Globe2 className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>NGOs</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Briefcase className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>Trading Firms</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Handshake className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>Consulting Agencies</span>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA Section */}
    <section className="py-16 px-4 bg-sumegh-primary text-white">
      <div className="container mx-auto max-w-3xl text-center">
        <a
          href="https://calendly.com/sumeghconsultancy/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-white text-sumegh-primary font-semibold px-8 py-4 text-lg shadow-lg hover:bg-sumegh-secondary hover:text-white transition-all">
            Book a Consultation
          </Button>
        </a>
      </div>
    </section>
    <Footer />
  </div>
);

export default CompanyFormation; 