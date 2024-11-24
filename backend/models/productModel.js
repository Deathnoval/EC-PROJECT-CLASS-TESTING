import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    bookName:{
        type: String,
        required: true,
        default: 'Sample name',
    },
    category:{
        type: String,
        required: true,
        default: 'Sample category'
    },
    author:{
        type: String,
        required: true,
        default: 'Sample author',
    },
    publicCompany:{
        type: String,
        required: true,
        default: 'Sample public company',
    },
    language:{
        type: String,
        required: true,
        default: 'English',
    },
    form:{
        type: String,
        required: true,
        default: 'Sample form',
    },
    pageNumber:{
        type: Number,
        required: true,
        default: 0,
    },
    bookPrice:{
        type: Number,
        required: true,
        default: 0,
    },
    bookDetail:{
        type: String,
        required: true,
        default: 'Sample description',
    },
    bookImage:{
        type: String,
        required: true,
        default: '/imageshome/tieuthuyet.jpg',
    },
    bookQuaranty:{
        type: Number,
        required: true,
        default: 0,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;