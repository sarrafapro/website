import { Mic, PenTool, MessageCircle, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function UsabilitySection() {
  const usabilityFeatures = [
    {
      icon: Mic,
      title: "Voice-to-Text Entry",
      description: "Simply speak your transaction details",
      details: [
        "\"Ramesh to 50,000 rupaye diye.\"",
        "\"2394 gram Chain, 64 tunch, 5 wastage Ashish ko diya.\"",
        "\"KB Jewellers se 250 pcs pendant aaya hai. Labour hai 5 rupaye per piece\"",
        "Works in your preferred language",
      ],
      demoText: "Try saying: \"Raj Jewellers se 26000 rupaye aaye\"",
      bgColor: "from-purple-500 to-purple-600",
      accentColor: "text-purple-600"
    },
    {
      icon: PenTool,
      title: "Handwriting Recognition",
      description: "Write on paper and scan to upload entries",
      details: [
        "Write transaction details on any paper",
        "Scan with your phone camera or scanner",
        "Instant conversion to digital entries",
        "Supports various handwriting styles"
      ],
      demoText: "Write your transactions on paper, take a photo, and upload instantly!",
      bgColor: "from-indigo-500 to-indigo-600",
      accentColor: "text-indigo-600"
    },
    {
      icon: MessageCircle,
      title: "Direct WhatsApp Integration",
      description: "Send messages without leaving the app",
      details: [
        "Payment reminders with party balance",
        "Transaction confirmations instantly",
        "Custom message templates",
        "Bulk messaging to multiple parties"
      ],
      demoText: "\"Your balance is ₹1,25,000. Payment due tomorrow.\"",
      bgColor: "from-green-500 to-green-600",
      accentColor: "text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Revolutionary Usability Features
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experience the future of business software with intuitive input methods 
            that work the way you naturally communicate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {usabilityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-white text-slate-800 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${feature.bgColor} p-6 text-white`}>
                    <IconComponent className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-white/90">{feature.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3">
                          <Zap className={`${feature.accentColor} h-4 w-4 mt-1 flex-shrink-0`} />
                          <span className="text-slate-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-l-slate-400">
                      <p className="text-sm font-medium text-slate-600 mb-1">Demo Example:</p>
                      <p className={`${feature.accentColor} font-medium`}>
                        {feature.demoText}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Why These Features Matter for Jewellery Businesses
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Save Time</h4>
                <p className="text-slate-300 text-sm">
                  Voice input is 3x faster than typing. Perfect when your hands are busy with jewelry or customers.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Reduce Errors</h4>
                <p className="text-slate-300 text-sm">
                  Natural input methods reduce typos and data entry mistakes common in manual systems.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Better Customer Service</h4>
                <p className="text-slate-300 text-sm">
                  Send instant WhatsApp updates while focusing on your customers, not switching between apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
