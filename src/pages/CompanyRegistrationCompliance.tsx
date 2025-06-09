import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CompanyRegistrationCompliance = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <section className="section bg-sumegh-primary text-white py-16">
      <div className="container text-center">
        <h1 className="text-4xl font-bold mb-4">Company Registration & Compliance</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">Complete assistance with company formation, registration, and ongoing compliance requirements for your business.</p>
        {/* Add more details here as needed */}
      </div>
    </section>
    <Footer />
  </div>
);

export default CompanyRegistrationCompliance; 