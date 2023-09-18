import mongoose from "mongoose";
import { productCategoriesImages_Input } from "../dto/products/product-categories-inputs";

type CategoryModel = {
  name: string;
  nameTranslations: string;
  slug: string;
  parent: string;
  description: string;
  display: string;
  image: productCategoriesImages_Input;
  menu_order: number;
  subCategories: string[];
  products: string[];
  displayOrder: number; // 100 - 1
  count: number;	//	Number of published products for the resource.READ-ONLY
};

export type CategoryDoc = mongoose.Document & CategoryModel;

const categorySchema = new mongoose.Schema(
  {
    name: String,
    nameTranslations: { en: { type: String }, de: { type: String } },
    parent: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "categories",
    },
    slug: String,
    description: String,
    display: String,
    image: {
      id: {
        type:String,
        default: new mongoose.Types.ObjectId()
      },
      date_created: String,
      date_created_gmt: String,
      date_modified: String,
      date_modified_gmt: String,
      src: String,
      name: String,
      alt: String,
    },
    menu_order: Number,
    subCategories: [
      { type: String  },
    ],
    products: [
      {
        type: String,
      },
    ],
    displayOrder: Number
  },
  {
    toJSON: {
      transform(doc, ret, options) {
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
    timestamps: true,
  }
);

const categories =
  mongoose.models.categories || mongoose.model<CategoryDoc>("categories", categorySchema);

export { categories };
