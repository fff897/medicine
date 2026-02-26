import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1. Import your pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
//survey
import HairlossReg from "./pages/Survey/Hairloss_reg"; // Added this import
import SexualReg from "./pages/Survey/SexualHealth_reg";
import WeightlossReg from "./pages/Survey/Weightloss_reg";
import BodyHealthReg from "./pages/Survey/BodyHealth_reg";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Index />} />
          
          
          <Route path="/Survey/Hairloss_reg" element={<HairlossReg />} />
          <Route path="/Survey/SexualHealth_reg" element={<SexualReg />} /> 
          <Route path="/Survey/Weightloss_reg" element={<WeightlossReg />} />
          <Route path="/Survey/BodyHealth_reg" element={<BodyHealthReg />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;