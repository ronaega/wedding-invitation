import logo from "@/assets/logo-rayaliwa.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="PT Raya Liwa" className="h-12 w-auto brightness-0 invert" />
          </div>
          
          <p className="text-sm text-background/60 text-center md:text-right">
            © {new Date().getFullYear()} PT Raya Liwa. Indonesian Herbs & Spices.
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
