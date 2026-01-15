import { Search } from "lucide-react";
import logo from "@/assets/logo-rayaliwa.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="PT Raya Liwa" className="h-12 md:h-14 w-auto" />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Products
            </a>
            <a href="#why-us" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Why Us
            </a>
            <a href="#locations" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Locations
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex px-5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
