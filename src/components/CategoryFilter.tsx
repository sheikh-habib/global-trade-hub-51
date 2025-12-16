import { Factory, Cpu, Cog, FlaskConical, Shirt, Building2 } from "lucide-react";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  Agriculture: <Factory className="h-6 w-6" />,
  Electronics: <Cpu className="h-6 w-6" />,
  Machinery: <Cog className="h-6 w-6" />,
  Chemicals: <FlaskConical className="h-6 w-6" />,
  Textiles: <Shirt className="h-6 w-6" />,
  Construction: <Building2 className="h-6 w-6" />,
};

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <section className="py-8 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(selectedCategory === category ? "" : category)}
              className={cn(
                "flex flex-col items-center gap-3 p-4 rounded-lg border-2 transition-all duration-300",
                "hover:border-primary hover:shadow-lg hover:-translate-y-1",
                selectedCategory === category
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border bg-background"
              )}
            >
              <div
                className={cn(
                  "h-14 w-14 rounded-full flex items-center justify-center transition-colors",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {categoryIcons[category]}
              </div>
              <span
                className={cn(
                  "font-medium text-sm text-center",
                  selectedCategory === category ? "text-primary" : "text-foreground"
                )}
              >
                {category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
