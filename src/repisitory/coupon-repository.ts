import { DealsInput } from "../dto/deals-input";
import { CouponDoc, couponsModel } from "../models/coupons-model";

export class couponRepository {
  async createDeal({
    code,
    amount,
    date_created,
    date_created_gmt,
    date_modified,
    date_modified_gmt,
    discount_type,
    description,
    usage_count,
    individual_use,
    product_ids,
    excluded_product_ids,
    usage_limit,
    usage_limit_per_user,
    limit_usage_to_x_items,
    free_shipping,
    excluded_product_categories,
    exclude_sale_items,
    minimum_amount,
    maximum_amount,
    email_restrictions,
    used_by,
    meta_data,
  }: DealsInput ): Promise<CouponDoc> {
    // Create new category
    return couponsModel.create({
        code,
        amount,
        date_created,
        date_created_gmt,
        date_modified,
        date_modified_gmt,
        discount_type,
        description,
        usage_count,
        individual_use,
        product_ids,
        excluded_product_ids,
        usage_limit,
        usage_limit_per_user,
        limit_usage_to_x_items,
        free_shipping,
        excluded_product_categories,
        exclude_sale_items,
        minimum_amount,
        maximum_amount,
        email_restrictions,
        used_by,
        meta_data,
    });
  }

  async updateDeal({
    id,
    code,
    amount,
    date_modified,
    date_modified_gmt,
    discount_type,
    description,
    usage_count,
    individual_use,
    product_ids,
    excluded_product_ids,
    usage_limit,
    usage_limit_per_user,
    limit_usage_to_x_items,
    free_shipping,
    excluded_product_categories,
    exclude_sale_items,
    minimum_amount,
    maximum_amount,
    email_restrictions,
    used_by,
    meta_data,
  }: DealsInput ){
    // Create new category
        let existingCoupon= (await couponsModel.findById(id)) as CouponDoc;
        existingCoupon.code =code,
        existingCoupon.amount=amount,
        existingCoupon.date_modified=date_modified,
        existingCoupon.date_modified_gmt=date_modified_gmt,
        existingCoupon.discount_type=discount_type,
        existingCoupon.description=description,
        existingCoupon.usage_count=usage_count,
        existingCoupon.individual_use=individual_use,
        existingCoupon.product_ids=product_ids,
        existingCoupon.excluded_product_ids=excluded_product_ids,
        existingCoupon.usage_limit=usage_limit,
        existingCoupon.usage_limit_per_user=usage_limit_per_user,
        existingCoupon.limit_usage_to_x_items=limit_usage_to_x_items,
        existingCoupon.free_shipping=free_shipping,
        existingCoupon.excluded_product_categories=excluded_product_categories,
        existingCoupon.exclude_sale_items=exclude_sale_items,
        existingCoupon.minimum_amount=minimum_amount,
        existingCoupon.maximum_amount=maximum_amount,
        existingCoupon.email_restrictions=email_restrictions,
        existingCoupon.used_by=used_by,
        existingCoupon.meta_data=meta_data
        return existingCoupon.save();
  }

  async deleteDeal(id:string) {
    return (await couponsModel.findByIdAndDelete(id)) as CouponDoc
}

async getDeals(offset = 0, pages?: number) {
  return couponsModel.find().skip(offset).limit(pages ? pages : 500)
}

  async getDeal(id:string) {
    return (await couponsModel.findById(id)) as CouponDoc
}
}
