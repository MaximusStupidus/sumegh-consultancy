import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sumegh-lightgray to-white flex flex-col">
      <Navbar />
      <section className="section bg-gradient-to-r from-sumegh-primary via-gray-900 to-black text-white flex-1 flex items-center justify-center">
        <div className="container text-center max-w-2xl mx-auto py-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our <span className="text-sumegh-secondary">Expert Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            If you're interested in working with us, please submit your details and resume using the button below. We will review your application and reach out if you're a good fit.
          </p>
          <a
            href="https://forms.gle/jb5HtnN7nibzYte97"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sumegh-secondary text-sumegh-primary font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-sumegh-secondary/90 transition-all text-lg"
          >
            Apply Now
          </a>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Careers;
