import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Navbar />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Hakkımızda</h1>
          
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biz Kimiz?</h2>
            <p className="text-gray-600 mb-6">
              FreshMarket olarak, 2024 yılından bu yana müşterilerimize en taze ve kaliteli ürünleri sunmaktayız. 
              Amacımız, modern ve hızlı bir alışveriş deneyimi sunarak, müşterilerimizin zamandan tasarruf etmesini sağlamaktır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Misyonumuz</h2>
              <p className="text-gray-600">
                Müşterilerimize en taze ve kaliteli ürünleri, en uygun fiyatlarla sunarak, 
                onların günlük alışveriş ihtiyaçlarını kolaylaştırmak ve yaşam kalitelerini artırmak.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vizyonumuz</h2>
              <p className="text-gray-600">
                Türkiye'nin en güvenilir ve tercih edilen online market platformu olmak, 
                teknoloji ve inovasyonu kullanarak müşteri memnuniyetini en üst seviyeye çıkarmak.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Değerlerimiz</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Kalite</h3>
                  <p className="mt-1 text-gray-600">En taze ve kaliteli ürünleri sunuyoruz.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Hız</h3>
                  <p className="mt-1 text-gray-600">Siparişleriniz aynı gün içinde teslim edilir.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Müşteri Memnuniyeti</h3>
                  <p className="mt-1 text-gray-600">Müşterilerimizin memnuniyeti bizim önceliğimizdir.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 