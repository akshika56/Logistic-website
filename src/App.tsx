import { Toaster } from "./components/ui/sonner"; // adjust paths if needed
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import GetQuote from "./pages/GetQuote";
import GetStarted from "./pages/GetStarted";
import GroundTransportation from "./pages/services/GroundTransportation";
import OceanFreight from "./pages/services/OceanFreight";
import AirCargo from "./pages/services/AirCargo";
import Warehousing from "./pages/services/Warehousing";
import SupplyChain from "./pages/services/SupplyChain";
import LogisticsAnalytics from "./pages/services/LogisticsAnalytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="get-quote" element={<GetQuote />} />
            <Route path="get-started" element={<GetStarted />} />
            <Route path="services/ground-transportation" element={<GroundTransportation />} />
            <Route path="services/ocean-freight" element={<OceanFreight />} />
            <Route path="services/air-cargo" element={<AirCargo />} />
            <Route path="services/warehousing" element={<Warehousing />} />
            <Route path="services/supply-chain" element={<SupplyChain />} />
            <Route path="services/logistics-analytics" element={<LogisticsAnalytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
