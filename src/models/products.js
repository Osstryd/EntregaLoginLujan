import { Schema, model } from "mongoose";

const nameCollection = "Producto";

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, "El titulo del producto es obligatorio"],
  },
  description: {
    type: String,
    required: [true, "La descripcion del producto es obligatoria"],
  },
  code: {
    type: String,
    required: [true, "El codigo del producto es obligatorio"],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "El precio del producto es obligatorio"],
  },
  status: {
    type: Boolean,
    default: true,
  },
  stock: {
    type: Number,
    required: [true, "El stock del producto es obligatorio"],
  },
  category: {
    type: String,
    required: [true, "La categoria del titulo del producto es obligatoria"],
  },
  thumbnails: [{ type: String }],
});

export const productModel = model(nameCollection, ProductSchema);
