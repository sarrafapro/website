import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog - SarrafaPro | Jewellery Business Tips & Accounting Insights";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Expert tips for jewellery business management, accounting best practices, and software insights for Indian SMBs. Stay updated with SarrafaPro blog.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main role="main" className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Jewellery Business Insights
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Expert tips, accounting best practices, and software insights for Indian jewellery SMBs.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                5 Essential Accounting Practices for Jewellery Businesses
              </h2>
              <p className="text-gray-600 mb-4">
                Learn the fundamental accounting principles every jewellery business owner should implement...
              </p>
              <span className="text-blue-600 font-medium">Coming Soon</span>
            </div>
          </article>
          
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Managing Karigar Relationships Effectively
              </h2>
              <p className="text-gray-600 mb-4">
                Best practices for tracking work orders, payments, and maintaining good relationships...
              </p>
              <span className="text-blue-600 font-medium">Coming Soon</span>
            </div>
          </article>
          
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Digital Transformation for Traditional Jewellers
              </h2>
              <p className="text-gray-600 mb-4">
                How to modernize your jewellery business operations without losing traditional values...
              </p>
              <span className="text-blue-600 font-medium">Coming Soon</span>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
