import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Historia from "./pages/Historia";
import Servicios from "./pages/Servicios";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Agregamos el basename para que funcione en la subcarpeta de GitHub */}
      <BrowserRouter basename="/tallermecanicoRamirez">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;