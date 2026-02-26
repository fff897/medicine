import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Change BrowserRouter to HashRouter
import { HashRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HairlossReg from "./pages/Survey/Hairloss_reg";
import SexualReg from "./pages/Survey/SexualHealth_reg";
import WeightlossReg from "./pages/Survey/Weightloss_reg";
import BodyHealthReg from "./pages/Survey/BodyHealth_reg";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* 1. Switched to HashRouter. 
          2. Removed 'basename' as HashRouter handles the repo path automatically.
      */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Survey Routes */}
          <Route path="/Survey/Hairloss_reg" element={<HairlossReg />} />
          <Route path="/Survey/SexualHealth_reg" element={<SexualReg />} /> 
          <Route path="/Survey/Weightloss_reg" element={<WeightlossReg />} />
          <Route path="/Survey/BodyHealth_reg" element={<BodyHealthReg />} />
          
          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
