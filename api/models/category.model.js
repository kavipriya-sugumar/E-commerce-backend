import mongoose from 'mongoose';

const categorySchema= new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            unique: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
          },
    },{timestamps: true}
);
const Category = mongoose.model('category',categorySchema);

export default Category;