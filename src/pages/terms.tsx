import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service - SarrafaPro";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'SarrafaPro Terms of Service - Terms and conditions for using our desktop accounting software for jewellery businesses.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main role="main" className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: August 12, 2025</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By downloading and using SarrafaPro software, you agree to these Terms of Service. 
            If you do not agree to these terms, please do not use our software.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Software License</h2>
          <p className="text-gray-700 mb-4">
            SarrafaPro grants you a non-exclusive, non-transferable license to use the software 
            for your business accounting needs. This is a one-time purchase with lifetime usage rights.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Responsibilities</h2>
          <p className="text-gray-700 mb-4">
            You are responsible for maintaining the security of your device and backing up your data. 
            While SarrafaPro stores data locally for security, we recommend regular backups.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Support</h2>
          <p className="text-gray-700 mb-4">
            We provide technical support and software updates. Support is available via email 
            at support@sarrafapro.in or phone at +91 8448381418.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            SarrafaPro is provided "as is" without warranties. We are not liable for any 
            data loss or business interruption, though we strive to provide reliable software.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            For questions about these Terms of Service, contact us at legal@sarrafapro.in 
            or call +91 8448381418.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
