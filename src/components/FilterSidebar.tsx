import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { categories, countries } from "@/data/products";

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedCountry: string;
  onCountryChange: (country: string) => void;
}

const FilterSidebar = ({
  selectedCategory,
  onCategoryChange,
  selectedCountry,
  onCountryChange,
}: FilterSidebarProps) => {
  const hasFilters = selectedCategory || selectedCountry;

  const clearFilters = () => {
    onCategoryChange("");
    onCountryChange("");
  };

  return (
    <aside className="bg-card rounded-lg border border-border p-6 sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </h3>
        {hasFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <Separator className="mb-4" />

      {/* Category filter */}
      <div className="mb-6">
        <h4 className="font-medium text-foreground mb-3">Category</h4>
        <RadioGroup
          value={selectedCategory}
          onValueChange={onCategoryChange}
        >
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="" id="cat-all" />
            <Label htmlFor="cat-all" className="cursor-pointer">All Categories</Label>
          </div>
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={category} id={`cat-${category}`} />
              <Label htmlFor={`cat-${category}`} className="cursor-pointer">{category}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Separator className="mb-4" />

      {/* Country filter */}
      <div>
        <h4 className="font-medium text-foreground mb-3">Country</h4>
        <RadioGroup
          value={selectedCountry}
          onValueChange={onCountryChange}
        >
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="" id="country-all" />
            <Label htmlFor="country-all" className="cursor-pointer">All Countries</Label>
          </div>
          {countries.map((country) => (
            <div key={country} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={country} id={`country-${country}`} />
              <Label htmlFor={`country-${country}`} className="cursor-pointer">{country}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </aside>
  );
};

export default FilterSidebar;
