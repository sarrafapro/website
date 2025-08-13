import { Gem, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", action: () => scrollToSection('features'), type: "scroll" },
        { name: "Benefits", action: () => scrollToSection('benefits'), type: "scroll" },
        { name: "Mobile App", action: () => scrollToSection('mobile'), type: "scroll" },
        { name: "Download", action: () => scrollToSection('contact'), type: "scroll" }
      ]
    },
    {
      title: "Company", 
      links: [
        { name: "About Us", action: () => scrollToSection('features'), type: "scroll" },
        { name: "Contact", action: () => scrollToSection('contact'), type: "scroll" },
        { name: "Blog", href: "/blog.html", type: "link" },
        { name: "Support", action: () => {}, type: "button" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy.html", type: "link" },
        { name: "Terms of Service", href: "/terms.html", type: "link" },
        { name: "Help Center", action: () => {}, type: "button" },
        { name: "Documentation", action: () => {}, type: "button" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" }
  ];

  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold">SarrafaPro</span>
              <Gem className="text-brand-amber ml-2 h-6 w-6" />
            </div>
            <p className="text-slate-400 mb-6">
              Smart accounting solution designed specifically for Indian jewellery SMBs. 
              Streamline your operations and grow your business.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-slate-400 hover:text-white transition duration-150"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.type === "link" && link.href ? (
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-white transition duration-150"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={link.action}
                        className="text-slate-400 hover:text-white transition duration-150 text-left"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              {section.title === "Support" && (
                <div className="mt-4 text-slate-400">
                  <div>Call: +91 8448381418</div>
                  <div className="text-sm">Mon-Sat, 9 AM - 7 PM</div>
                </div>
              )}
            </div>
          ))}
        </div>
        
                <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 mb-4 md:mb-0">
            © 2025 SarrafaPro. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy.html" className="text-slate-400 hover:text-white transition duration-150">
              Privacy Policy
            </a>
            <a href="/terms.html" className="text-slate-400 hover:text-white transition duration-150">
              Terms of Service
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-400 hover:text-white transition duration-150"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
