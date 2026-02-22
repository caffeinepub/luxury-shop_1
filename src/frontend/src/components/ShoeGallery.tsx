export default function ShoeGallery() {
  const shoes = [
    {
      id: 1,
      image: '/assets/generated/adidas-mens-shoe.dim_800x600.png',
      alt: 'Adidas Ultraboost Men\'s Running Shoes',
      title: 'Adidas Ultraboost'
    },
    {
      id: 2,
      image: '/assets/generated/nike-mens-shoe.dim_800x600.png',
      alt: 'Nike Air Max Men\'s Sneakers',
      title: 'Nike Air Max'
    },
    {
      id: 3,
      image: '/assets/generated/puma-mens-shoe.dim_800x600.png',
      alt: 'Puma RS-X Men\'s Athletic Shoes',
      title: 'Puma RS-X'
    },
    {
      id: 4,
      image: '/assets/generated/asian-mens-shoe.dim_800x600.png',
      alt: 'Asian Marathon Men\'s Sports Shoes',
      title: 'Asian Marathon'
    },
    {
      id: 5,
      image: '/assets/generated/other-brand-mens-shoe.dim_800x600.png',
      alt: 'Premium Men\'s Casual Shoes',
      title: 'Premium Casual'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight">
            Our Collection
          </h2>
          <div className="w-24 h-0.5 bg-luxury-gold mx-auto" />
        </div>

        {/* Gallery Grid - Fixed 2 columns */}
        <div className="grid grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
          {shoes.map((shoe) => (
            <div
              key={shoe.id}
              className="group relative bg-card rounded-sm overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 border border-border/40"
            >
              {/* Image Container */}
              <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-accent/5 to-background">
                <img
                  src={shoe.image}
                  alt={shoe.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Title */}
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-base md:text-xl font-serif font-semibold text-foreground tracking-wide">
                  {shoe.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
