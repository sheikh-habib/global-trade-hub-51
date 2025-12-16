import { useState } from "react";
import { Search, Menu, X, Globe, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categories, countries } from "@/data/products";
import logo from "@/assets/logo.png";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedCountry: string;
  onCountryChange: (country: string) => void;
}

const Header = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedCountry,
  onCountryChange,
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-md">
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <span>Global B2B Marketplace - Connecting Buyers & Sellers Worldwide</span>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">Help Center</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="B2B Global Trade Center" className="h-12 w-12 rounded-lg" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">B2B Global Trade Center</h1>
              <p className="text-xs text-muted-foreground">Your Trusted Trading Partner</p>
            </div>
          </div>

          {/* Search bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl">
            <div className="flex w-full">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-r-none border-r-0 min-w-[140px]">
                    {selectedCategory || "All Categories"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => onCategoryChange("")}>
                    All Categories
                  </DropdownMenuItem>
                  {categories.map((cat) => (
                    <DropdownMenuItem key={cat} onClick={() => onCategoryChange(cat)}>
                      {cat}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search products, suppliers, categories..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="rounded-none border-x-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button className="rounded-l-none">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => onCountryChange("")}>
                  All Countries
                </DropdownMenuItem>
                {countries.map((country) => (
                  <DropdownMenuItem key={country} onClick={() => onCountryChange(country)}>
                    {country}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="lg:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <ul className={`${mobileMenuOpen ? "block" : "hidden"} lg:flex lg:items-center lg:gap-6 py-3`}>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 w-full lg:w-auto justify-start">
                    <Menu className="h-4 w-4 mr-2" />
                    Categories
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => onCategoryChange("")}>
                    All Categories
                  </DropdownMenuItem>
                  {categories.map((cat) => (
                    <DropdownMenuItem key={cat} onClick={() => onCategoryChange(cat)}>
                      {cat}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 w-full lg:w-auto justify-start">
                    <Globe className="h-4 w-4 mr-2" />
                    Countries
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => onCountryChange("")}>
                    All Countries
                  </DropdownMenuItem>
                  {countries.map((country) => (
                    <DropdownMenuItem key={country} onClick={() => onCountryChange(country)}>
                      {country}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <a href="#products" className="block py-2 px-4 hover:bg-primary/80 rounded transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-primary/80 rounded transition-colors">
                Suppliers
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-primary/80 rounded transition-colors">
                Trade Shows
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-primary/80 rounded transition-colors">
                Logistics
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
