import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy - SarrafaPro";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'SarrafaPro Privacy Policy - Learn how we protect your data and maintain your privacy while using our desktop accounting software.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main role="main" className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: August 12, 2025</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Collection</h2>
          <p className="text-gray-700 mb-4">
            SarrafaPro is a desktop application that stores all your data locally on your device. 
            We do not collect, store, or transmit your business data to our servers.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Local Data Storage</h2>
          <p className="text-gray-700 mb-4">
            All your accounting data, customer information, and business records remain on your computer. 
            This ensures complete privacy and security of your sensitive business information.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Website Analytics</h2>
          <p className="text-gray-700 mb-4">
            Our website may use Google Analytics to understand how visitors use our site. 
            This helps us improve our service and website experience.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at 
            support@sarrafapro.in or call +91 8448381418.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Updates to Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
