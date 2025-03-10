# FreshMarket 🛒

A modern e-commerce platform built with Next.js and Tailwind CSS, offering a seamless shopping experience with real-time cart management, user authentication, and a beautiful responsive design.

## Features ✨

- 🛍️ **Real-time Cart Management**: Add, remove, and update items in your cart instantly
- 👤 **User Authentication**: Secure login and signup functionality
- 🎨 **Modern UI**: Beautiful and responsive design using Tailwind CSS
- 🔍 **Search Functionality**: Find products quickly with our search feature
- 📱 **Mobile Responsive**: Perfect shopping experience on all devices
- 🛒 **Shopping Cart**: Manage your items with quantity controls
- 💰 **Price Management**: Support for regular prices and discounted items
- 📦 **Product Categories**: Browse products by categories
- 🔔 **Notifications**: Real-time feedback for cart actions

## Tech Stack 🛠️

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Database**: MongoDB
- **Authentication**: NextAuth.js
- **UI Components**: Custom components with Tailwind CSS

## Getting Started 🚀

1. Clone the repository:
   ```bash
   git clone https://github.com/kalzimkholodros/Next-OnlineGrocery.git
   ```

2. Install dependencies:
   ```bash
   cd foldername
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```
   MONGODB_URI=your_mongodb_uri
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure 📁

```
freshmarket/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable components
│   ├── lib/             # Utility functions
│   ├── store/           # Zustand store
│   └── types/           # TypeScript types
├── public/              # Static assets
└── package.json         # Project dependencies
```

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Zustand](https://github.com/pmndrs/zustand)
