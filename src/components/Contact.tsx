import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-secondary font-medium mb-2">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Contact Person
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Ready to source premium Indonesian spices? Our team is here to help with inquiries, 
            quotes, and partnership opportunities.
          </p>

          <div className="bg-card rounded-lg p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a
                href="mailto:info@rayaliwa.com"
                className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">info@rayaliwa.com</p>
                </div>
              </a>

              <a
                href="tel:+6281234567890"
                className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">+62 812 3456 7890</p>
                </div>
              </a>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Quick Response</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
