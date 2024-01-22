// models/Asset.js
import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema({
  barcode: String,
  name: String,
  image: String, // Assuming you store the image URL or path
  quantity: {
    type: Number,
    default: 1, // You can set a default quantity if needed
  },
  // other asset details
});

const Asset = mongoose.model('Asset', assetSchema);

export default Asset;