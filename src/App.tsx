import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import ClientPortal from "./pages/ClientPortal";
import NotFound from "./pages/NotFound";
import TaxPlanning from "./pages/TaxPlanning";
import InvestmentAdvisory from "./pages/InvestmentAdvisory";
import BusinessConsulting from "./pages/BusinessConsulting";
import StartupConsulting from "./pages/StartupConsulting";
import CompanyFormation from "./pages/CompanyFormation";
import AccountingBookkeeping from "./pages/AccountingBookkeeping";
import AuditSupport from "./pages/AuditSupport";
import FinancialPlanning from "./pages/FinancialPlanning";
import CompanyRegistrationCompliance from "./pages/CompanyRegistrationCompliance";
import PayrollProcessing from "./pages/PayrollProcessing";
import RBILiasoning from "./pages/RBILiasoning";
import VirtualCFO from "./pages/VirtualCFO";
import ArbitrationMediation from "./pages/ArbitrationMediation";

const App = () => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/tax-planning" element={<TaxPlanning />} />
            <Route path="/investment-advisory" element={<InvestmentAdvisory />} />
            <Route path="/business-consulting" element={<BusinessConsulting />} />
            <Route path="/startup-consulting" element={<StartupConsulting />} />
            <Route path="/company-formation" element={<CompanyFormation />} />
            <Route path="/accounting-bookkeeping" element={<AccountingBookkeeping />} />
            <Route path="/audit-support" element={<AuditSupport />} />
            <Route path="/financial-planning" element={<FinancialPlanning />} />
            <Route path="/company-registration-compliance" element={<CompanyRegistrationCompliance />} />
            <Route path="/payroll-processing" element={<PayrollProcessing />} />
            <Route path="/rbi-liasoning" element={<RBILiasoning />} />
            <Route path="/virtual-cfo" element={<VirtualCFO />} />
            <Route path="/arbitration-mediation" element={<ArbitrationMediation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
