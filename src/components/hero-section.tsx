import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Scale, Users, MessageCircle } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Desktop Accounting for 
              <span className="text-brand-blue"> Jewellery Businesses</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Lightning-fast desktop application with revolutionary voice input and handwriting recognition. 
              Speak or write your transactions naturally, send WhatsApp directly from the app, and keep your 
              sensitive business data secure on your device - designed specifically for Indian jewellery SMBs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-brand-blue text-white hover:bg-brand-blue-dark text-lg px-8 py-4"
                onClick={scrollToContact}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white text-lg px-8 py-4"
                onClick={scrollToContact}
              >
                Start Free Trial
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">500+</div>
                <div className="text-sm text-slate-600">Jewellery Stores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">99.9%</div>
                <div className="text-sm text-slate-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">24/7</div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="bg-white shadow-2xl border">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full ml-2"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full ml-2"></div>
                  <div className="ml-4 text-sm text-slate-500">SarrafaPro Dashboard</div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Welcome to SarrafaPro</h3>
                  <p className="text-slate-600">Manage your jewellery business efficiently</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <BarChart3 className="text-brand-blue h-8 w-8 mb-2" />
                    <h4 className="font-semibold text-slate-800">Daily Entry</h4>
                    <p className="text-sm text-slate-600">Quick transactions</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <Scale className="text-brand-amber h-8 w-8 mb-2" />
                    <h4 className="font-semibold text-slate-800">Party Balance</h4>
                    <p className="text-sm text-slate-600">Track balances</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <Users className="text-green-600 h-8 w-8 mb-2" />
                    <h4 className="font-semibold text-slate-800">Karigar Lots</h4>
                    <p className="text-sm text-slate-600">Manage workers</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <MessageCircle className="text-green-500 h-8 w-8 mb-2" />
                    <h4 className="font-semibold text-slate-800">WhatsApp</h4>
                    <p className="text-sm text-slate-600">Instant messages</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
