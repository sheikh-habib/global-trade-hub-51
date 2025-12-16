import { useState } from "react";
import { FileText, Send } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

interface QuotationModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const QuotationModal = ({ product, open, onClose }: QuotationModalProps) => {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryTerms, setDeliveryTerms] = useState("");
  const [requirements, setRequirements] = useState("");

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate RFQ submission
    toast({
      title: "Quotation Request Sent!",
      description: `Your RFQ for ${product.name} has been sent to ${product.supplier}. They will respond within 24-48 hours.`,
    });

    // Reset form and close modal
    setQuantity("");
    setTargetPrice("");
    setCompanyName("");
    setEmail("");
    setPhone("");
    setDeliveryTerms("");
    setRequirements("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Request for Quotation
          </DialogTitle>
          <DialogDescription>
            Send an RFQ to negotiate bulk pricing for {product.name}
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
                <p className="text-muted-foreground text-sm">
                  Listed Price: <span className="text-primary font-medium">${product.price}/unit</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quantity and target price */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="rfq-quantity">Quantity Needed</Label>
              <Input
                id="rfq-quantity"
                type="number"
                placeholder="e.g., 1000"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="target-price">Target Price ($/unit)</Label>
              <Input
                id="target-price"
                type="number"
                placeholder="e.g., 10"
                value={targetPrice}
                onChange={(e) => setTargetPrice(e.target.value)}
              />
            </div>
          </div>

          {/* Delivery terms */}
          <div>
            <Label htmlFor="delivery-terms">Preferred Delivery Terms</Label>
            <Select value={deliveryTerms} onValueChange={setDeliveryTerms}>
              <SelectTrigger>
                <SelectValue placeholder="Select delivery terms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EXW">EXW (Ex Works)</SelectItem>
                <SelectItem value="FOB">FOB (Free on Board)</SelectItem>
                <SelectItem value="CIF">CIF (Cost, Insurance, Freight)</SelectItem>
                <SelectItem value="DDP">DDP (Delivered Duty Paid)</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <div>
              <Label htmlFor="rfq-company">Company Name</Label>
              <Input
                id="rfq-company"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="rfq-email">Email</Label>
                <Input
                  id="rfq-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="rfq-phone">Phone</Label>
                <Input
                  id="rfq-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="requirements">Specific Requirements</Label>
              <Textarea
                id="requirements"
                placeholder="Describe any specific requirements, certifications, packaging preferences, etc."
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                rows={3}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              <Send className="h-4 w-4 mr-2" />
              Send RFQ
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuotationModal;
