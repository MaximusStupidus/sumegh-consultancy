
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";

const ClientPortal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is just frontend validation
    // The actual authentication will be implemented later
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }

    // Show success message for demonstration purposes
    toast({
      title: "Login Attempted",
      description: "Backend integration will be added later",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gray-50 py-16">
        <div className="container">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-sumegh-primary p-6 text-white text-center">
              <h1 className="text-2xl font-bold">Client Portal</h1>
              <p className="mt-2">Access your documents and financial information</p>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <a href="#" className="text-sm text-sumegh-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    placeholder="••••••••"
                    required
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-sumegh-primary focus:ring-sumegh-primary border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-sumegh-primary hover:bg-sumegh-primary/90"
                  >
                    Sign in
                  </Button>
                </div>
              </form>
              
              <div className="mt-6">
                <p className="text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <a href="/contact" className="text-sumegh-primary hover:underline font-medium">
                    Contact us
                  </a>{" "}
                  to set one up
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">Client Portal Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-sumegh-primary mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Document Sharing</h3>
                <p className="text-gray-600">Securely share and store important financial documents with your advisory team.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-sumegh-primary mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">View Invoices</h3>
                <p className="text-gray-600">Access your invoices and payment history in a convenient online format.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-sumegh-primary mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Financial Dashboard</h3>
                <p className="text-gray-600">View key financial metrics and performance indicators at a glance.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-sumegh-primary mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Deadline Alerts</h3>
                <p className="text-gray-600">Receive notifications for upcoming tax deadlines and important dates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default ClientPortal;
