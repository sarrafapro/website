import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      initials: "SG",
      bgColor: "bg-brand-blue",
      name: "Shekhar Gupta",
      business: "Shekhar Chains, Agra",
      content: "The Voice Entry feature is a game-changer! I can simply speak the item details and it gets entered automatically. No more typing errors and everything is so much faster now."
    },
    {
      initials: "PJ",
      bgColor: "bg-green-600",
      name: "Pranav Jain",
      business: "Silver Jewellery, Delhi",
      content: "OCR technology is amazing! Just scan invoices and receipts, and all details are automatically extracted. Plus, sending estimates and invoices directly through WhatsApp to customers has streamlined our entire sales process."
    },
    {
      initials: "AS",
      bgColor: "bg-purple-600",
      name: "Amit Singh",
      business: "Singh Jewellery, Jaipur",
      content: "The security is unmatched - our inventory data, customer details, and financial records stay locked on our premises. No more worrying about data breaches or internet security with this desktop solution."
    }
  ];

  const stats = [
    { value: "500+", label: "Happy Customers", color: "text-brand-blue" },
    { value: "₹50Cr+", label: "Transactions Processed", color: "text-green-600" },
    { value: "99.9%", label: "Uptime Guarantee", color: "text-amber-600" },
    { value: "24/7", label: "Customer Support", color: "text-purple-600" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Why Jewellery Businesses Love Desktop Software
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Store owners across India have switched from cloud software to SarrafaPro desktop 
            for better speed, security, and savings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-brand-amber">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold`}>
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.business}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
