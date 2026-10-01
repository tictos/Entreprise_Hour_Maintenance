import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompanyProfile } from './components/CompanyProfile';
import { ServicesBento } from './components/ServicesBento';
import { InteractiveAuditSimulator } from './components/InteractiveAuditSimulator';
import { EngineeringProcess } from './components/EngineeringProcess';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ScheduleAndLocation } from './components/ScheduleAndLocation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [prefilledMessage, setPrefilledMessage] = useState<string | undefined>();

  const handleOpenQuoteModal = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setPrefilledMessage(undefined);
    setQuoteModalOpen(true);
  };

  const handleQuoteFromSimulator = (configSummary: string) => {
    setPrefilledMessage(configSummary);
    setQuoteModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('expertises');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenQuoteModal={() => handleOpenQuoteModal()} 
          onExploreServices={handleExploreServices}
        />

        {/* Company Vision & Mission Section */}
        <CompanyProfile />

        {/* Core Services Bento Grid */}
        <ServicesBento 
          onSelectServiceForQuote={(serviceId) => handleOpenQuoteModal(serviceId)} 
        />

        {/* Interactive Audit & Mobilization Simulator */}
        <InteractiveAuditSimulator 
          onQuoteWithConfig={handleQuoteFromSimulator} 
        />

        {/* 4-Step Engineering Protocol */}
        <EngineeringProcess />

        {/* Case Studies & Realisations */}
        <ProjectsShowcase />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Opening Hours & Conakry Location */}
        <ScheduleAndLocation />

        {/* Contact & Quotation Section */}
        <ContactSection 
          initialServiceId={selectedServiceId}
          prefilledMessage={prefilledMessage}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultServiceId={selectedServiceId}
        defaultMessage={prefilledMessage}
      />

      {/* Floating Emergency / WhatsApp Quick Access */}
      <aside aria-label="Assistance rapide" className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href="tel:+224623709838"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-750 shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 group"
          title="Appel d'urgence 24/7 Conakry"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-mono hidden sm:inline">(+224) 623 70 98 38</span>
          <span className="sm:hidden">Urgence 24/7</span>
        </a>
      </aside>
    </div>
  );
}
