import vanillaImg from "@/assets/product-vanilla.jpg";
import saffronImg from "@/assets/product-saffron.jpg";
import cloveImg from "@/assets/product-clove.jpg";

const products = [
  {
    name: "Vanilla",
    description: "Premium grade vanilla beans from the finest Indonesian plantations. Rich aroma and exceptional flavor profile.",
    image: vanillaImg,
    origin: "Papua & Sulawesi",
  },
  {
    name: "Saffron",
    description: "The world's most precious spice, carefully harvested and processed to preserve its vibrant color and delicate taste.",
    image: saffronImg,
    origin: "Turkey Partnership",
  },
  {
    name: "Clove",
    description: "Aromatic whole cloves with intense flavor, perfect for culinary and medicinal applications worldwide.",
    image: cloveImg,
    origin: "Maluku Islands",
  },
];

const Products = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-secondary font-medium mb-2">Our Premium Selection</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {product.origin}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
          >
            Request Product Catalog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
