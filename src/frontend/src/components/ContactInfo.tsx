import { Phone, MessageCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactInfo() {
  const phoneNumber = '+919056156995';
  const whatsappNumber = '919056156995';

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'hari-traders';

  return (
    <footer className="bg-gradient-to-br from-accent/10 via-background to-accent/5 border-t border-border/40">
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Get in Touch
            </h2>
            <p className="text-muted-foreground font-light">
              Visit our showroom or contact us for personalized assistance
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={handlePhoneClick}
              size="lg"
              className="w-full sm:w-auto bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 py-6 rounded-sm shadow-luxury transition-all duration-300 hover:shadow-luxury-hover hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-3" />
              <span className="text-lg">{phoneNumber}</span>
            </Button>

            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black font-semibold px-8 py-6 rounded-sm transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              <span className="text-lg">WhatsApp</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border/40 mb-12" />

          {/* Footer Info */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} hari traders. All rights reserved.</span>
            </div>

            {/* Attribution */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground/70">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-luxury-gold fill-luxury-gold" />
              <span>using</span>
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-gold hover:text-luxury-gold-dark transition-colors duration-200 font-medium"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
