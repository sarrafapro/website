import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "30-day free trial - No credit card required",
    "Personal onboarding and training",
    "24/7 customer support",
    "Data migration assistance"
  ];

  return (
    <section className="py-20 bg-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Transform Your Jewellery Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join hundreds of jewellery store owners who have already streamlined their operations 
          with SarrafaPro. Start your free trial today and experience the difference.
        </p>
        
        <Card className="bg-white shadow-2xl max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Get Started Today</h3>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <Check className="text-green-600 h-5 w-5" />
                  <span className="text-slate-600">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-brand-blue text-white hover:bg-brand-blue-dark text-lg px-8 py-4"
                onClick={scrollToContact}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white text-lg px-8 py-4"
                onClick={scrollToContact}
              >
                Schedule Demo
              </Button>
            </div>
            
            <p className="text-sm text-slate-500 mt-4">
              Need help getting started? Call us at 
              <a href="tel:+918448381418" className="text-brand-blue font-medium ml-1">
                +91 8448381418
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
