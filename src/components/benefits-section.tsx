import { Clock, Shield, IndianRupee, HardDrive } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      bgColor: "bg-brand-blue",
      title: "Lightning Fast Performance",
      description: "Desktop application runs directly on your computer with instant response times. No internet delays or slow loading - work at the speed of your business."
    },
    {
      icon: Shield,
      bgColor: "bg-green-600",
      title: "100% Data Security",
      description: "Your sensitive business data stays on your computer, never uploaded to cloud servers. Complete privacy and protection from data breaches."
    },
    {
      icon: HardDrive,
      bgColor: "bg-purple-600",
      title: "Works Offline Always",
      description: "No internet connection required for daily operations. Access all features, generate reports, and manage transactions even during internet outages."
    },
    {
      icon: IndianRupee,
      bgColor: "bg-amber-600",
      title: "Zero Monthly Fees",
      description: "One-time purchase with lifetime updates. No recurring cloud subscription costs - own your software permanently and save thousands annually."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Why Choose Desktop Over Cloud Software
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            SarrafaPro desktop application gives you complete control, security, and performance 
            that cloud-based solutions simply cannot match. Your business, your data, your device.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${benefit.bgColor} text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Business Impact</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Application Speed</span>
                    <span className="text-2xl font-bold text-green-600">10x Faster</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Data Security</span>
                    <span className="text-2xl font-bold text-blue-600">100%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Monthly Savings</span>
                    <span className="text-2xl font-bold text-amber-600">₹5,000+</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-brand-blue font-medium text-center">
                    "Desktop software gives us the speed and security that cloud solutions can't match."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
