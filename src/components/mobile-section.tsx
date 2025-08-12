import { Eye, BookOpen, MessageCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function MobileSection() {
  const features = [
    {
      icon: Eye,
      bgColor: "bg-brand-blue",
      title: "Real-time Party Balances",
      description: "Check outstanding balances, gold weights, and payment history for any party instantly from your mobile device."
    },
    {
      icon: BookOpen,
      bgColor: "bg-green-600",
      title: "Complete Ledger Access",
      description: "View detailed transaction history, filter by date ranges, and analyze party-wise business trends on the go."
    },
    {
      icon: MessageCircle,
      bgColor: "bg-green-500",
      title: "WhatsApp Integration",
      description: "Send payment reminders, balance statements, and transaction confirmations directly to your parties via WhatsApp."
    },
    {
      icon: RefreshCw,
      bgColor: "bg-purple-600",
      title: "Real-time Sync",
      description: "All data syncs instantly between your desktop and mobile app, ensuring you always have the latest information."
    }
  ];

  return (
    <section id="mobile" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Desktop Power + Mobile Convenience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Main desktop application for full accounting power, plus mobile companion app 
            for checking party balances and sending messages on the go. Best of both worlds.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="flex justify-center space-x-4">
              <Card className="bg-slate-800 p-2 shadow-2xl transform rotate-3 w-64">
                <CardContent className="bg-white rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-brand-blue">SarrafaPro</span>
                    <div className="w-6 h-6 bg-brand-amber rounded"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Party: ADC</span>
                        <span className="text-green-600 font-bold">₹2,45,000</span>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Gold Weight</span>
                        <span className="text-amber-600 font-bold">125.5g</span>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Last Transaction</span>
                        <span className="text-slate-600 text-xs">25-07-2023</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full bg-brand-blue text-white text-sm">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Send WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800 p-2 shadow-2xl transform -rotate-3 w-64">
                <CardContent className="bg-white rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-brand-blue">Party Ledger</span>
                    <BookOpen className="text-brand-blue h-5 w-5" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <div>
                        <div className="text-sm font-medium">Gold Purchase</div>
                        <div className="text-xs text-slate-500">25-07-2023</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-bold">+₹1,20,000</div>
                        <div className="text-xs text-slate-500">50.5g</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b">
                      <div>
                        <div className="text-sm font-medium">Payment Received</div>
                        <div className="text-xs text-slate-500">24-07-2023</div>
                      </div>
                      <div className="text-right">
                        <div className="text-red-600 font-bold">-₹80,000</div>
                        <div className="text-xs text-slate-500">Cash</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center py-2">
                      <div>
                        <div className="text-sm font-medium">Silver Sale</div>
                        <div className="text-xs text-slate-500">23-07-2023</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-bold">+₹45,000</div>
                        <div className="text-xs text-slate-500">75g</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Desktop Performance + Mobile Access
            </h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${feature.bgColor} text-white w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h4>
                      <p className="text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
