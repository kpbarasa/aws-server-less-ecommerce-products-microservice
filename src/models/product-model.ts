import { Length } from "class-validator";
import mongoose from "mongoose";
import { ProductDefaulrtsAttributes_Input, ProductsAttributesInput, ProductsDimensionsInput, ProductsDownloadInput, ProductsImagesInput } from "../dto/products/product-inputs";
import { productCategoriesInput } from "../dto/products/product-categories-inputs";
import { MetaData_Input } from "../dto/metadata-input.ts";

type ProductModel = {
  id: string;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: string;
  date_on_sale_from_gmt: string;
  date_on_sale_to: string;
  date_on_sale_to_gmt: string;
  price_html: string;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: ProductsDownloadInput[];
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: number;
  stock_status: string;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  sold_individually: boolean;
  weight: string;
  dimensions: ProductsDimensionsInput[];
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  related_ids: string[];
  upsell_ids: string[];
  cross_sell_ids: string[];
  parent_id: number;
  purchase_note: string;
  categories: productCategoriesInput[];
  tags: string[];
  images: ProductsImagesInput[];
  attributes: string[];
  default_attributes: ProductDefaulrtsAttributes_Input[];
  variations: string[];
  grouped_products: string[];
  menu_order: number;
  meta_data: MetaData_Input[];
};

export type ProductDoc = mongoose.Document & ProductModel;

const productSchema = new mongoose.Schema(
  {
    name: String,
    slug: String,
    permalink: String,
    date_created: String,
    date_created_gmt: String,
    date_modified: String,
    date_modified_gmt: String,
    type: String,
    status: String,
    featured: Boolean,
    catalog_visibility: String,
    description: String,
    short_description: String,
    sku: String,
    price: String,
    regular_price: String,
    sale_price: String,
    date_on_sale_from: String,
    date_on_sale_from_gmt: String,
    date_on_sale_to: String,
    date_on_sale_to_gmt: String,
    price_html: String,
    on_sale: Boolean,
    purchasable: Boolean,
    total_sales: Number,
    virtual: Boolean,
    downloadable: Boolean,
    downloads: [
      {
        id: String,
        name: String,
        file: String
      }
    ],
    download_limit: Number,
    download_expiry: Number,
    external_url: String,
    button_text: String,
    tax_status: String,
    tax_class: String,
    manage_stock: Boolean,
    stock_quantity: Number,
    stock_status: String,
    backorders: String,
    backorders_allowed: Boolean,
    backordered: Boolean,
    sold_individually: Boolean,
    weight: String,
    dimensions: [
      {
        length: String,
        width: String,
        height: String
      }
    ],
    shipping_required: Boolean,
    shipping_taxable: Boolean,
    shipping_class: String,
    shipping_class_id: Number,
    reviews_allowed: Boolean,
    average_rating: String,
    rating_count: Number,
    related_ids: [],
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: Number,
    purchase_note: String,
    categories: [
      {
        id: Number,
        name: String,
        slug: String,
        parent: Number,
        description: String,
        display: String,
        image: Object,
        menu_order: Number,
        count: Number
      }
    ],
    tags: [
      {
        id: Number,
        name: String,
        slug: String,
        description: String,
        count: Number
      }
    ],
    images: [
      {
        id: Number,
        date_created: String,
        date_created_gmt: String,
        date_modified: String,
        date_modified_gmt: String,
        src: String,
        name: String,
        alt: String,
      }
    ],
    attributes: [
      {
        id: Number,
        name: String,	//	Attribute name.
        position: Number,
        visible: Boolean,
        variation: Boolean,
        options: []
      }
    ],
    default_attributes: [
      {
        id: String,
        name: String,
        options: []
      }
    ],
    variations: [],
    grouped_products: [],
    menu_order: Number,
    meta_data: [
      {
        id: Number,
        key: String,
        value: String
      }
    ]
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

const products =
  mongoose.models.products ||
  mongoose.model<ProductDoc>("products", productSchema);

export { products };
