import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

interface OrderModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const OrderModal = ({ product, open, onClose }: OrderModalProps) => {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  if (!product) return null;

  const totalPrice = product.price * quantity;
  const minQuantity = product.minOrder;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (quantity < minQuantity) {
      toast({
        title: "Invalid quantity",
        description: `Minimum order quantity is ${minQuantity} units`,
        variant: "destructive",
      });
      return;
    }

    // Simulate order submission
    toast({
      title: "Order Submitted!",
      description: `Your order for ${quantity} units of ${product.name} has been submitted successfully.`,
    });

    // Reset form and close modal
    setQuantity(minQuantity);
    setCompanyName("");
    setEmail("");
    setAddress("");
    setNotes("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Place Order
          </DialogTitle>
          <DialogDescription>
            Complete the form below to order {product.name}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product info */}
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h4 className="font-medium text-foreground">{product.name}</h4>
                <p className="text-sm text-muted-foreground">{product.supplier}</p>
                <p className="text-primary font-semibold">${product.price}/unit</p>
              </div>
            </div>
          </div>

          {/* Quantity */}
          <div>
            <Label htmlFor="quantity">Quantity (Min: {minQuantity})</Label>
            <div className="flex items-center gap-2 mt-1">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(minQuantity, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                id="quantity"
                type="number"
                min={minQuantity}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(minQuantity, parseInt(e.target.value) || minQuantity))}
                className="text-center w-24"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Total */}
          <div className="bg-primary/10 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Price:</span>
              <span className="text-xl font-bold text-primary">
                ${totalPrice.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="address">Shipping Address</Label>
              <Textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Submit Order
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
