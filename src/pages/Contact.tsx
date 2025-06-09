import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState, useRef } from "react";

const Contact = () => {
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      setFormError("Please fill out all required fields.");
      return;
    }
    setLoading(true);
    const formData = new FormData(form);
    try {
      const response = await fetch("https://getform.io/f/bxoyzpqa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setFormSent(true);
        setFormError("");
      } else {
        setFormError("There was a problem sending your enquiry. Please try again later.");
      }
    } catch (err) {
      setFormError("There was a problem sending your enquiry. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-sumegh-primary text-white py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="mb-4">Contact Us</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Get in touch with our team for inquiries, consultations, or to learn more about our services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Get In Touch</h2>
              <p className="mb-8 text-gray-700">
                We're here to answer your questions and discuss how we can help your business. 
                Reach out to us using the contact information below or fill out the form.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-sumegh-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-sumegh-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                    <p className="text-gray-600">F. No. 201, House-ii, B-3, Magnum Commercial Centre, Karam Pura, West Delhi, New Delhi, 110015.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sumegh-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-sumegh-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                    <p className="text-gray-600">sumeghconsultancy@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sumegh-primary/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-sumegh-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday to Saturday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              {formSent ? (
                <div className="text-center py-12">
                  <h4 className="text-xl font-semibold mb-2 text-sumegh-primary">Your enquiry has been sent.</h4>
                  <p>We will reach out to you soon.</p>
                </div>
              ) : (
                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
                  {formError && (
                    <div className="text-red-600 text-sm mb-2">{formError}</div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        className="input"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="input"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="bookkeeping">Bookkeeping</option>
                      <option value="tax_advisory">Tax Advisory</option>
                      <option value="audit_support">Audit Support</option>
                      <option value="financial_planning">Financial Planning</option>
                      <option value="company_registration">Company Registration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="input"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-sumegh-primary hover:bg-sumegh-primary/90"
                      disabled={formSent || loading}
                    >
                      {loading ? "Sending..." : "Submit"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at our Karampura office in New Delhi
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md h-[400px] bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56014.4595239865!2d77.1057085421511!3d28.662601365680768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03aa9fb305d5%3A0xe569011918751a43!2sMagnum%20House!5e0!3m2!1sen!2sin!4v1749392935006!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sumegh Consultancy Location"
            ></iframe>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Contact;
