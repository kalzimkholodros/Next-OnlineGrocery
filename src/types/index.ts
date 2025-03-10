export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  discount?: number;
  isNew?: boolean;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
  productCount: number;
} 