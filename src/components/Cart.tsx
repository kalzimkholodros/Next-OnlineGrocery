"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import { FiX, FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import { useStore } from '@/store/useStore';
import { useNotification } from '@/components/Notification';

export default function Cart() {
  const { cart, balance, isCartOpen, toggleCart, removeFromCart, updateQuantity, purchase } = useStore();
  const notification = useNotification();

  const total = cart.reduce((sum, item) => {
    const price = item.discount
      ? item.price * (1 - item.discount / 100)
      : item.price;
    return sum + price * item.quantity;
  }, 0);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-50" onClick={toggleCart} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Sepetim</h2>
            <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full">
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                Sepetiniz boş
              </div>
            ) : (
              cart.map((item) => (
                <div key={item._id} className="flex items-center gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-green-600 font-medium">
                        ₺{(item.discount ? item.price * (1 - item.discount / 100) : item.price).toFixed(2)}
                      </span>
                      {item.discount && (
                        <span className="text-sm text-gray-400 line-through">
                          ₺{item.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 rounded-full"
                      >
                        <FiMinus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 rounded-full"
                      >
                        <FiPlus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="ml-auto p-1 hover:bg-gray-200 rounded-full text-red-500"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="border-t p-4">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Toplam:</span>
              <span className="font-semibold text-lg">₺{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-medium">Bakiye:</span>
              <span className="font-semibold text-lg">₺{balance.toFixed(2)}</span>
            </div>
            <button
              onClick={() => {
                if (purchase()) {
                  notification.success('Sipariş başarıyla tamamlandı!');
                } else {
                  notification.error('Yetersiz bakiye!');
                }
              }}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Satın Al
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 