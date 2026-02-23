export default function ShoeGallery() {
  const shoes = [
    {
      id: 1,
      image: '/assets/generated/adidas-mens-shoe.dim_800x600.png',
      alt: 'Adidas Ultraboost Men\'s Running Shoes'
    },
    {
      id: 2,
      image: '/assets/generated/nike-mens-shoe.dim_800x600.png',
      alt: 'Nike Air Max Men\'s Sneakers'
    },
    {
      id: 3,
      image: '/assets/generated/puma-mens-shoe.dim_800x600.png',
      alt: 'Puma RS-X Men\'s Athletic Shoes'
    },
    {
      id: 4,
      image: '/assets/generated/asian-mens-shoe.dim_800x600.png',
      alt: 'Asian Marathon Men\'s Sports Shoes'
    },
    {
      id: 5,
      image: '/assets/generated/other-brand-mens-shoe.dim_800x600.png',
      alt: 'Premium Men\'s Casual Shoes'
    },
    {
      id: 6,
      image: '/assets/generated/shoe-6.dim_800x800.png',
      alt: 'Men\'s Designer Shoes'
    },
    {
      id: 7,
      image: '/assets/generated/shoe-7.dim_800x800.png',
      alt: 'Men\'s Luxury Footwear'
    },
    {
      id: 8,
      image: '/assets/generated/shoe-8.dim_800x800.png',
      alt: 'Men\'s Premium Sneakers'
    },
    {
      id: 9,
      image: '/assets/generated/shoe-9.dim_800x800.png',
      alt: 'Men\'s Athletic Shoes'
    },
    {
      id: 10,
      image: '/assets/generated/shoe-10.dim_800x800.png',
      alt: 'Men\'s Sport Shoes'
    },
    {
      id: 11,
      image: '/assets/generated/shoe-11.dim_800x800.png',
      alt: 'Men\'s Casual Footwear'
    },
    {
      id: 12,
      image: '/assets/generated/shoe-12.dim_800x800.png',
      alt: 'Men\'s Fashion Shoes'
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
