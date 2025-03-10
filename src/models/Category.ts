import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  productCount: { type: Number, default: 0 },
});

export default mongoose.models.Category || mongoose.model('Category', categorySchema); 