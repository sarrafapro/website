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
import { useEffect } from "react";

export default function Home() {
  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = "SarrafaPro - Desktop Accounting Software for Jewellery Businesses";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'SarrafaPro - Lightning-fast desktop accounting software for Indian Jewellery SMBs. Secure data on your device, works offline, no monthly fees. Download today!'
      );
    }
    
    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SarrafaPro - Desktop Accounting Software",
      "description": "Lightning-fast desktop accounting software for Indian Jewellery SMBs",
      "url": "https://www.sarrafapro.in",
      "mainEntity": {
        "@type": "SoftwareApplication",
        "name": "SarrafaPro",
        "applicationCategory": "BusinessApplication"
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      // Cleanup
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove && scriptToRemove.textContent?.includes('"name":"SarrafaPro - Desktop Accounting Software"')) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main role="main">
        <HeroSection />
        <FeaturesSection />
        <UsabilitySection />
        <BenefitsSection />
        <MobileSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
