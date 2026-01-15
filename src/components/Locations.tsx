import { MapPin } from "lucide-react";

const locations = [
  {
    country: "Indonesia",
    flag: "🇮🇩",
    description: "Our headquarters and primary sourcing hub. Direct partnerships with farmers across Java, Sulawesi, Papua, and the Maluku Islands.",
    role: "Sourcing & Production",
  },
  {
    country: "Türkiye",
    flag: "🇹🇷",
    description: "Strategic distribution center connecting Asian spices to European and Middle Eastern markets with efficient logistics.",
    role: "Distribution Hub",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-secondary font-medium mb-2">Our Presence</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Base Countries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={location.country}
              className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{location.flag}</span>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-foreground">
                    {location.country}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-secondary font-medium">
                    <MapPin className="w-3 h-3" />
                    {location.role}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {location.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
