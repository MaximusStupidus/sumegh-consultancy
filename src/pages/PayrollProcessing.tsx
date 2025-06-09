import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PayrollProcessing = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <section className="section bg-sumegh-primary text-white py-16">
      <div className="container text-center">
        <h1 className="text-4xl font-bold mb-4">Payroll Processing</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">End-to-end payroll management including salary processing, PF, ESI, and compliance services.</p>
        {/* Add more details here as needed */}
      </div>
    </section>
    <Footer />
  </div>
);

export default PayrollProcessing; 