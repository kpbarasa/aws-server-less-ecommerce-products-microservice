import mongoose from "mongoose";

type CouponModel = {
  code: string;
  amount: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  discount_type: string; // Determines the type of discount that will be applied. Options: percent, fixed_cart and fixed_product. Default is fixed_cart.
  description: string;
  usage_count: number;
  individual_use: boolean;
  product_ids: string[];
  excluded_product_ids: string[];
  usage_limit: number; // How many times the coupon can be used in total.
  usage_limit_per_user: number;
  limit_usage_to_x_items: number;
  free_shipping: boolean; //If true and if the free shipping method requires a coupon, this coupon will enable free shipping. Default is false.
  product_categories: string[]; // List of category IDs the coupon applies to.
  excluded_product_categories: string[]; // If true, this coupon will not be applied to items that have sale prices. Default is false.
  exclude_sale_items: boolean; 
  minimum_amount: string; // Minimum order amount that needs to be in the cart before coupon applies.
  maximum_amount: string[]; // Maximum order amount allowed when using the coupon.
  email_restrictions: string[]; // List of email addresses that can use this coupon.
  used_by: string[]; // List of user IDs (or guest email addresses) that have used the coupon.
  meta_data: string[];
};

export type CouponDoc = mongoose.Document & CouponModel;

const CouponSchema = new mongoose.Schema(
  {
    code: String,
    amount: String,
    date_created: String,
    date_created_gmt: String,
    date_modified: String,
    date_modified_gmt: String,
    discount_type: String,
    description: String,
    usage_count: Number,
    individual_use: Boolean,
    product_ids: [
      {
        _id: String
      },
    ],
    excluded_product_ids: [
      {
        _id: String
      },
    ],
    usage_limit: Number,
    usage_limit_per_user: Number,
    limit_usage_to_x_items: Number,
    free_shipping: Boolean,
    product_categories: [
      {
        _id: String
      },
    ],
    excluded_product_categories: [
      {
        _id: String
      },
    ],
    exclude_sale_items: Boolean,
    minimum_amount: String,
    maximum_amount: String,
    email_restrictions: [
      {
        emails: String,
      },
    ],
    used_by: [
      {
        _id: String
      },
    ],
    meta_data: [
      {
        _id: String,
        key: String,
        value: String,
      },
    ],
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

const couponsModel =
  mongoose.models.couponModel || mongoose.model<CouponDoc>("coupons", CouponSchema);

export { couponsModel };
