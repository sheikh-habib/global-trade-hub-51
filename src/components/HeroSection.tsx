import { ArrowRight, Shield, Truck, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      {/* Hero content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 animate-fade-in">
            Connect with Global
            <span className="text-primary block">Trade Partners</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Discover millions of products from verified suppliers worldwide. 
            Source quality goods, negotiate prices, and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="group">
              Start Sourcing
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-card/10 border-card text-card hover:bg-card hover:text-card-foreground">
              Become a Supplier
            </Button>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="bg-card/95 backdrop-blur-sm rounded-lg p-6 flex items-center gap-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center">
              <Globe2 className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">190+</p>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
          </div>
          <div className="bg-card/95 backdrop-blur-sm rounded-lg p-6 flex items-center gap-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">50K+</p>
              <p className="text-muted-foreground">Verified Suppliers</p>
            </div>
          </div>
          <div className="bg-card/95 backdrop-blur-sm rounded-lg p-6 flex items-center gap-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center">
              <Truck className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">2M+</p>
              <p className="text-muted-foreground">Products Listed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
