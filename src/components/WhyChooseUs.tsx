import { Shield, Leaf, Globe, Award } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Premium Quality",
    description: "We source only the finest herbs and spices directly from trusted Indonesian farmers.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every batch undergoes rigorous testing to ensure purity, freshness, and safety standards.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "Reliable shipping to worldwide destinations with proper packaging and documentation.",
  },
  {
    icon: Award,
    title: "Certified Standards",
    description: "Meeting international export standards with proper certifications and compliance.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-secondary font-medium mb-2">Our Commitment</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Why Choose Raya Liwa?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6">
                <feature.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
