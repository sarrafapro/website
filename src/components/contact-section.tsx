import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  business?: string;
  city?: string;
  message?: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    business: "",
    city: "",
    message: ""
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields (Name, Email, Phone)",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Formspree form submission
      // Sign up at https://formspree.io and get your form endpoint
      const FORMSPREE_URL = 'https://formspree.io/f/xanbverk';
      
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business: formData.business || '',
          city: formData.city || '',
          message: formData.message || ''
        })
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for your interest! Our team will contact you soon within 24 hours.",
        });
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          business: "",
          city: "",
          message: ""
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Unable to send your message. Please try again or call us directly at +91 8448381418.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      bgColor: "bg-brand-blue",
      title: "Phone Support",
      info: "+91 8448381418",
      subtitle: "Monday - Saturday, 9 AM - 9 PM"
    },
    {
      icon: Mail,
      bgColor: "bg-green-600",
      title: "Email Support",
      info: "sarrafapro@gmail.com",
      subtitle: "We respond within 24 hours"
    },
    {
      icon: MessageCircle,
      bgColor: "bg-green-500",
      title: "WhatsApp Support",
      info: "+91 8448381418",
      subtitle: "Instant support via WhatsApp"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Have questions about SarrafaPro? Our team of experts is here to help you 
              understand how our solution can benefit your jewellery business.
            </p>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`${method.bgColor} text-white w-12 h-12 rounded-lg flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-slate-800">{method.title}</div>
                      <div className="text-slate-600">{method.info}</div>
                      <div className="text-sm text-slate-500">{method.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="bg-slate-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Request a Demo</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="business" className="text-sm font-medium text-slate-700 mb-2">
                    Business Name
                  </Label>
                  <Input
                    id="business"
                    value={formData.business || ""}
                    onChange={(e) => handleInputChange('business', e.target.value)}
                    placeholder="Enter your business name"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="city" className="text-sm font-medium text-slate-700 mb-2">
                    City
                  </Label>
                  <Input
                    id="city"
                    value={formData.city || ""}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Enter your city"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-slate-700 mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message || ""}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="mt-1"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue text-white hover:bg-brand-blue-dark text-lg py-4"
                >
                  {isSubmitting ? "Sending..." : "Request Demo"}
                </Button>
                
                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to our 
                  <span className="text-brand-blue hover:underline cursor-pointer ml-1">
                    Privacy Policy
                  </span>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
