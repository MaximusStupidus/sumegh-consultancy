import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Briefcase, TrendingUp, Layers, FileText, Users, Building2, HeartPulse, ShoppingCart, GraduationCap } from "lucide-react";

const toolLogos = [
  { src: "/logos/logo-excel.png", alt: "MS Excel (Advanced Models)" },
  { src: "/logos/logo-tally.png", alt: "Tally" },
  { src: "/logos/logo-zoho.png", alt: "Zoho" },
];

const BusinessConsulting = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-sumegh-primary to-sumegh-steel-blue text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Strategic Consulting for Sustainable Business Growth</h1>
        <p className="text-lg md:text-xl mb-8">Comprehensive business consulting services to optimize operations, improve profitability, and drive sustainable growth.</p>
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
          <Accordion type="single" collapsible defaultValue="process-optimization">
            <AccordionItem value="process-optimization">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Business Process Optimization</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Workflow analysis and restructuring</li>
                  <li>Cost-efficiency improvement plans</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="financial-advisory">
            <AccordionItem value="financial-advisory">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Financial Advisory & Profitability Planning</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Budgeting, forecasting, and margin improvement</li>
                  <li>Working capital and cash flow optimization</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="project-financing">
            <AccordionItem value="project-financing">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Project Financing & Feasibility</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>DPR preparation and funding strategy</li>
                  <li>Support with bank and NBFC financing</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="startup-msme">
            <AccordionItem value="startup-msme">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Startup & MSME Strategy</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Business model validation and market positioning</li>
                  <li>Government scheme advisory and registration support</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="compliance-risk">
            <AccordionItem value="compliance-risk">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Compliance & Risk Management</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Legal, tax, and regulatory audit preparedness</li>
                  <li>Risk mitigation planning and internal control setup</li>
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
            <div className="text-gray-600">Advising MSMEs, startups, and corporates</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <FileText className="h-10 w-10 text-sumegh-secondary mb-4" />
            <div className="text-xl font-semibold mb-2">Diverse Team</div>
            <div className="text-gray-600">CA, CS, financial planners, and legal advisors</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <TrendingUp className="h-10 w-10 text-sumegh-secondary mb-4" />
            <div className="text-xl font-semibold mb-2">Banking & Audit Expertise</div>
            <div className="text-gray-600">Banking coordination, audits, and operational scaling</div>
          </div>
        </div>
      </div>
    </section>

    {/* Industries & Clients Served */}
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-sumegh-primary">Industries & Clients Served</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Layers className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>Manufacturing</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <ShoppingCart className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>Retail</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Briefcase className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>NBFCs</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <GraduationCap className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>EdTech</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <HeartPulse className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>Healthcare</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Users className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>Consumer Goods & Startups</span>
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

export default BusinessConsulting; 