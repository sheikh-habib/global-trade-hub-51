import { MapPin, Package, Store, FileText, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
  onQuotation: (product: Product) => void;
  onVisitStore: (product: Product) => void;
}

const ProductCard = ({ product, onOrder, onQuotation, onVisitStore }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Product image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-3 left-3">{product.category}</Badge>
        <Badge variant="secondary" className="absolute top-3 right-3">
          <MapPin className="h-3 w-3 mr-1" />
          {product.country}
        </Badge>
      </div>

      <CardContent className="p-4">
        {/* Product name */}
        <h3 className="font-semibold text-foreground text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toLocaleString()}
          </span>
          <span className="text-sm text-muted-foreground">/ unit</span>
        </div>

        {/* Min order */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Package className="h-4 w-4" />
          <span>Min. Order: {product.minOrder} {product.minOrder > 1 ? "units" : "unit"}</span>
        </div>

        {/* Supplier */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
          <Store className="h-4 w-4" />
          <span>{product.supplier}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        <div className="flex gap-2 w-full">
          <Button 
            className="flex-1" 
            onClick={() => onOrder(product)}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Order
          </Button>
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => onQuotation(product)}
          >
            <FileText className="h-4 w-4 mr-2" />
            RFQ
          </Button>
        </div>
        <Button 
          variant="ghost" 
          className="w-full"
          onClick={() => onVisitStore(product)}
        >
          <Store className="h-4 w-4 mr-2" />
          Visit Store
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
