import { Category } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

async function getCategories() {
  const res = await fetch('http://localhost:3000/api/categories');
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Navbar />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Kategoriler</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category: Category) => (
              <div key={category.id} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-4xl mb-4">
                  {category.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{category.name}</h4>
                <p className="text-green-600 mt-2 font-medium">{category.productCount}+ ürün</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 