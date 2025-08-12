import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import UsabilitySection from "@/components/usability-section";
import BenefitsSection from "@/components/benefits-section";
import MobileSection from "@/components/mobile-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <UsabilitySection />
      <BenefitsSection />
      <MobileSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
