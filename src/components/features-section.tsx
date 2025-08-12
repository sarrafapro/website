import { Upload, Users, MessageCircle, TrendingUp, Smartphone, Check, Mic, PenTool } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Mic,
      bgColor: "bg-purple-600",
      title: "Voice-to-Text Entry",
      description: "Speak your transactions and let AI convert them to accurate entries. Perfect for quick data entry while you're busy with customers.",
      benefit: "Hands-free input",
      benefitColor: "text-purple-600"
    },
    {
      icon: PenTool,
      bgColor: "bg-indigo-600",
      title: "Handwriting Recognition",
      description: "Write transactions on paper and scan to upload entries. Advanced OCR technology converts your handwritten documents to digital entries instantly.",
      benefit: "Scan handwritten notes",
      benefitColor: "text-indigo-600"
    },
    {
      icon: Upload,
      bgColor: "bg-brand-blue",
      title: "Smart Transaction Upload",
      description: "Upload party transactions instantly without manual typing. Smart recognition automatically categorizes and processes your transaction data.",
      benefit: "No manual data entry",
      benefitColor: "text-brand-blue"
    },
    {
      icon: MessageCircle,
      bgColor: "bg-green-500",
      title: "Direct WhatsApp Integration",
      description: "Send payment reminders, balance statements, and transaction updates directly to your parties via WhatsApp from within the app - no switching required.",
      benefit: "Instant communication",
      benefitColor: "text-green-500"
    },
    {
      icon: Users,
      bgColor: "bg-amber-600",
      title: "Karigar Lot Management",
      description: "Complete management of your karigar operations with lot tracking, issue/receive functionality, and worker performance analytics.",
      benefit: "Worker tracking",
      benefitColor: "text-amber-600"
    },
    {
      icon: TrendingUp,
      bgColor: "bg-rose-600",
      title: "Comprehensive Reports",
      description: "Generate detailed reports for party ledgers, profit/loss statements, inventory analysis, and business insights with just one click.",
      benefit: "Business insights",
      benefitColor: "text-rose-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Desktop-Powered Features for Maximum Performance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Native desktop application delivers lightning-fast processing and rock-solid security. 
            Every feature runs instantly on your computer without internet dependency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition duration-300">
                <div className={`${feature.bgColor} text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {feature.description}
                </p>
                <div className={`${feature.benefitColor} font-medium`}>
                  <Check className="inline mr-2 h-4 w-4" />
                  {feature.benefit}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
