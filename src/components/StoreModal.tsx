import { MapPin, Mail, Phone, Globe, Package, Star, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product, products } from "@/data/products";

interface StoreModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const StoreModal = ({ product, open, onClose }: StoreModalProps) => {
  if (!product) return null;

  // Get other products from the same supplier
  const supplierProducts = products.filter(
    (p) => p.supplier === product.supplier && p.id !== product.id
  ).slice(0, 4);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.supplier}</DialogTitle>
          <DialogDescription className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {product.country}
          </DialogDescription>
        </DialogHeader>

        {/* Store header */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-24 h-24 bg-primary/20 rounded-lg flex items-center justify-center">
              <Package className="h-12 w-12 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                  <Shield className="h-3 w-3 mr-1" />
                  Verified Supplier
                </Badge>
                <Badge variant="secondary">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  4.8 Rating
                </Badge>
                <Badge variant="outline">
                  <Award className="h-3 w-3 mr-1" />
                  Gold Member
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {product.supplier} is a leading manufacturer and exporter of high-quality 
                {product.category.toLowerCase()} products. With over 10 years of experience in 
                international trade, we serve clients in 50+ countries worldwide.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  contact@{product.supplier.toLowerCase().replace(/\s+/g, '')}.com
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  +1 (555) 123-4567
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  www.{product.supplier.toLowerCase().replace(/\s+/g, '')}.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card border rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-primary">10+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-primary">500+</p>
            <p className="text-sm text-muted-foreground">Products</p>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-primary">50+</p>
            <p className="text-sm text-muted-foreground">Countries</p>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-primary">98%</p>
            <p className="text-sm text-muted-foreground">Satisfaction</p>
          </div>
        </div>

        <Separator />

        {/* Other products */}
        {supplierProducts.length > 0 && (
          <div>
            <h4 className="font-semibold text-foreground mb-4">More Products from This Supplier</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {supplierProducts.map((p) => (
                <div key={p.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full aspect-square object-cover rounded mb-2"
                  />
                  <h5 className="font-medium text-sm line-clamp-2">{p.name}</h5>
                  <p className="text-primary font-semibold text-sm">${p.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3">
          <Button className="flex-1">
            <Mail className="h-4 w-4 mr-2" />
            Contact Supplier
          </Button>
          <Button variant="outline" className="flex-1">
            <Star className="h-4 w-4 mr-2" />
            Follow Store
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StoreModal;
