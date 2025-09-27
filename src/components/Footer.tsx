import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '@/assets/ielts-logo.png';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Courses', href: '#features' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'About Us', href: '#about' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'IELTS Services',
      links: [
        { name: 'Speaking Practice', href: '#' },
        { name: 'Writing Assessment', href: '#' },
        { name: 'Reading Practice', href: '#' },
        { name: 'Listening Tests', href: '#' },
        { name: 'Mock Exams', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Student Portal', href: '#' },
        { name: 'Study Materials', href: '#' },
        { name: 'Exam Dates', href: '#' },
        { name: 'FAQ', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer id="contact" className="bg-foreground text-background dark:bg-background dark:text-foreground dark:border-t dark:border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="IELTS Excellence Institute" className="h-12 w-12 dark:invert invert dark:invert-0" />
              <div>
                <h3 className="text-2xl font-bold">IELTS Excellence</h3>
                <p className="text-background/70 dark:text-foreground/70">Institute</p>
              </div>
            </div>
            
            <p className="text-background/80 dark:text-foreground/80 max-w-md leading-relaxed">
              Empowering students worldwide to achieve their IELTS goals with expert guidance, 
              innovative teaching methods, and personalized support.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium">+1 (555) 123-4567</p>
                  <p className="text-sm text-background/70 dark:text-foreground/70">Mon-Sat 9:00 AM - 8:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-medium">info@ieltsexcellence.com</p>
                  <p className="text-sm text-background/70 dark:text-foreground/70">24/7 Email Support</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium">123 Education Street</p>
                  <p className="text-sm text-background/70 dark:text-foreground/70">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h4 className="text-lg font-semibold">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-background/80 dark:text-foreground/80 hover:text-background dark:hover:text-foreground transition-smooth hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 dark:border-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-background/70 dark:text-foreground/70 text-sm">
              © 2024 IELTS Excellence Institute. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-background/70 dark:text-foreground/70 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 dark:bg-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-smooth hover:scale-110 group"
                >
                  <social.icon className="h-5 w-5 text-background dark:text-foreground group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;