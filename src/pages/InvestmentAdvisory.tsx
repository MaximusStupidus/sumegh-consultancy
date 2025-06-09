import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Briefcase, User, TrendingUp, Layers, FileText, Users, Banknote } from "lucide-react";

const toolLogos = [
  { src: "/logos/logo-valueresearch.png", alt: "Value Research" },
  { src: "/logos/logo-smallcase.png", alt: "Smallcase" },
  { src: "/logos/logo-groww.png", alt: "Groww" },
  { src: "/logos/logo-zerodha.png", alt: "Zerodha" },
  { src: "/logos/logo-excel.png", alt: "Excel Models" },
];

const InvestmentAdvisory = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-sumegh-primary to-sumegh-steel-blue text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Investing, Personalized for You</h1>
        <p className="text-lg md:text-xl mb-8">Personalized investment strategies and portfolio management to help you achieve your financial goals with confidence.</p>
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
          <Accordion type="single" collapsible defaultValue="portfolio-design">
            <AccordionItem value="portfolio-design">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Portfolio Design & Diversification</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Custom asset allocation tailored to risk appetite</li>
                  <li>Balancing equity, debt, and hybrid instruments</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="mf-sip">
            <AccordionItem value="mf-sip">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Mutual Fund & SIP Advisory</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Goal-based planning for retirement, education, etc.</li>
                  <li>Tracking and periodic rebalancing</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="tax-efficient">
            <AccordionItem value="tax-efficient">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Tax-Efficient Investment Planning</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>ELSS, tax-saving FDs, and other Section 80C options</li>
                  <li>Capital gains optimization</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="wealth-building">
            <AccordionItem value="wealth-building">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Wealth Building for HNIs</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Structured products, AIFs, REITs, PMS coordination</li>
                  <li>Intergenerational wealth planning</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="corporate-investment">
            <AccordionItem value="corporate-investment">
              <AccordionTrigger className="text-xl font-semibold text-sumegh-primary">Corporate Investment Structuring</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Treasury and surplus fund management</li>
                  <li>Short-term & long-term options for businesses</li>
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
              className={
                tool.alt === "Value Research" || tool.alt === "Smallcase"
                  ? "h-20 w-auto object-contain bg-white rounded shadow p-2"
                  : "h-14 w-auto object-contain bg-white rounded shadow p-2"
              }
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
            <div className="text-xl font-semibold mb-2">SEBI-Compliant Process</div>
            <div className="text-gray-600">Advisory process aligned with SEBI regulations</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <FileText className="h-10 w-10 text-sumegh-secondary mb-4" />
            <div className="text-xl font-semibold mb-2">Regulatory Guidance</div>
            <div className="text-gray-600">Support in regulatory filings for investment entities</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <TrendingUp className="h-10 w-10 text-sumegh-secondary mb-4" />
            <div className="text-xl font-semibold mb-2">Expert Consultants</div>
            <div className="text-gray-600">CFA, CA backgrounds with years of experience</div>
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
            <User className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>Salaried Professionals</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <TrendingUp className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>Founders</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Briefcase className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>SMEs</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Users className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>HNIs</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Banknote className="h-8 w-8 text-sumegh-primary mb-2" />
            <span>Families (Education, Retirement, Wealth Transition)</span>
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

export default InvestmentAdvisory; 