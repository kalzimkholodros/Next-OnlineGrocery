import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Product, Category } from "@/types";
import ProductList from "@/components/ProductList";

async function getCategories() {
  const res = await fetch('http://localhost:3000/api/categories');
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export default async function Home() {
  const [categoriesData, products] = await Promise.all([
    getCategories(),
    getProducts()
  ]);
  const mainCategories = categoriesData.slice(0, 4);
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Taze Ürünler<br />Kapınıza Kadar</h2>
              <p className="text-xl mb-8 text-green-100">En taze meyve, sebze ve günlük ürünler şimdi online marketimizde. Aynı gün teslimat ile taze ürünler evinizde!</p>
              <div className="flex gap-4">
                <button className="bg-white text-green-700 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold">
                  Alışverişe Başla
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Kampanyalar
                </button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/vegetables.jpg"
                alt="Taze Sebzeler"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Kategoriler</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mainCategories.map((category: Category) => (
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
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Öne Çıkan Ürünler</h3>
          <ProductList products={featuredProducts} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

const features = [
  {
    id: 'fast-delivery',
    title: "Hızlı Teslimat",
    description: "Siparişleriniz aynı gün içinde kapınızda. İstanbul içi 2 saat içinde teslimat imkanı.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'quality-guarantee',
    title: "Kalite Garantisi",
    description: "Tüm ürünlerimiz kalite kontrolünden geçirilir. %100 taze ürün garantisi sunuyoruz.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'secure-payment',
    title: "Güvenli Ödeme",
    description: "256-bit SSL sertifikası ile güvenli ödeme. Kapıda ödeme seçeneği mevcuttur.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  }
];
