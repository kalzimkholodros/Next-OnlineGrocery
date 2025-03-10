import { Product } from "@/types";
import ProductList from "@/components/ProductList";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

async function getNewProducts() {
  const res = await fetch('http://localhost:3000/api/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  const products = await res.json();
  return products.filter((product: Product) => product.isNew);
}

export default async function NewProductsPage() {
  const newProducts = await getNewProducts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Navbar />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Yeni Ürünler</h1>
          <ProductList products={newProducts} />
        </div>
      </div>
      <Footer />
    </div>
  );
} 