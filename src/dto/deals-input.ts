import { IsNumber, Length } from "class-validator";

export class DealsInput {
    id: string; // Coupon code.
    @Length(3, 18)
    code: string; // Coupon code.
    
    @IsNumber()
    amount: string; //The amount of discount. Should always be numeric, even if setting a percentage.
    date_created: string; //The date the coupon was created, in the site's timezone.
    date_created_gmt: string; // The date the coupon was created, as GMT
    date_modified: string; // The date the coupon was last modified, in the site's timezone.
    date_modified_gmt: string;  // The date the coupon was last modified, as GMT.
    discount_type: string; // Determines the type of discount that will be applied. Options: percent, fixed_cart and fixed_product. Default is fixed_cart.
    usage_count: number; // Number of times the coupon has been used already.
    description: string; // Coupon description.
    individual_use: boolean; // If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. Default is
    product_ids: string[]; // List of product IDs the coupon can be used on.
    excluded_product_ids: string[]; // List of product IDs the coupon cannot be used on.
    usage_limit: number; // How many times the coupon can be used in total.
    usage_limit_per_user: number; // How many times the coupon can be used per customer.
    limit_usage_to_x_items: number; // 	Max number of items in the cart the coupon can be applied to.
    free_shipping: boolean; //If true and if the free shipping method requires a coupon, this coupon will enable free shipping. Default is false.
    product_categories: string[]; // List of category IDs the coupon applies to.
    excluded_product_categories: string[]; // If true, this coupon will not be applied to items that have sale prices. Default is false.
    exclude_sale_items: boolean; // 	Max number of items in the cart the coupon can be applied to.
    minimum_amount: string; // Minimum order amount that needs to be in the cart before coupon applies.
    maximum_amount: string[]; // Maximum order amount allowed when using the coupon.
    email_restrictions: string[]; // List of email addresses that can use this coupon.
    used_by: string[]; // List of user IDs (or guest email addresses) that have used the coupon.
    meta_data: string[];
}