import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-br from-background via-accent/5 to-background border-b border-border/40">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="relative">
            <div className="absolute inset-0 bg-luxury-gold/20 blur-3xl rounded-full" />
            <img
              src="/assets/generated/luxury-shop-logo.dim_400x400.png"
              alt="Hari Traders Logo"
              className="relative w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Brand Name */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-foreground">
              hari traders
            </h1>
            <div className="flex items-center justify-center gap-2 text-luxury-gold">
              <Sparkles className="w-5 h-5" />
              <p className="text-lg md:text-xl font-light tracking-[0.2em] uppercase text-muted-foreground">
                Curated Excellence
              </p>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>

          {/* Tagline */}
          <p className="max-w-2xl text-base md:text-lg text-muted-foreground/80 font-light leading-relaxed">
            Discover our exclusive collection of premium footwear, where timeless elegance meets contemporary style
          </p>
        </div>
      </div>
    </header>
  );
}
