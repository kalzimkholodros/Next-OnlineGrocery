"use client";

import Image from "next/image";
import { Product } from "@/types";
import { useStore } from "@/store/useStore";
import { useNotification } from "@/components/Notification";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useStore();
  const notification = useNotification();

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            %{product.discount} İndirim
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            Yeni
          </div>
        )}
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold text-gray-900">{product.name}</h4>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            {product.discount ? (
              <>
                <span className="text-lg font-bold text-green-600">
                  ₺{(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-400 line-through">
                  ₺{product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-green-600">
                ₺{product.price.toFixed(2)}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-500">
            {product.stock} adet
          </span>
        </div>
        <button 
          onClick={() => {
            addToCart(product);
            notification.success('Ürün sepete eklendi!');
          }}
          className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
} 