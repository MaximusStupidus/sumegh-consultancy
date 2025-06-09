import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  const teamMembers = [
    {
      name: "Seema Jain",
      role: "CEO",
      image: "/placeholder.svg"
    },
    {
      name: "Lalita Routela",
      role: "Senior Consultant",
      image: "/placeholder.svg"
    },
    {
      name: "Vimal Parakh",
      role: "Advisor",
      qualifications: "CA",
      image: "/placeholder.svg"
    },
    {
      name: "Rajesh Parakh",
      role: "Advisor",
      qualifications: "CA",
      image: "/placeholder.svg"
    },
    {
      name: "Pragya Jain",
      role: "Legal Consultant",
      qualifications: "Lawyer",
      image: "/placeholder.svg"
    },
    {
      name: "Anu",
      role: "Company Secretary",
      qualifications: "CS",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-sumegh-primary text-white py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="mb-4">About Sumegh Consultancy</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Learn more about our story, our mission, and the dedicated team behind our services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="mb-4 text-gray-700">
                Founded over 25 years ago, Sumegh Consultancy has established itself as a trusted name in financial consulting services in India. We began with a simple mission: to help businesses navigate complex financial landscapes with clarity and confidence.
              </p>
              <p className="mb-4 text-gray-700">
                Over the years, we've expanded our services while maintaining our commitment to personalized attention and excellence. Today, we serve clients ranging from startups to established corporations, providing tailored solutions to meet their unique needs.
              </p>
              <p className="text-gray-700">
                Our diverse team of experts brings together knowledge from various financial disciplines, allowing us to offer comprehensive solutions under one roof.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/calculator.jpg" 
                alt="Calculator representing financial clarity" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that shape our approach and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-sumegh-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-sumegh-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower businesses with financial clarity through expert guidance, personalized service, and innovative solutions, enabling them to make confident decisions and achieve sustainable growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-sumegh-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-sumegh-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted financial consultancy firm, recognized for our integrity, expertise, and commitment to client success. We aim to set new standards in the industry through innovation, excellence, and positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our team of experienced professionals dedicated to your financial success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                qualifications={member.qualifications}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Certifications & Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of professional excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="inline-block bg-sumegh-primary/10 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-sumegh-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">ICAI Certified</h3>
              <p className="text-gray-600">
                Registered with the Institute of Chartered Accountants of India
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="inline-block bg-sumegh-primary/10 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-sumegh-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">MSME Registered</h3>
              <p className="text-gray-600">
                Official MSME registration for enhanced credibility
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="inline-block bg-sumegh-primary/10 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-sumegh-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Legal Expertise</h3>
              <p className="text-gray-600">
                Team includes qualified legal professionals
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="inline-block bg-sumegh-primary/10 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-sumegh-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Company Secretaries</h3>
              <p className="text-gray-600">
                Certified company secretaries on our team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Clients We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly partner with a diverse range of clients across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="inline-block bg-sumegh-primary/10 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-sumegh-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">NBFCs</h3>
              <p className="text-gray-600">
                Specialized services for Non-Banking Financial Companies
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="inline-block bg-sumegh-primary/10 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-sumegh-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Corporates</h3>
              <p className="text-gray-600">
                Comprehensive solutions for established businesses
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="inline-block bg-sumegh-primary/10 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-sumegh-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Startups</h3>
              <p className="text-gray-600">
                Tailored guidance for emerging businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default About;
