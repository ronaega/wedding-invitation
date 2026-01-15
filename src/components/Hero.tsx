import heroImage from "@/assets/hero-spices.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Indonesian Spice Plantation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-2xl">
          <p className="text-secondary font-medium mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Premium Indonesian Herbs & Spices
          </p>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Connecting the World with Indonesia's Finest Spices
          </h1>
          <p 
            className="text-lg md:text-xl text-background/90 mb-8 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            PT Raya Liwa is your trusted partner for premium vanilla, saffron, clove, and more. 
            Sourced directly from Indonesian farms, delivered globally.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/90 transition-colors"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-background/20 backdrop-blur text-background font-semibold rounded-md border border-background/30 hover:bg-background/30 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
