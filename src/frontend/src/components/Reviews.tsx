import { Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Sophia Martinez',
      image: '/assets/generated/review-customer-1.dim_120x120.png',
      review: 'Absolutely stunning craftsmanship! The attention to detail in every pair is remarkable. These shoes have become my go-to for every special occasion.'
    },
    {
      id: 2,
      name: 'James Anderson',
      image: '/assets/generated/review-customer-2.dim_120x120.png',
      review: 'Exceptional quality and timeless style. I\'ve purchased three pairs now, and each one exceeds my expectations. The comfort matches the elegance perfectly.'
    },
    {
      id: 3,
      name: 'Isabella Chen',
      image: '/assets/generated/review-customer-3.dim_120x120.png',
      review: 'The most elegant shoes I\'ve ever owned. The luxury materials and impeccable design make every step feel special. Worth every penny!'
    },
    {
      id: 4,
      name: 'Michael Thompson',
      image: '/assets/generated/review-customer-4.dim_120x120.png',
      review: 'Outstanding service and premium products. The team helped me find the perfect pair, and the quality speaks for itself. Highly recommend to anyone seeking true luxury.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-accent/5 via-background to-accent/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight">
            What Our Clients Say
          </h2>
          <div className="w-24 h-0.5 bg-luxury-gold mx-auto" />
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Discover why discerning customers choose our collection
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative bg-card rounded-sm p-8 md:p-10 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 border border-border/40 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Quote className="w-16 h-16 text-luxury-gold" />
              </div>

              {/* Profile Section */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-luxury-gold/20 blur-xl rounded-full" />
                  <img
                    src={review.image}
                    alt={review.name}
                    className="relative w-16 h-16 rounded-full object-cover border-2 border-luxury-gold/30 shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-foreground">
                    {review.name}
                  </h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-luxury-gold"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed font-light relative z-10">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
