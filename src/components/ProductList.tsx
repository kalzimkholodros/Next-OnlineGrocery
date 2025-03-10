import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products?: Product[];
}

export default function ProductList({ products = [] }: ProductListProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        Ürün bulunamadı
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
} 