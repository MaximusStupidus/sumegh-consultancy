import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FinancialPlanning = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <section className="section bg-sumegh-primary text-white py-16">
      <div className="container text-center">
        <h1 className="text-4xl font-bold mb-4">Financial Planning</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">Strategic financial planning services to help you achieve your business and personal financial goals.</p>
        {/* Add more details here as needed */}
      </div>
    </section>
    <Footer />
  </div>
);

export default FinancialPlanning; 