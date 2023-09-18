import { APIGatewayEvent } from "aws-lambda/trigger/api-gateway-proxy";
import { couponRepository } from "../repisitory/coupon-repository";
import { ErrorResponse, SusccessResponse } from "../utility/response";
import { plainToClass } from "class-transformer";
import { productCategoriesInput } from "../dto/products/product-categories-inputs";
import { AppValidationError } from "../utility/errors";
import { DealsInput } from "../dto/deals-input";

export class CouponsService {

    _repository: couponRepository;

    constructor(repository: couponRepository) {
        this._repository = repository;
    }

    async ResponseWithError(event: APIGatewayEvent) {
        return ErrorResponse(404, new Error("Method not allowed !"));
    }

    async createCoupon(event: APIGatewayEvent) { 

        const input = plainToClass(DealsInput, event.body!);
        const error = await AppValidationError(input);
        if (error) return ErrorResponse(404, error);

        const data = await this._repository.createDeal(input)

        return SusccessResponse(data);
    }
    
    async updateCoupon(event: APIGatewayEvent) { 
        
        const coupon_id = event.pathParameters?.id;
        if (!coupon_id) return ErrorResponse(403, "please provide Coupon id");

        console.log({coupon_id});
        
        const input = plainToClass(DealsInput, event.body!);

        const error = await AppValidationError(input);
        if (error) return ErrorResponse(404, error);

        input.id = coupon_id;
        console.log({input:input.id});
        
        const data = await this._repository.updateDeal(input);

        return SusccessResponse(data);
    }
    
    async getCoupons(event: APIGatewayEvent) {

        const coupon_id = event.queryStringParameters?.id;
        if (coupon_id) {
            const data = await this._repository.getDeal(coupon_id);
            return SusccessResponse(data)
        } 
        
        const data = await this._repository.getDeals()
        return SusccessResponse(data)

     }
    
    async delCoupon(event: APIGatewayEvent) { 

        const dealId = event.pathParameters?.id;
        if (!dealId) return ErrorResponse(403, "please provide Coupon id");

        const data = await this._repository.deleteDeal(dealId);

        return SusccessResponse(data);
    }

}

