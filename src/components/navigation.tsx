import { useState } from "react";
import { Menu, X, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-brand-blue">SarrafaPro</span>
              <Gem className="text-brand-amber ml-2 h-6 w-6" />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium transition duration-150"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium transition duration-150"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('mobile')}
                className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium transition duration-150"
              >
                Mobile App
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium transition duration-150"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium transition duration-150"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-brand-blue text-white hover:bg-brand-blue-dark"
            >
              Get Free Demo
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-slate-600 hover:text-brand-blue block px-3 py-2 text-base font-medium w-full text-left"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-slate-600 hover:text-brand-blue block px-3 py-2 text-base font-medium w-full text-left"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('mobile')}
              className="text-slate-600 hover:text-brand-blue block px-3 py-2 text-base font-medium w-full text-left"
            >
              Mobile App
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-slate-600 hover:text-brand-blue block px-3 py-2 text-base font-medium w-full text-left"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-brand-blue block px-3 py-2 text-base font-medium w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
