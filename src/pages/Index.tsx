import { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import OrderModal from "@/components/OrderModal";
import QuotationModal from "@/components/QuotationModal";
import StoreModal from "@/components/StoreModal";
import Footer from "@/components/Footer";
import { products, Product } from "@/data/products";

const PRODUCTS_PER_PAGE = 12;

const Index = () => {
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Modal states
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [quotationModalOpen, setQuotationModalOpen] = useState(false);
  const [storeModalOpen, setStoreModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on search, category, and country
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.supplier.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "" || product.category === selectedCategory;

      const matchesCountry =
        selectedCountry === "" || product.country === selectedCountry;

      return matchesSearch && matchesCategory && matchesCountry;
    });
  }, [searchQuery, selectedCategory, selectedCountry]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Reset page when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Modal handlers
  const handleOrder = (product: Product) => {
    setSelectedProduct(product);
    setOrderModalOpen(true);
  };

  const handleQuotation = (product: Product) => {
    setSelectedProduct(product);
    setQuotationModalOpen(true);
  };

  const handleVisitStore = (product: Product) => {
    setSelectedProduct(product);
    setStoreModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with navigation */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        selectedCountry={selectedCountry}
        onCountryChange={handleCountryChange}
      />

      {/* Hero section */}
      <HeroSection />

      {/* Category quick filter */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Main content */}
      <main id="products" className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              selectedCountry={selectedCountry}
              onCountryChange={handleCountryChange}
            />
          </div>

          {/* Product listing */}
          <div className="flex-1">
            {/* Results header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedCategory || "All Products"}
                </h2>
                <p className="text-muted-foreground">
                  {filteredProducts.length} products found
                  {selectedCountry && ` in ${selectedCountry}`}
                </p>
              </div>

              {/* Active filters - Mobile */}
              <div className="flex flex-wrap gap-2 lg:hidden">
                {selectedCategory && (
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {selectedCategory}
                  </span>
                )}
                {selectedCountry && (
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {selectedCountry}
                  </span>
                )}
              </div>
            </div>

            {/* Product grid with pagination */}
            <ProductGrid
              products={paginatedProducts}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              onOrder={handleOrder}
              onQuotation={handleQuotation}
              onVisitStore={handleVisitStore}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <OrderModal
        product={selectedProduct}
        open={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
      <QuotationModal
        product={selectedProduct}
        open={quotationModalOpen}
        onClose={() => setQuotationModalOpen(false)}
      />
      <StoreModal
        product={selectedProduct}
        open={storeModalOpen}
        onClose={() => setStoreModalOpen(false)}
      />
    </div>
  );
};

export default Index;
